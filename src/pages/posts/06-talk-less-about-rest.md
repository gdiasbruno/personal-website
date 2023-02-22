---
layout: "../../layouts/BlogPost.astro"
title: "Should we talk less about REST & RESTful APIs?"
description: "“In the book “Release It!”, Michael T. Nygard says “REST with JSON over HTTP is the lingua franca for services today”. HTTP and JSON are very popular indeed. But is REST that popular? For sure, REST & RESTful APIs are widely mentioned concepts. Big players have this concept on their product docs somewhere,1 and the most used programming languages have plenty of tutorials teaching about RESTful APIs. "
pubDate: "December 14, 2022"
heroImage: "/images/06-talk-less-about-rest/phone_resize.jpg"
imageSource: "Photo by Quino Al on Unsplash"
---

In the book “Release It!”, Michael T. Nygard says “REST with JSON over HTTP is the lingua franca for services today”. HTTP and JSON are very popular indeed. But is REST that popular?  

For sure, REST & RESTful APIs are widely mentioned concepts. Big players have this concept on their product docs somewhere,1 and the most used programming languages have plenty of tutorials teaching about RESTful APIs. 

But when it comes down to implementation and problem-solving, REST has a more restricted use than the popularity of the term would make us believe. And it is arguable that most of the so-called RESTful APIs are actually something else. In this article, we will discuss REST architecture and why we should talk less about it. 

## **REST architecture style** 

REST was defined in Roy T. Fielding's Ph.D. thesis <a target="_blank" class="underline" href="https://roy.gbiv.com/pubs/dissertation/top.htm">“Architectural Styles and the Design of Network-based Software Architectures”</a> written in 2000. Fielding was worried about the scalability of the Web: the Web went popular quickly, and a collapse was possible if the applications forming the Web in the 2000s did not have the properties necessary to scale sustainably. One of the main concerns is what he calls “Extensibility”: the capability of software to change and be extended. This was important because the web was not only growing, but also changing quickly. 

 

<a target="_blank" class="underline" href="https://www.redhat.com/en/topics/api/what-is-a-rest-api">REST is a set of constraints</a> that aims to provide the extensibility, scalability, and wrapping of legacy systems as the Web needed back in those times.  One of those constraints is famously known for the ugly acronym HATEOAS - Hypermedia as the Engine of the Application State. This constraint means the API should provide links to navigate itself. <a target="_blank" class="underline" href="https://restfulapi.net/hateoas/">Here is an example</a>. The problem Fielding aims to solve with HATEOAS restriction is decoupling server and client, so they can evolve at different paces. 

 

<a target="_blank" class="underline" href="https://apisyouwonthate.com/blog/representing-state-in-rest-and-graphql#hateoas-i-call-on-thee">HATEOAS restriction is not popular</a>: it is a restriction missing in many APIs out there called RESTful. Fielding made it explicit in his blog post <a target="_blank" class="underline" href="https://roy.gbiv.com/untangled/2008/rest-apis-must-be-hypertext-driven">“REST APIs must be hypertext-driven”</a> that APIs without HATEOAS cannot be considered RESTful. Fielding suggests calling them just RPC (Remote Call Procedure). <a target="_blank" class="underline" href="https://apisyouwonthate.com/blog/understanding-rpc-rest-and-graphql">The REST community calls them RESTish</a> - a term to put to shame APIs that do not follow REST architecture but claim to do so. 

Fielding and the REST community have a reasonable point: if an API does not follow REST constraints, it is not RESTful. But their suggestions do not help the community to communicate better. Calling API implementations that have been solving business problems for a long time a pejorative term like RESTish, does not help. Also, just calling them RPC, as Fielding suggests, is not quite accurate. 

In RPC, the main concepts are functions (or procedures) called remotely. That means you are addressing a specific function in remote service. While in these APIs, roughly called REST, the main concepts are resources or entities of the problem domain. That means you make a call with the intention to do something with a specific resource, i.e., an HTTP GET  call to retrieve a specific user (a resource). They are not RPC, and they are not REST, how can we call them? HTTP APIs, that is how Martin Nally calls them in the article <a target="_blank" class="underline" href="https://cloud.google.com/blog/products/application-development/rest-vs-rpc-what-problems-are-you-trying-to-solve-with-your-apis">“REST vs RPC”</a>. The article holds a bright approach to the theme. 

## **HTTP APIs** 

The HTTP API concept presents in a more reliable way the vast majority of the roughly called REST APIs out there than the REST concept. Nally starts describing how HTTP APIs differ from RPC ones. While in RPC API, you have to learn everything from scratch: like learning a new programming language. In HTTP API you have much less to learn because HTTP is well known i.e., how request methods (GET, POST, PUT, etc.) interact with resources identified (URI) is a well-known dynamic on the web.  

Nally describes four characteristics to define an HTTP API: 

<ol class="list-decimal">
<li>A set of fixed well knows URLs. He makes the analogy with SQL database: the URLs would be the name of the tables;</li> 

<li>The schema of each resource—the properties that compose each resource. That would be the columns of a given table;</li> 

<li>An indication of which HTTP features are supported, since implementing all features may not be useful in all cases;</li> 

<li>Nally also indicates that a definition of query syntax can be useful. He addresses it as a limitation since HTTP has no query syntax defined, so the API creators should come up with a solution;</li> 
</ol>

Using HTTP APIs means writing less documentation than RPC. You should expect a list of URLs and HTTP features supported, the schema from the resources, and a description of the query syntax used. And that matches the content of a great part of the roughly called REST API documentation used commercially. 

Nally also argues that organizing the API in terms of resources helps to decouple the client and server side if compared to RPC APIs. For example, a DELETE method on a specific user resource can be translated in an application as deleting one line from a column. Once the application gets more complex, it can mean sending a message on a queue consumed by different parts of the application. This change can be done by maintaining the same API since in both cases, it has the same semantic meaning: deleting a specific user from the application. 

In a framework like the <a target="_blank" class="underline" href="https://martinfowler.com/articles/richardsonMaturityModel.html">“Richardson Maturity Model”</a>, the HTTP APIs can be considered level 2 of maturity. It also provides a clear way of how HTTP APIs relate to REST APIs (which are level 3 maturity) and how is the path if they want to become one. 

Using HTTP API instead of REST API (except when you mean REST with ALL it is constraints) can be an improvement in communication between teams and the community overall. It sets the expectation about what constraints will be followed and what is open to discussion much better than using REST API. Talking less about REST can be beneficial.