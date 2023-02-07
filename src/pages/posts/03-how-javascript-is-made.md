---
layout: "../../layouts/BlogPost.astro"
title: "How Javascript is made?"
description: "Javascript is the language in which a great part of the web is written. But who writes Javascript itself?"
pubDate: "July 29, 2022"
heroImage: "/images/03-how-javascript-is-made/javascript-logo.png"
imageSource: "Unofficial JavaScript logo by Chris Williams."
---

Javascript is the language that powers the web together with HTML and CSS. According to <a target="_blank" href="https://survey.stackoverflow.co/2022/#technology-most-popular-technologies" class="underline">Stack Overflow Survey 2022</a>, Javascript is the most commonly used programming language. And has been like that for ten years in a row. It is a solid reign. Who decides and writes the future of the most commonly used programming language? To understand that, we will deep into a brief story of Javascript.

## **The Origins of JavaScript**
<a target="_blank" href="https://www.youtube.com/watch?v=qKJP93dWn40" class="underline">“Ten days of hard work and poor sleep” is how Brendan Eich defines the days he worked to create Mocha</a>. That was the first name of the project, then it was renamed “Livescript”. And finally, at the end of 1995, the language was renamed “Javascript”. The name would cause confusion between Javascript and a trendy language by the time: Java. A confusion that remains to these days.

Javascript was created in the demand to make the browser more dynamic. In Brendan Eich owns words:

<a target="_blank" href="https://www.infoworld.com/article/2653798/javascript-creator-ponders-past--future.html" class="underline">“The idea was to make something that Web designers, people who may or may not have much programming training, could use to add a little bit of animation or a little bit of smarts to their Web forms and their Web pages.”</a>

Other alternatives tried to compete with Javascrit, like Java applets. But Javascript was the clear winner by its simplicity.

It was so successful that Microsoft copied it one year after in the JScript project. That move showed that if the web wanted to continue to develop, Javascript would need a standardization between browsers. Otherwise, every browser would have it owns “Javacsript” and to build a website that works for all browser would be much more expensive - slowing down the growth of web, something that none of the big players wanted.

## **Standardization of JavaScript: Ecma, TC39, and ECMAScript**

So at the end of 1996, Netscape goes to Genova looking for Ecma International. Ecma International was and still is a non-profit organization for the standardization of information and communication systems. Ecma works as a neutral actor that could intermediate the big players interested in the language, like Netscape and Microsoft at the time. That is how Javascript arrived at Ecma and it remains there still today. Now let’s take a look at how things work currently.

Inside Ecma there is a Technical Committee that is responsible to write and release new versions of Javascript. The Technical Committee is called TC39 (39 has no special meaning besides being the 39 committees inside Ecma). They actually write specifications to ECMAScript (another name for Javascript) in a document called <a target="_blank" href="https://262.ecma-international.org/13.0/" class="underline">ECMA-262</a>. And it has some more attributions which you can <a target="_blank" href="https://www.freecodecamp.org/news/tc39-and-its-contributions-to-ecmascript-c178b77f32e1/" class="underline">check here</a>.

<a target="_blank" href="https://github.com/tc39/how-we-work/blob/main/management.md" class="underline">TC39 is organized in a flat way - meaning there is no hierarchy between members - and takes decisions over consensus</a>. Who organize the agenda and lead the meetings are the elected co-chairs. In July 2022, these co-chairs are from Bloomberg, Igalia, and Microsoft. We will hear more about Igalia soon.

Any company can participate in the TC39, it has only to join Ecma and pay the annual fee member which goes from 0 to 70.000 Swiss francs depending on the level of participation and the kind of company trying to join.

## **How to present a new feature to be implemented in Javascript?**

TC39 has a <a target="_blank" href="https://tc39.es/process-document/" class="underline">five-step process</a> that covers from the first proposition until inclusion in the ECMAScript standard. The five stages are:

### STAGE 0: STRAWPERSON
Any discussion, idea, or proposal that has not been submitted formally is at that stage. Only TC39 delegates or registered members at Ecma can propose one of these.

### STAGE 1: FORMAL PROPOSAL
The idea being discussed is finally formalized and enters stage 1. To be formalized it needs to have a description of the problem it is addressing and the general shape of the solution proposed. Also a high-level description of the API and the algorithms involved in the solution.

### STAGE 2: DRAFT
In this stage, is expected that the proposition have a first version on the spec version. It is allowed to have holes as TODOs and placeholders, but all major components on the specifications must be addressed.

### STAGE 3: COMPLETE
In this stage, the solution is fully described and nothing can be added anymore except for any fix that is found to be needed.

### STAGE 4: FINAL
The proposition will be included in the next Ecma standard release.

To see more details you can check the <a target="_blank" href="https://tc39.es/process-document/" class="underline">official doc</a> or this <a target="_blank" href="https://www.freecodecamp.org/news/tc39-and-its-contributions-to-ecmascript-c178b77f32e1/" class="underline">blog text</a>.

An example of a new proposition going through this process is “A Proposal For Type Syntax in JavaScript” that is currently in Stage 1 since March 2022. Maybe when you are reading this text, it is already implemented! You can check the status here. This is a proposition led by Microsoft engineers and derives from Typescript experience developed by them.

## **But who writes Javascript?**

<img width="720" src="/images/03-how-javascript-is-made/igalia.png" alt="igalia logo">
<p class="italic text-xs">Igalia Logo (<a href="https://www.vectorlogo.zone/logos/igalia/index.html" class="underline text-xs">Source</a>)<p>

So now we know how Javascript was created, why is it in the browser, and how it got into Ecma. We also know how Ecma defines new features to Javascript (or ECMAScript if you rather). But who writes these new features, and who makes the implementation so that works in the browsers? Or in the Node.js runtime? There are many companies responsible for that depending on the browser, but there is one company responsible for many implementations in the most used browser (Chrome, Firefox, and Safari) and the Node project: it is the open source consultancy, Igalia. 

Igalia probably does not have the spotlight that Mozilla, Google, or Apple has, but if your website is running an edge Javascript feature - it is probably using an implementation done by Igalia. Igalia is a “free software consultancy” in their own words. They are involved in big open source projects like Chromium (created by Google), Webkit (created by Apple), Mozilla’s Servo, and V8 (Javascript engine used by Node and Google Chrome) naming a few.

You can check more on their <a target="_blank" href="https://www.igalia.com/technology/compilers" class="underline">website</a>.

## **Back to our initial question: How Javascript is made?**

As expected, the process of making the most commonly used programming language in the world is complex and involves many players. From the stage, 0 proposals to your favorite Javascript runtime is a long walk. But if we are looking for a company doing a great part of the dirty implementation job today, Igalia is definite a name to keep.


<a target="_blank" href="https://www.youtube.com/watch?v=SUl36febsZg" class="underline italic">This text was highly inspired by Tejas Kumar's video</a>

## **References:**

<ul class="list-disc">

<li>
<a href="https://www.freecodecamp.org/news/tc39-and-its-contributions-to-ecmascript-c178b77f32e1/" class="underline">TC39 and its contributions to ECMAScript</a>
</li>

<li>
<a href="https://survey.stackoverflow.co/2022/#technology-most-popular-technologies" class="underline">2022 Developer Survey - Stackoverflow</a>
</li>

<li>
<a href="https://www.youtube.com/watch?v=SUl36febsZg" class="underline">How JavaScript is made, and why JavaScript is the way it is today: Let's talk ECMA, TC39, and Igalia</a>
</li>

<li>
<a href="https://www.youtube.com/watch?v=qKJP93dWn40" class="underline">A Brief History of JavaScript, talk by Brendan Eich (creator of JavaScript)</a>
</li>

<li>
<a href="https://knoji.com/article/mocha-livescript-javascript-2/" class="underline">Mocha -> LiveScript -> JavaScript</a>
</li>

<li>
<a href="https://www.ecma-international.org/technical-committees/tc39/" class="underline">TC39</a>
</li>

<li>
<a href="https://mail.mozilla.org/pipermail/es-discuss/2006-October/000133.html" class="underline">Will there be a suggested file suffix for es4?</a>
</li>

<li>
<a href="https://github.com/tc39/how-we-work/blob/main/management.md" class="underline">TC39 management</a>
</li>

</ul>
