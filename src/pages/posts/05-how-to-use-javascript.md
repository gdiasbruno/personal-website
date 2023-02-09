---
layout: "../../layouts/BlogPost.astro"
title: "How to use JavaScript?"
description: "“Use only the good parts” is Douglas Crockford's answer to this question. Douglas Crockford is a Javascript reference: a software architect who worked many years at Yahoo and Paypal. He wrote two books about the language: “Javascript: The good parts” and “How Javascript works”. He is most known for defining JSON data format - arguably the most popular data format on the Web. "
pubDate: "October 13, 2022"
heroImage: "/images/05-how-to-use-javascript/brick-wall.avif"
imageSource: "Photo by David Pisnoy on Unsplash"
---

<em>From Douglas Crockford to ESLint</em>

“Use only the good parts” is Douglas Crockford's answer to this question. Douglas Crockford is a Javascript reference: a software architect who worked many years at Yahoo and Paypal. He wrote two books about the language: “Javascript: The good parts” and “How Javascript works”. He is most known for defining JSON data format - arguably the most popular data format on the Web. 

In his books and talks, he defends that Javascript has bad and good parts. And if you only use the good ones you have more chances to write good programs. That simple. In this article, we will talk about what Crockford means by “bad parts” and “good parts”. And how his ideas are connected to ESLint - the most popular Javascript linter today. 

## **Crockford’s good and bad parts**
First, let’s start with what Crockford defines as “good programs”. He says “good programs” are programs that work well and are free of errors. A commonplace definition, but he puts emphasis on how good it is to keep in mind this simple goal. He also adds how well-formatted code can lead to “good programs” once it makes it easy to spot potential errors. 

He is openly arguing against the view that a good software developer has to use <strong>ALL</strong> features. Some parts are bad and should not be used. 

Crockford defines “bad parts” as any potentially dangerous feature. Examples of dangerous features are the ones that produce code difficult to read and modify; or features that put programmers on a path of writing tricky and error to prone code. He even says that some features are just “design errors”, in his own words: “Sometimes language designers make mistakes”. 

Javascript was designed and launched in a very short period: Brendan Eich, the creator, says it took days to develop the language. <a target="_blank" class="underline" href="https://web.archive.org/web/20050420081440/http://java.sun.com/features/1998/05/birthday.html">Java took years to be developed</a>, to give an example of a contemporary language. Javascript was also massively adopted in a concise period of time, becoming the “Language of the Web”. The language had virtually no time for being polished. Crockford understands that this fact is behind many of the language's bad parts. 

But “JavaScript has some extraordinarily good parts” according to Crockford. By only using the good parts, he defends that it is possible to write beautiful, expressive, and reliable code. 

Let’s touch on some examples of “bad” and “good” parts. 

## **A bad part of Javascript: Global variables**

“The worst of all of JavaScript’s bad features is its dependence on global variables.” that is Crockford's view. Global variables are variables visible in all scopes. Many other languages have them, but the big problem in Javascript is that it requires them: the language has no linker, so all compilation output goes to a global object. 

In large programs, global variables can be a common source of bugs hard to trace. Different parts of the code executing at different moments sharing global variables can easily have unexpected behaviors. Also, as they can be changed anywhere in the code, they made the program less readable. When interacting with third-party code and user input, they can become a source of security vulnerability. 

Fortunately, one of his favorite good parts can solve the weak points global variables bring. 

## **A good part of Javascript: Closures**

Crockford dedicates these words to closures: “It is the most important discovery so far in the history of programming languages”. Big words. Let’s see the definition of closure, an example, and why it can be so special. 

Let’s start with the <a target="_blank" class="underline" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures">MDN documentation</a> definition: 

“A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.” 

This can be a little dry without an example. So let ́s take a look at a closure example: 

<img width="720" src="/images/05-how-to-use-javascript/closure.png" alt="code block">
<p class="italic text-xs">Javascript closure example</p>

The function <em>“makeDisplayWordFunc”</em> defines a function and returns it. The code executes <em>“makeDisplayWordFunc”</em> and stores it in a variable called <em>“displayWhale”</em>. The variable stores the function returned. In the final line, the function returned is executed, and <em>“Word: Whale”</em> is displayed. The closure magic is that <em>“displayWhale”</em> has access to <em>“makeDisplayWordFunc”</em> argument and variable - in this case, <em>“word”</em> and <em>“message”</em> - after the <em>“makeDisplayWordFunc”</em> already finished execution (it finishes one line before). 

This is not the case for other programming languages, where the variables defined in a function will last just the duration of the function’s execution. But, in Javascript, functions form closures, in other words, they form a “combination of a function and the lexical environment within which that function was declared.” in MDN docs word. 

Going back to the MDN dry definition, a closure is a combination of a function (the <em>“displayWord”</em> in our example” and it is the lexical environment (the argument <em>“word”</em> and the variable <em>“message”</em> in our example). 

The special thing about the closure is that it allows separate scopes in a specific and reusable way. In Crockford's view, closures are “what makes JavaScript an interesting language. Without it, JavaScript would just be a steaming pile of good intentions, blunders, and classes”. 

## **How to use Javascript well in practice?**

After scrutinizing the language to find its good and bad parts, Crockford had one more challenge: how to bring this advice to the software development team's daily activities in a reliable way? Or how to help software development teams avoid writing and shipping bad 

Javascript code? There is a tool that helped programmers for decades to accomplish it: the Linter. So Douglas Crockford wrote his own linter for Javascript: <a target="_blank" class="underline" href="https://www.jslint.com/">the JSLint</a>. 

JSLint worked as all linters: it would analyze your code and flag possible problems. But the critics spotted one big problem in JSLint: it was too opinionated. In <a target="_blank" class="underline" href="https://anton.medium.com/why-i-forked-jslint-to-jshint-73a72fd3612">Anton Kovalyov's words</a> “It (JSLint) is quickly transforming from a tool that helps developers to prevent bugs to a tool that makes sure you write your code like Douglas Crockford.”. So Kovalyov forked the project to a new more flexible linter called “JSHint”. 

But “JSHint” had limitations on its own: there was no way to add custom rules and there was no plugin support. So, in June 2013, Nicholas C. Zakas announces ESLint. Since then, it has become the most popular linter in Javascript Community. Today, it is the tool that enables teams to use the good Javascript parts and leave the bad ones out. 

## **References:**

<ul class="list-disc">

<li>
<a href="https://humanwhocodes.com/blog/2013/07/16/introducing-eslint/" class="underline" target="_blank">Introducing ESLint</a>
</li>

<li>
<a href="https://eslint.org/blog/2021/11/the-inception-of-eslint/" class="underline" target="_blank">The inception of ESLint</a>
</li>

<li>
<a href="https://anton.medium.com/why-i-forked-jslint-to-jshint-73a72fd3612" class="underline" target="_blank">Why I forked JSLint to JSHint</a>
</li>

</ul>
