---
layout: post
date: '2019-02-05 15:44 +1030'
published: false
title: Opinionated App Design
---
_TL;DR Our weekly step competition app has opinions. [Get it here](https://itunes.apple.com/us/app/play-steps/id1422593756)_

We made a cool new app. Seriously, look at it, it’s so cool. 

![Steps-Header.jpg]({{site.baseurl}}/images/Steps-Header.jpg)

Steps pits you against your friends in the simplest ever weekly step count competition.

It started life as an app for us Apple Watch users in the office to tally our weekly steps and compete with those Fitbit ~jerks~ friends.

Then I wanted to learn how to put a server in the cloud. Learn how to make the steps beam up and back down onto everyone’s iPhones. I started on [glitch.com](glitch.com) and made the roughest, quickest, dirtiest bit of code I could write. And it worked! Not just technically, but we actually started using it to compete with each other. Nearly everyone got in on it.

We even wrote an Apple TV app to broadcast the live results of our game.

(Take a photo of the TV that is 5 meters away from me seriously why am i so lazy)

Josh, our designer, made a cool icon.

![Steps-Icon.png]({{site.baseurl}}/images/Steps-Icon.png)

Unsung, our iOS developer, made our [3D button code](https://github.com/enabledsolutions/PressableButton).

![PressableButton.gif]({{site.baseurl}}/images/PressableButton.gif)

## Ground Rules

I had rules about how this app had to be.

First: [No analytics](https://twitter.com/twolivesleft/status/1092616914973552640)

I was often advised by our cloud gurus to, "Use Firebase. It's so much easier than CloudKit." While that is very true (oh my god it's so true), the convenience meant handing over our users' usage data, and who knows what else, to Google. I wasn't prepared to ask our users to do that and I wasn't prepared to do it without their permission. However few of them there were going to be. 

Users had already decided whether they were opting-in to analytics when they set up their iPhones. To respect that choice there would be no tracking.

![Analytics.png]({{site.baseurl}}/images/Analytics.png)

## Bold Choices

This app had to be simple. I didn't want sign-in, but I wanted a multiplayer experience. I didn't want features, I wanted fun.

Let's take a look at the on-boarding screens in Steps. Each one clearly explains its value to you. The button to make it go away is big and bright.

![Onboarding.png]({{site.baseurl}}/images/Onboarding.png)

When we ask for your step count data we tell you exactly why we need it and what we will store. 

Turns out we can fit that into one sentence.

We don’t ask you if you want to enable notifications until you have opened the app seven times. Why? Because if we see that you keep checking the app then you might actually want notifications. I thought seven seemed like a good number of times to wait. There is no empirical data to back this up.
