---
layout: post
title: Code Search
---

We have explored applications of code understanding. One option that comes naturally is search.

Been developers ourselves, we use code search everyday for various questions. The span of questions ranges from asking for definition of specific function or API, looking up implementation
of some functionality to a description of what we want to do.
Currently one would use Google, StackOverflow and Github for all of these. Going from one website to another,
using Github search for in-repo search.

As alternative, we can index all the functions, classes and APIs in single search index. 
We can embed the implementations of functions using neural network pre-trained on aligning of the text and code [our generator networks].
Then at retrieval time we going to lookup tokens in regular index and encode text using the other part of neural network.
Finding nearest neighbors in the encoded code space, can augment regular search techniques with additional "semantic" meaning.

We have a [quick demo of such functionality available here](https://www.youtube.com/watch?v=8XSf6XfYl64)

Let us know if you have any comments at `contact@near.ai`.

