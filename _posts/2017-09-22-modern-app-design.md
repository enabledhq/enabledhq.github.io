---
layout: post
date: '2017-09-22 17:09 +0930'
author:
  - simeon
main-category: ux
published: true
title: 10 Plus 1 Commandments for the Modern Mobile App Designer
categories:
  - technology
  - ux
hero-banner: /images/Blog_Header_appdesign.png
image: /images/img_appdesign_thumb.png
meta-keywords: >-
  mobile app, mobile app design, mobile user experience, mobile user interface,
  mobile UX, mobile UI, mobile app UI design, modern mobile app, modern mobile
  app design, app design and development, mobile app UX, app UI design
excerpt: >-
  It’s easy to forget who you’re designing the app for. Here’re some simple &
  actionable tips for the modern app designer to improve mobile app UX and UI.
meta-description: >-
  It’s easy to forget who you’re designing the app for. Here’re some simple &
  actionable tips for the modern app designer to improve mobile app UX and UI.
description: >-
  It’s easy to forget who you’re designing the app for. Here’re some simple &
  actionable tips for the modern app designer to improve mobile app UX and UI.
---
_M y love is alive_

_Way down in my code_

_Although we are miles apart_

_If users ever need a helping hand_

_I'll be there on the double tap_

_Just as fast as I can_

_Don't you know that_

_There ain't no resolution high enough_

_Ain't no bandwidth low enough_

_Ain't no screen size wide enough_

_To keep me from getting to your app._

Shout out to [Medium]({{site.baseurl}}/images/img_appdesign_medium.jpg)’s recent release notes for the inspiration behind the prose above. App makers and designers can and should show their human side and be more user-focused. But more on that later in the article. 

So here are some simple, yet informative rules for the modern mobile app designer.

# Don’t hide features behind gestures
 
In a multi-touch user interface (UI), many apps choose to hide features behind gestures, such as a long-press or two-finger-tap. It’s fine to use gestures like this to trigger features, but always make sure those features are also accessible with a visible control.

Your UI is the only way for you to inform your users about features. If you don’t have a visible control for your feature then it might as well not exist.

The exception to this is when a particular gesture is used in a consistent manner across the entire operating system and your app uses standard operating system controls. In this case users can expect the same gestures to work if they are used to them elsewhere (See [Build to the platform](#platform)). 

Hiding features behind gestures also makes it more difficult to support accessibility features in your app, which the operating system might otherwise give you “for free.”

For example, in the stock Mail app on iOS, the “delete message” feature is hidden behind a long press of the “archive message” icon (circled in the image below). 

![iOS mail app design]({{site.baseurl}}/images/img_appdesign_mail.png)

# Get rid of features 

If you have trouble finding a place to put features then it could mean it’s time to start dropping features and try to streamline your application. 

Think about [Google Maps](https://www.pcmag.com/feature/328592/26-google-maps-tricks-you-need-to-try) and how many hidden features there are. The app is a combination of location info and history, directions, local listings, as well as things like social sharing.

![google maps app design]({{site.baseurl}}/images/img_appdesign_maps.png)
*Some core features of Google Maps.*

So unless you’re Google and have the manpower to merge different platforms into a single app, resist putting that extra feature in altogether. Many of the best applications have a singular focus and limited feature set.

Culling features doesn’t make your app worse. It makes it better by giving your core features the attention they deserve and making your app easier for your users to use.

# Don’t use hamburger menus

If your app has a lot of  features, it’s tempting to use hamburger menus. [Data](https://techcrunch.com/2014/05/24/before-the-hamburger-button-kills-you/) has shown [hamburgers](https://lmjabreu.com/post/why-and-how-to-avoid-hamburger-menus/) are less efficient, have low discoverability and may clash with the platform navigation patterns. 

It’s okay to use them if “the menu items you’re going to hide behind the [hamburger icon](https://uxplanet.org/when-to-use-a-hamburger-menu-199d62f764aa) fall below the 80% of regular usage.”

In other words, if the user can accomplish the main task from the main screen, then the secondary items like settings could go behind the hamburger menu. The taxi booking app [GoCatch](http://www.gocatch.com/) is a good example for this.

![gocatch mobile app design]({{site.baseurl}}/images/img_appdesign_gocatch.gif)
*What happens when you tap on the hamburger icon*

If your app is really complex and culling features isn’t feasible, use hamburger alternatives such as: tab menu, tab menu with “More” (e.g. Facebook app), horizontal scroll menu, drop down menu etc. 

# Support accessibility

Humans are not all the same and out of the box, they come configured with different abilities. So make sure your application takes this into account.

Some simple things you can do include increasing colour contrast for better readability of text, or accounting for people with colorblindness.

Don’t rely just on colours to communicate different states: use extra cues such as icons or text to signal different states (as shown below).

![mobile app design accessibility ]({{site.baseurl}}/images/img_appdesign_accessibilty.jpg)
*Source: [Smashing Magazine](https://www.smashingmagazine.com/2016/06/improving-color-accessibility-for-color-blind-users/)*

For users with special needs, try to leverage what is given to you by the platform. iOS, for example, will be able to read most of the screen for users with low vision — if you use the [standard controls](https://developer.apple.com/accessibility/ios/). You can also annotate UI controls with labels for screen readers to use.

# Use animation to be helpful

Motion helps your users build a spatial map of your application. When a user taps a button and a screen pushes in from the right edge — and the back button appears on the left edge — the user is aware on some level that they have navigated more deeply into your app.

![mobile app animation good example]({{site.baseurl}}/images/img_appdesign_animation.gif)
*Animation helps with spatial awareness. Source: [Budi Tanrim](https://dribbble.com/shots/1144818-Life-minimal-app-GIF)*

Most motion comes for free if you stick to standard operating system navigation. But if you’re building your own, always ask yourself: Does this animation help the user or does it turn your app UI into a [Disney Movie](https://startupsventurecapital.com/your-ui-isn-t-a-disney-movie-703f7fbd24d2)? 

# Avoid lengthy in-app copy

Mobile screens are small and your users want to get to the point. Don't bog them down with lengthy in-app messages.

Simplify the copy in your app and make sure it’s approachable, useable, and understandable. 
Take a look at how cluttered this in-app copy is. It almost feels like a mini website crammed into the small mobile screen. 

![avis car rental app design]({{site.baseurl}}/images/img_appdesign_Avis.png)
*[Avis](https://itunes.apple.com/au/app/avis-car-rental/id308342527?mt=8) car rental app*

# Avoid pop-ups unless absolutely necessary

Many users will just tap whatever button pops up on an alert without reading it, just to get it out of the way (e.g. asking users to rate the app). 

![app annoying mobile pop up]({{site.baseurl}}/images/img_appdesign_popup.jpg)
*You don’t want to be this app in the user’s eyes. Source: [Usability Geek](https://usabilitygeek.com/mobile-app-pop-up-guidelines/)*

So resist prompting them unless it’s absolutely necessary. Example situations where a pop-up alert is acceptable:

- Asking for critical permission in initial launch, e.g. access the camera if it’s a photo-taking app
- When deleting important things

When you do use pop-up alerts, keep them short and relevant to the task at hand. 

Avoid generic buttons like “OK,” “Cancel,” and “Yes” or “No.” Instead, write the specific action that will occur when the button is pressed such as “Delete,” “Upload,” and so on.

![modal app alert user permission]({{site.baseurl}}/images/img_appdesign_permission.png)
*Source: [Think with Google](https://www.thinkwithgoogle.com/marketing-resources/experience-design/chapter-6-usability-and-comprehension/)*

For secondary alerts, consider using non-modal notifications. These allow your users to continue interacting with your app while a notification is presented.

You might use these for status alerts like completed downloads, adding items to a shopping cart, and so on.

Also, you can provide users with the ability to undo their actions instead of having them confirm every action with an alert (see image below).

![mobile app alert confirm]({{site.baseurl}}/images/img_appdesign_confirm.png)
*Source: [Think with Google](https://www.thinkwithgoogle.com/marketing-resources/experience-design/chapter-6-usability-and-comprehension/)*

A note about error alerts: if you have to use pop-up alerts, tell users what to do to fix the problems. Don’t be like this…

![mobile app modal alert]({{site.baseurl}}/images/img_appdesign_error.png)
*A user may ask: “What went wrong?” “How do I fix this?” Source: [GitHub](https://github.com/uxweb/sweet-alert)*

# Don’t use “Bug fixes and performance improvements” in your release notes, ever
 
This is a rare chance to communicate directly with your users! See the difference between a “filler” release note and good ones below.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">.<a href="https://twitter.com/LinkedIn">@LinkedIn</a> 👎🏾👎🏾👎🏾👎🏾<br><br>Everyone else at least bothers with their release notes. <a href="https://t.co/qoPFZym66u">pic.twitter.com/qoPFZym66u</a></p>&mdash; Simeon (@twolivesleft) <a href="https://twitter.com/twolivesleft/status/875163718060883969">June 15, 2017</a></blockquote> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
 
One the most memorable app release notes I’ve come across is from Medium. They have been cleverly mixing storytelling and useful information, as shown in the example below.
 
<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">❤️ the <a href="https://twitter.com/hashtag/storytelling?src=hash">#storytelling</a> in the release notes of <a href="https://twitter.com/Medium">@Medium</a> app<br>Details that show brand personality &amp; dedication to <a href="https://twitter.com/hashtag/UX?src=hash">#UX</a> <a href="https://t.co/qr4hV3qcsj">pic.twitter.com/qr4hV3qcsj</a></p>&mdash; Enabled (@EnabledHQ) <a href="https://twitter.com/EnabledHQ/status/888298506447974400">July 21, 2017</a></blockquote> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
 
Medium even has an archive of their [app release notes](https://medium.com/medium-release-notes), recognising that writing these is not for the sake of filling the space.

# Be smart about user feedback

Listen to your users but don’t follow what they say - be opinionated about how your app should work
 
Your users are using _your_ application. That is, they are paying you for your decisions, your thoughts, and your design. Don’t always defer to what they say when they have suggestions. 

If a user wants a particular feature then think about why they want it - don’t blindly implement feature requests. Use them as an opportunity to re-think the fundamental workflow of your app and what it is they are trying to do. 

In other words, try to understand their [Jobs-to-be-done](http://blog.enabled.com.au/jobs-to-be-done/).

Perhaps your users would be better of with a different app entirely? If so, don’t hesitate to recommend it to them.

# Be smart about user testing

Watch users use your app without any interaction, prompting, or discussion from you. Don’t talk to users afterwards, just learn from observing. 

![app usability test]({{site.baseurl}}/images/img_appdesign_test.gif)
*Source: [Bug Bash](http://www.bugbash.net/comic/7.html)*

To further prevent researcher bias, reframe the purpose of your research so as not to “[validate](https://www.nngroup.com/articles/no-validate-in-ux/)” the design, but to “test” it. 

Remember: “If a [usability study](https://www.nngroup.com/articles/no-validate-in-ux/) found nothing to improve in a design then that only proved one thing: that the test was done wrong.”

# <a name="platform"></a> Build to the platform 

Whether you intend to build your app on a single or multiple platforms, you should be aware of the specific [design conventions](http://dev.nudgerewards.com/how-to-design-ui-for-cross-platform-devices/) for each platform (e.g. iOS, Android, Windows Mobile). 

From there, you can decide between these options:

- Strike a balance between adhering to platform conventions and branding conventions (e.g. Facebook app)
- Stick to platform conventions (e.g. WhatsApp app)
- Stick to branding conventions (e.g. Instagram app)

This depends on things like how complex your app is and what your app's objective is in relation to your overall digital strategy. 

Generally, more complex means more time to build and more user onboarding needed. So in this case, it's better to use what's already available in the platform to reduce development time and the learning curve for users.

The [Australian Taxation Office](https://www.ato.gov.au/General/Online-services/ATO-app/) app has customised UI elements using platform-specific conventions. Notice how the toggle is consistent with each platform's design, while still maintaining the teal brand colour chosen by the ATO. 

![cross platform mobile app design]({{site.baseurl}}/images/img_appdesign_ATO.png)
*How a common screen on the ATO app looks on three different mobile platforms*

# Final words

So here's what you can take away from this:

- Cut down features to streamline your app
- If you can't cull features, don't hide critical ones behind gestures
- Don't use hamburger menus (you're not McDonald's)
- Be accessible
- Be animated, not crazy
- Less text, more meaning
- Pop-ups = annoying = higher chance of uninstall
- Use those extra minutes to write good release notes instead of checking social media
- Don't listen to your users. Watch them
- Know thy platform 

---
Got more mobile app design tips or questions? Tweet to us [@EnabledHQ](https://twitter.com/EnabledHQ) 

Or leave your feedback about our blog & website [here](https://enabled1.typeform.com/to/YcdNts).
