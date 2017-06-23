---
layout: post
title: Code Search
excerpt_separator: <!--more-->
---

Recently we have been exploring applications of code understanding technology we been building. One option that comes naturally in mind is code search.

Been developers ourselves, we use code search everyday for various types of questions. The span of questions ranges from asking for definition of specific function or API, looking up implementation of some functionality to a description of what we want to do.
Currently one would use Google, StackOverflow and Github for all of these. Going from one website to another,
using Github search for in-repo search.

As an alternative, we can index all the functions, classes and APIs in a single search index. 
We can embed the implementations of functions using neural network pre-trained on aligning of the text and code [from our generator network].
Then at retrieval time we are going to lookup tokens in regular index and encode text using the other part of neural network.
Finding nearest neighbors in the encoded code space, can augment regular search techniques with additional "semantic" meaning.

We have a quick demo of such functionality available here:

[![Code Search Demo](https://img.youtube.com/vi/8XSf6XfYl64/0.jpg)](https://www.youtube.com/watch?v=8XSf6XfYl64)

Let us know if you have any comments at `contact@near.ai`.

<!--more-->

