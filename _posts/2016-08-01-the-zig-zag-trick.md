---
layout: post
title: The zig-zag trick.
tags: [math, algebra] 
---

This is the zig-zag trick. The inspiration is a [post](https://counterexamplesinalgebra.wordpress.com/2016/07/22/a-ring-epimorphism-that-is-not-a-surjection/) from a friend's blog.
The "trick" is just the proof of the statement in the post: "ring homomorphisms
out of the rationals that agree on the integers must agree everywhere."

Let $$f,g: \mathbb Q \to R$$ be two ring homomorphisms such that
$$f|_ \mathbb Z = g|_ \mathbb Z$$ Now, let $$x \in \mathbb Q$$ be arbitrary.
Thus, $$\exists y,z \in \mathbb Z$$ such that $$x = \frac{z}{y}$$. Then, using
the properties of rings and ring homomorphisms, we have:

$$ 
    f(x) = f(\tfrac{z}{y}) = f(\tfrac{zy}{y^2}) = f(zy)f(\tfrac{1}{y^2}) =
    g(zy)f(\tfrac{1}{y^2}) = g(\tfrac{zy^2}{y})f(\tfrac{1}{y^2}) = 
    g(\tfrac{z}{y})g(y^2)f(\tfrac{1}{y^2}) = \\ g(\tfrac{z}{y})
    f(y^2)f(\tfrac{1}{y^2}) = g(\tfrac{z}{y}) f(\tfrac{y^2}{y^2}) =  
    g(\tfrac{z}{y})f(1) = g(\tfrac{z}{y})g(1) = g(\tfrac{z*1}{y}) = 
    g(\tfrac{z}{y}) = g(x)
$$

But, since $$x$$ was arbitrarily chosen, we must have $$f = g$$.
