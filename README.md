# Benchmark object-hash and crypto sha

## Problem

A lot of users access our mobile app at the same time (especially when we push notification to all users).
It causes high cpu on our servers (2 AWS EC2 instances).
I need to figure out which line of code causing this.
After taking profiling Node.js application, I found out that object-hash takes more 65% cpu.

## Result

Macbook Pro Mid-2015 2,2 GHz Quad-Core Intel Core i7, 16 GB 1600 MHz DDR3

![Profiling](https://i.imgur.com/yFyWE5j.png "Profiling Summary")

![Profiling](https://i.imgur.com/Y9x0eTL.png "Profiling object-hash")

![Imgur](https://i.imgur.com/YxRjoZc.png "Benchmark")
