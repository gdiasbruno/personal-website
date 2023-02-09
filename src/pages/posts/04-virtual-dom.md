---
layout: "../../layouts/BlogPost.astro"
title: "Virtual DOM: The React way"
description: "React is one of the most popular frameworks to build UI interfaces. One of the core concepts of React is Virtual DOM (VDOM). The VDOM is the gatekeeper between your React code and the UI rendered by the browser."
pubDate: "August 18, 2022"
heroImage: "/images/04-virtual-dom/react-icon.png"
imageSource: "Photo by David Pisnoy on Unsplash"
---

React is one of the most popular frameworks to build UI interfaces. One of the core concepts of React is Virtual DOM (VDOM). The VDOM is the gatekeeper between your React code and the UI rendered by the browser. This article aims to explain what problem it solves and how it works.

## **What problem does it solve?**
The problem VDOM is trying to solve is DOM manipulation. To be more specific: how to make DOM manipulation in an efficient and reliable way. Efficient means diminishing the cost of DOM manipulation to a minimum. Reliable means performing the DOM manipulations in a way that avoids bugs. And when a bug happens, allow a good debugging experience. Let’s go deep into these two aspects.

DOM manipulation is computationally expensive. We can grasp this by taking a look at this example in the <a target="_blank" href="https://www.geeksforgeeks.org/reactjs-virtual-dom" class="underline">GeeksForGeeks article</a>.

The article proposes taking a step-by-step look at how this Javascript code ends up being rendered by the browser. The code:


<img width="720" src="/images/04-virtual-dom/update-element.png" alt="code block">
<p class="italic text-xs">Javascript code to update inner value in an element<p>

The step-by-step process:
<ol  class="list-decimal">  
<li>The browser parses the HTML to find the node with this id.</li>

<li>It removes the child element of this specific element.</li>

<li>Updates the element(DOM) with the ‘updated value’.</li>

<li>Recalculates the CSS for the parent and child nodes.</li>

<li>Update the layout.

<li>Finally, traverse the tree and paint it on the screen(browser) display.</li>
</ol>
It is possible to visualize that a simple update in the DOM involves more than just changing the content. Because of that, React tries to keep the DOM manipulation as efficient as possible. The way they do that involves using the VDOM. The VDOM is a copy of the real DOM. The real DOM is represented by a tree structure - the VDOM is another three represented using a Javascript object.

The advantage of having a copy of the DOM as a Javascript object is that the manipulation is computationally cheaper than the manipulation of the real DOM. In this way, React can perform all sorts of operations in the VDOM. And when VDOM is exactly how React wants it to be, he calculates the most efficient way to translate all the changes to the real DOM. We will dive more into that later in the article.

Beyond performance, React also wants to provide reliability. This process of creating the VDOM and then translating the changes to the real DOM aims to avoid direct DOM manipulation. Direct DOM manipulation in a complex application involving asynchronous operations can get very tricky and very prone to errors. React aims to provide a state-driven flow: that meaning, every state of the application has it is own UI representation. React aims to behave just like a pure function: for every state input, a UI output.

The idea is that this simple flow can be easily debugged using, for example, React Developer Tools - maintained by Meta itself.

## **How the VDOM works?**

The VDOM is a small part of a bigger process called Reconciliation. Reconciliation is the process to calculate the difference between an old UI and a new UI - this new UI comes as a result of a change of state for example. Let´s go step-by-step in this process.

React always hold a copy of the current real DOM in memory as a Javascript object - this is what we call VDOM. When an update is triggered in React - for example, setting a change to a particular part of the state - the Reconciliation starts.

The first thing is to calculate a new VDOM based on this new state. This passes by resolving <a class="underline" href="https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html" target="_blank">React Components into React Elements</a>. Once a new VDOM tree is done, React will compare the old VDOM tree with the new one. By the difference between the two, React will calculate what operations take to bring the old VDOM to look like the new one. Then it will send it to the render process. And the render process takes care of bringing this new VDOM to the real DOM.

One interesting side effect of React separating the Reconciliation process and the render process itself is that React can not only render in the browser - it can virtually render anywhere. And that is how React Native project is powered - rendering the VDOM (which is not the best name in this context) in the mobile environments

Of the four most popular Javascript frameworks, React and Vue.js uses a VDOM. While Angular and Svelte, do not. Being the Svelte’s creator, Rich Harris, a critical voice of the VDOM.

## **Critics of VDOM and other paths**

In the article <a href="https://svelte.dev/blog/virtual-dom-is-pure-overhead" class="underline" target="_blank">“Virtual DOM is pure overhead”</a>, Rich Harris develops his critics of VDOM. He argues that the diffing process is unnecessary - the comparison between the old and new VDOM trees - to achieve an efficient and reliable way to build UIs. He also says that React compromises for a lot of re-work in order to maintain predictability. His critique is relevant because he proposes a whole new framework that aims to overcome these problems and claims to deliver the same efficiency and reliability that React offers.

Also Angular has the concept of “Incremental DOM” that approaches DOM manipulation in a whole other way. 

So, The VDOM is a popular approach to DOM manipulation problems, but it is not unanimity and share spaces with other solutions as well.

## **References:**

<ul class="list-disc">

<li>
<a href="https://podcasts.apple.com/uy/podcast/virtual-dom-and-the-react-way-part-1-jsj-512/id496893300?i=1000544438065" class="underline" target="_blank">Virtual DOM and the React Way, Part 1 - JSJ 512
</a>
</li>

<li>
<a href="https://www.codecademy.com/article/react-virtual-dom" class="underline" target="_blank">React: The Virtual DOM</a>
</li>

<li>
<a href="https://reactkungfu.com/2015/10/the-difference-between-virtual-dom-and-dom/" class="underline" target="_blank">The difference between Virtual DOM and DOM</a>
</li>

<li>
<a href="https://indepth.dev/posts/1501/exploring-how-virtual-dom-is-implemented-in-react" class="underline" target="_blank">Exploring how virtual DOM is implemented in React</a>
</li>

<li>
<a href="https://github.com/acdlite/react-fiber-architecture" class="underline" target="_blank">React Fiber Architecture</a>
</li>

</ul>
