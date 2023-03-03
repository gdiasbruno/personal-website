---
layout: "../../layouts/BlogPost.astro"
title: "What is Atomic Design for and why does it matter?"
description: "The 2013 blog post from Brad Frost is a great introduction to Atomic Design. There he provides the raw definition: Atomic Design is a methodology to build design systems. The text misses addressing the big picture. And you may end up with more questions than answers after the reading."
pubDate: "July 8, 2022"
heroImage: "/images/02-atomic-design/atomic_resize.jpg"
imageSource: "Photo by Norbert Kowalczyk on Unsplash"
---

<a href="https://bradfrost.com/blog/post/atomic-web-design" class="underline">The 2013 blog post from Brad Frost</a> is still a great introduction to Atomic Design. There he provides the main concepts behind it and the raw definition: Atomic Design is a methodology to build design systems. Although Brad is very clear and you can feel his enthusiasm in his writing - the text misses addressing the big picture (which Brad provides amazingly well in <a href="https://atomicdesign.bradfrost.com/table-of-contents/" class="underline">his book</a>). And you may end up with more questions than answers after reading it.

Looking at the raw definition, the first question mark popping up is: if Atomic Design helps to create design systems. What are design systems? Design systems are guidelines for design decisions. And they can take multiple forms as style guides for Brand identity, Design language, Voice and tone, and many more (if you are curious you can check <a href="https://atomicdesign.bradfrost.com/chapter-1/#design-systems-save-the-day" class="underline">'Design systems save the day'</a>).

Still, I would think there is still a big question hanging above us: why does it all matter? Atomic Design and design systems are embedded in a much larger discussion about 'how to organize the cross-disciplinary field of web design & development in an efficient way'. Efficient here means to keep consistency across multiple platforms: consistent UI, consistent user experience, consistent brand identity, and maintaining all the characteristics of good software. Quite a challenging task and one that design system and Atomic Design came as a model and a tool (respectively) to address.

## **The core abstractions**

<img width="720" src="/images/02-atomic-design/atomic-core_resize.png" alt="core abstractions">
<p class="italic text-xs">Atomic design main concepts (<a href="https://bradfrost.com/blog/post/atomic-web-design/" class="underline text-xs">Source</a>)<p>

The Atomic Design provides a way to organize your UI library around five different abstractions that escalate in levels. They are (1) the atoms, (2) the molecules, (3) the organisms, (4) the templates, and (5) the pages.

Starting with the **atoms**, Brand set the **atoms** as the building blocks. Mostly that translates to the HTML tags like the periodic table shown below.

<img width="720" src="/images/02-atomic-design/atomic-table.png" alt="atomic table">
<p class="italic text-xs">The atoms in the web design & development field (<a href="https://bradfrost.com/blog/post/atomic-web-design/" class="underline text-xs">Source</a>)<p>

The **molecules** are **atoms** held together to perform one simple task. Brad defines it as **molecules** 'do one thing and do it well'. Examples would be a search field or media object containing an image and a description.

<img width="720" src="/images/02-atomic-design/atomic-molecule.png" alt="molecule">
<p class="italic text-xs">A media object: a molecule example (<a href="https://i0.wp.com/css-tricks.com/wp-content/uploads/2017/01/media-object.png?ssl=1" class="underline text-xs">Source</a>)<p>

**Organisms** are groups of **molecules** that stand alone under the same umbrella. One classic example would be an 'app bar' that contains **molecules** like a search field, a menu, and a media object with a profile picture and name - they all came together to form this reusable and portable component.

<img width="720" src="/images/02-atomic-design/atomic-organism.png" alt="core abstractions">
<p class="italic text-xs">App bar as an organism example (<a href="https://bradfrost.com/blog/post/atomic-web-design" class="underline text-xs">Source</a>)<p>

When **templates** arrive, Atomic Design scapes the field of chemistry metaphors to the more familiar names. Brad makes the argument that the closer to the final product, the close we are to people from outside development - like other departments from the company or any other stakeholders. And coming to a more common vocabulary may facilitate communication.

A **template** is a generic view of a type of **page**. And finally, the **page** is a specific instance of one **template**. The final two levels are much more familiar to web designers and developers.

Brad makes a really good point about the names and metaphors: they do not really matter, you can replace the names and metaphors for anything that makes more sense in the context you are developing. The core is the concept under these names.

## **Paradigm shift**

Beyond these five levels, Atomic Design and design systems want to make a deep shift in how web design & development is organized. The goal is to stop thinking about developing pages and start to think about developing systems. So the workflow stops being focused on ad hoc changes in the UI that are really hard to document, maintain and keep consistent; and starts to be about more elaborated changes in the system that translates ultimately into the desired changes in the UI - but now in a much more consistent fashion.

<img width="720" src="/images/02-atomic-design/atomic-paradigm.png" alt="core abstractions">
<p class="italic text-xs">The desired new paradigm (<a href="https://atomicdesign.bradfrost.com/chapter-5" class="underline text-xs">Source</a>)<p>

## **Learn more:**

<ul class="list-disc">

<li>
<a href="https://atomicdesign.bradfrost.com/table-of-contents" class="underline">Brad Frost book</a>
</li>

<li>
<a href="https://24ways.org/2012/design-systems" class="underline">Laura Kalbag on Design Systems</a>
</li>

<li>
<a href="https://www.componentdriven.org" class="underline">Component Driven Development</a>
</li>

</ul>
