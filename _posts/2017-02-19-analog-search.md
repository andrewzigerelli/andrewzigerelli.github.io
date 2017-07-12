---
layout: post
title: Analog Searching of Memory.
tags: [DRAM, analog] 
---

When I took Fourier Analysis as a undergraduate mathematics student, I remember
naively thinking that this could enable "continuous processing". I thought
that physically manipulating signals corresponded exactly (or at least pretty
close) to some operators in analysis.

Of course, what I was missing was that signals (at least in computers) aren't
usually used for analog. They are used digitally.

I then "believed" that all computer processing was digital.

Enter this paper: Energy Efficient Data Encoding in DRAM channels exploiting Data Value Similarity.

The basic idea of this paper is to minimize the energy of data transfers by transfering bitwise differences of
similar words. The "Data Value similarity" refers to [Hamming
distance](https://en.wikipedia.org/wiki/Hamming_distance). 
Small consistent caches are kept on both sides of the data bus for the translation purposes. The novel idea (at
least to me) is how the hardware that the authors propose adding to DRAM
searches for a similar value.
