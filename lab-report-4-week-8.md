# Lab Report 4: Week 8

## Debugging

[My implementation](https://github.com/BenX-64/markdown-parse)
<br>
[Reviewed implementation](https://github.com/5ean-github/markdown-parse)
<br>
All expected values were taken from VSCode preview.
### Snippet 1
Test: <br>
![image](./assets/report-4/snip1-test.png)
Expected: `['google.com, google.com, ucsd.edu]` <br>
My implementation: <br>
![image](./assets/report-4/snip1-p.png)
I do not think there is a small code change that could fix this program. I would need to make
MarkdownParse be able to recognize code blocks, which would be about as complicated as finding opening and
closing brackets, which each take a lot of lines to implement.

Reviewed implementation: <br>
![image](./assets/report-4/snip1-r.png)
### Snippet 2
Test: <br>
![image](./assets/report-4/snip2-test.png)
Expected: `[a.com, a.com(()), example.com]` <br>
My implementation: <br>
![image](./assets/report-4/snip2-p.png)
I do think there is a small code change that could fix this program. Rather than having the program search
directly for the next closing parentheses, I can instead add a method similar to the one in Lab 8 that searches for
the last parentheses (and that method was relatively short if I recall correctly).

Reviewed implementation: <br>
![image](./assets/report-4/snip2-r.png)
### Snippet 3
Test: <br>
![image](./assets/report-4/snip3-test.png)
Expected: `[https://ucsd-cse15l-w22.github.io/]` <br>
My Implementation: <br>
![image](./assets/report-4/snip3-p.png)
I do think there is a small code change that could fix this program. After playing around with the test file
a little, I noticed that if the program were able to filter out `\n` from the links, everything seems to work perfectly. So a simple string replace within the potentialLink variable should do the trick. 
<br>

Reviewed implementation: <br>
![image](./assets/report-4/snip3-r.png)