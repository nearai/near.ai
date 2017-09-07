---
layout: post
title: PyTorch -- Dynamic Batching
date: "2017-09-06T16:38:03.284Z"
---

As part of our work on Teaching Machines to Code, we are building Deep Learning models that are reading or writing code in a tree format. After trying to manage this complexity in TensorFlow, I’ve decided to give a try to PyTorch.

[PyTorch](http://pytorch.org) is a framework built by Facebook AI researchers and has been growing in popularity in Natural Language and Reinforcment Learning research community. It’s main benefit is in dynamic graph building principle — compared to Tensorflow, where graph is built once and then “executed” many times, PyTorch allows to dynamically rebuild graph using simple Python logic, as if you were doing computation with numpy arrays.

![PyTorch visualizatoin](https://cdn-images-1.medium.com/max/800/1*5PLIVNA5fIqEC8-kZ260KQ.gif)

This flexibility attracted people who work with complex input/output data [e.g. language, trees, graphs] or need to run some custom logic in the middle of the computation [e.g. Deep RL].

Here I want to talk about batching things. Even though PyTorch is fast by using GPU accelerators and in general pushing computation on C modules, if you are not batching your computation — you are still going to pay the toll.

Recursive neural network [TreeLSTM as an example] are especially hard to batch, as each example is a different tree.

We have built a library [*TorchFold*](https://github.com/nearai/pytorch-tools/blob/master/pytorch_tools/torchfold.py) to make it simple to batch anything, however complicated and dynamic architecture you may have.

<!--more-->

The naive implementation of an Recursive Neural Network model would look like this:

```python
class TreeLSTM(nn.Module):
    def __init__(self, num_units):
        super(TreeLSTM, self).__init__()
        self.num_units = num_units
        self.left = nn.Linear(num_units, 5 * num_units)
        self.right = nn.Linear(num_units, 5 * num_units)

    def forward(self, left_in, right_in):
        lstm_in = self.left(left_in[0])
        lstm_in += self.right(right_in[0])
        a, i, f1, f2, o = lstm_in.chunk(5, 1)
        c = (a.tanh() * i.sigmoid() + f1.sigmoid() * left_in[1] +
             f2.sigmoid() * right_in[1])
        h = o.sigmoid() * c.tanh()
        return h, c


class SPINN(nn.Module):

    def __init__(self, n_classes, size, n_words):
        super(SPINN, self).__init__()
        self.size = size
        self.tree_lstm = TreeLSTM(size)
        self.embeddings = nn.Embedding(n_words, size)
        self.out = nn.Linear(size, n_classes)

    def leaf(self, word_id):
        return self.embeddings(word_id), Variable(torch.FloatTensor(word_id.size()[0], self.size))

    def children(self, left_h, left_c, right_h, right_c):
        return self.tree_lstm((left_h, left_c), (right_h, right_c))

    def logits(self, encoding):
        return self.out(encoding)


def encode_tree_regular(model, tree):
    def encode_node(node):
        if node.is_leaf():
            return model.leaf(Variable(torch.LongTensor([node.id])))
        else:
            left_h, left_c = encode_node(node.left)
            right_h, right_c = encode_node(node.right)
            return model.children(left_h, left_c, right_h, right_c)
    encoding, _ = encode_node(tree.root)
    return model.logits(encoding)


...

all_logits, all_labels = [], []
for tree in batch:
    all_logits.append(encode_tree_regular(model, tree))
    all_labels.append(tree.label)

loss = criterion(torch.cat(all_logits, 0), Variable(torch.LongTensor(all_labels)))
```

There is a way to batch this manually: going after each operation that processes inputs differently, figuring out how to batch inputs and then unbatch outputs. Here is an example of this in great [article by James Bradbury](https://devblogs.nvidia.com/parallelforall/recursive-neural-networks-pytorch/).

Alternative, is to have a system that would decide to batch things for us depending on exact inputs / outputs we want to compute. Inspired by method described in [paper](https://arxiv.org/abs/1702.02181) by Moshe et al. 
“Deep Learning with Dynamic Computation Graphs” [implemented in [TensorFlow Fold](http://github.com/tensorflow/fold) but seems to be not maintained], very well depicted in this animation:

![Dynamic Batching](https://cdn-images-1.medium.com/max/800/1*DBx-ALOG4gSUb9dYNUhGRA.gif)

I have implemented this principles in a simple TorchFold class, with next interface:

```python
class TorchFold(object):
  
  def __init__(self, versatible=False, cuda=False):
    ...
    
  def add(self, op, *args):
    ...
    
  def apply(self, nn, return_values):
    ...
```

See full implementation https://github.com/nearai/pytorch-tools/blob/master/pytorch_tools/torchfold.py

Now, if we want to encode tree with a TreeLSTM / SPINN from previous code block, here’s how we will need to change the code:

```python
from pytorch_tools import torchfold

def encode_tree_fold(fold, tree):
    def encode_node(node):
        if node.is_leaf():
            return fold.add('leaf', node.id).split(2)
        else:
            left_h, left_c = encode_node(node.left)
            right_h, right_c = encode_node(node.right)
            return fold.add('children', left_h, left_c, right_h, right_c).split(2)
    encoding, _ = encode_node(tree.root)
    return fold.add('logits', encoding)

...

fold = torchfold.Fold(cuda=args.cuda)

all_logits, all_labels = [], []
for tree in batch:
    all_logits.append(encode_tree_folded(fold, tree))
    all_labels.append(tree.label)

res = fold.apply(model, [all_logits, all_labels])
loss = criterion(res[0], res[1])
```

Here, at every invocation of *encode_tree_folded*, the Fold graph is dynamically constructed by adding nodes via *fold.add*, 
where op is the name of the function in model to be called. It automatically figures which ops can be groups together and which should follow.

Then at *fold.apply* time, the operations from passed model are called, passing them batched input tensors [possibly with different batch sizes at different steps] and routing outputs automatically to next steps.

Comparing speed between regular implementation and folded versions (on a [simple model here](https://github.com/nearai/pytorch-tools/blob/master/examples/snli/spinn-example.py)) with 128 batch size:

<table class="table">
<thead><tr><td>Method</td><td>100 dim</td><td>500 dim</td></tr></thead>
<tbody>
  <tr><td>Regular</td><td>0.18 sec/step</td><td>2.19 sec/step</td></tr>
  <tr><td>Fold</td><td>0.05 sec/step</td><td>0.22 sec/step</td></tr>
</tbody>
</table>

Getting 3–10x speed up, due to reducing inefficiency in computations.

This tool is generally useful for any complex architecture [including RNN] as it removes need to think about batching at least for first experiments.

**You can find implementation and examples here: https://github.com/nearai/pytorch-tools**

PS. While writing this article, I have found a recent article on this topic — https://arxiv.org/pdf/1705.07860.pdf with implementation for DyNet.

PSS. Since upgrading to PyTorch 0.2.0 I saw a slight degradation in performance of TorchFold, so for best speed try running with 0.1.12 until it’s fixed.

