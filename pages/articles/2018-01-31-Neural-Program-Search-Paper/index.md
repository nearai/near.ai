---
layout: post
title: Neural Program Search Paper
date: "2018-01-31T11:51:03.284Z"
---

We are excited to introduce our paper "Neural Program Search - Solving Programming Tasks From Description and Examples".

There are two main approaches currently to program synthesis: from some form of specification and from examples of Inputs / Outputs.
First type, can vary from natural language descrition of the problem, to formal First-Order Logic expression that describes what program must achieve.
First-order logic (or it's forms in Prolog) require quiet a different way of thinking to describe a problem at hand, and thus are not very practical.
Natural language on the other hand can be quiet unclear or ambiguous about some details of calcualtion.

Second type - from IO examples, has received more success in practice (in works such as FlashFill), for some of the domains 
of programming (specifically string manipulation) provides a very clear way of specifying what program must do.
But either requires a large number of examples or very restricted program space to make it work.

On the other hand, there are two methods of addressing program synthesis, 
 * Classic method via searching programs using heuristics in exhausive search algorithm
 * More recent methods of applying deep learning to producing programs via sequence or similar decoding

In this work, we are introducing a method that combines both ways of specifying problems as well as combination of methods to solve them.

<!--more-->
Deep Learning has made progress at natural language understanding with recent improvements in semantic parsing, machine translation and etc.
But it's still problematic to produce specific structure, as neural networks just find correlations between inputs. (??????)

Search techniques on the other hand always required a lot of manual labor to figure out and hard code heuristics that make the process tractable.

There has been work on combining deep learning and search tehniques before, starting with beam search [?], as well as applying to program synthesis [?], [?].

Working from this method, we combine encoder-decoder architecture with search technique. Where the structure we are trying to decode is AST tree of the program,
and search is efficiently implemented search in tree space of programs.

For evaluating this method, we have created an artificial set of problems, using next method:
 - We took set of ~40 real programming problems with text of the problem and solution in Lisp-like language
 - Transformed each description and solution into a template
 - Randomly combined these templates to produce ~100k problem/solution pairs.
 - For each pair generate random input and run it to receive 10 input/output pairs.

At training and inference, model can use first 3 input/output pairs, the rest 7 can be used as holdout set to evaluate that correct program was generated.

RESULTS

CHARTS


