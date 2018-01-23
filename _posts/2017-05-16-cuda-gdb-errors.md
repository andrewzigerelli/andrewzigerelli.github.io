---
layout: post
title: Cuda-gdb errors.
tags: [cuda, error, headaches]
---

I've been spending a lot of time modifying cuda applications to run in a GPU Simulator,
[GPGPU-Sim](http://www.gpgpu-sim.org/). Sometimes this can lead to errors that
don't make sense, especially if you're not careful when using cuda-gdb.

Example: cudaMalloc was returning 0x9c inside cuda-gdb. For some reason, the [recommended api
error checking
method](http://stackoverflow.com/questions/14038589/what-is-the-canonical-way-to-check-for-errors-using-the-cuda-runtime-api)
wasn't working, and weirdly, it didn't trigger outside of cuda-gdb. Also, what the heck is 0x9c? To find out, grep through the
cuda/include folder for the value. Make sure to add a comma after the value so
you narrow the results.
For my case, `grep '201,'` yields `cuda.h:    CUDA_ERROR_INVALID_CONTEXT = 201,` 

cudaMalloc doesn't return this code, so something is happening at the driver
level. Anyway, I found the error code information [here](https://www.cs.cmu.edu/afs/cs/academic/class/15668-s11/www/cuda-doc/html/group__CUDA__TYPES_g0cdead942fd5028d157641eef6bdeeaa.html#gg0cdead942fd5028d157641eef6bdeeaaa484e9af32c1e9893ff21f0e0191a12d)

The relevant information is this: 
`..This can also be returned if a user mixes different API versions (i.e. 3010
context with 3020 API calls..`

For my case, I was using the latest cuda-gdb, version 8.0. GPGPU-Sim (the
non-devel version) requires a much older version of cuda. My application that I
was debugging was compiled with cuda 3.1. For some reason, cuda-gdb 3.1 doesn't
run on my workstation, so I was using cuda-gdb 8. 

Morale of the story: Make sure your cuda-gdb version matches the linked cuda
libraries!

After I recompiled the application with cuda 8, the error went away, and I could
happily try to find other errors.
