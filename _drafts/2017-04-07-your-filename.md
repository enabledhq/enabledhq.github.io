---
layout: post
date: '2017-04-07 15:41 +0930'
published: false
title: ''
---
## The state of Conversational UI and Chatbot Apis


### not exactly sure what this post will end up being about, but I've found some iteresting readings on the topics of:
	- conversationalUI
    - ChatBots & ChatBot Api's
    - The state of "AI" in these platforms
    
    

Conversational UI is seen as the next big thing in UI and UX design. Along with this shift, more and more commercial tools are becoming available to help implement conversational UI (by way of chatbots) into our current tools and services. I will endeavour to answer the following questions:

- What are Conversational User Interfaces? And why are they "the next big thing"?
- What is the current state of chatbot apis? (although there are many other posts about this, so we mightn't go into too much detail, other than to conver the field)
- Is this AI? How is is related to AI?


### Conversational User Interfaces
- inspired by the WeChats and KaKao's of the world, Silicon Valley is looking to chat style interfaces
	- messaging apps are the top of app stores
    - yet still poorly integrated, 
    - are chatbots really the future? Some people disagree. Or perhaps the current direction touted by Facebook and Google is simply wrong
    	- Hybrids of the command line of old and the GUI of today
        - typing sucks on phones still!!! Why is nobody talking about that?
        - Also, who would ever want to book flights over text?
        - Facebook, with 1 billion monthly active users (Jan 2017) of facebook messenger, and 1.2 billion monthly active users (Jun 2016) is poised to make a big impact in this space

- but is it just hype?
	- often in the tech world, it is hard to separate hype from 
    - I remember listening to Stanford Entrupership lectures about how Podcasting will be something you broadcast out to your personal network of friends with messages like: "I'll be home late for dinner tonight". While not 100% accuracte, there is a vein of truth; only people just take pictures of their faces and add some text and shitty emoji.



###What is the current state of chatbot apis? 
- Google, Facebook, Amazon, Microsoft, IBM are all players in this space
- There are also a number of pre-trained packages and frameworks that can be downloaded and run independently
- We don't need to go much far into the details, but essentially these services are:
	1. cheap or even free
    2. Integrated with existing tools (Especially amazon Lex)
    3. Built for the cloud (I don't know what this means, but it sounds good)
        


What is the state of AI in these platforms?
	- It isn't taking over the world, therefore it isn't really AI
    - introduce concepts: intent, parameters, sessions, context
    - But seriously, these platforms mostly used pre-trained Natural Language Processing (or Understanding) models, which you can then augment with your own training data (at least for Wit, Luis...)
    - NLP seems pretty powerful, but most of these platforms are limited in their "AI-ness" here.
    	- Sessions or Stories are still dominated by fancy if/then statements
        	- Why? Mostly because there is simply not enough data. It is possible to pre-train NLP tools, but when you create a "story" it is unique to your problem domain. YOU define the input parameters (this intent triggers this action), and YOU handle it yourself.
            - So as a developer, you are still handling users flowing through your system, much like a sign up form, although much more complicated, as instead of buttons, you are handling text or speech
           	- mention hybrid interfaces here again? 
            

(sidebar: Wit.ai claims that it does a bit of both, as you develop your stories, and people use them, it can then train the story using bot engine or something)
    
    
    
    
    
    
    
