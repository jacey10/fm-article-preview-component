# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)


## Overview

### Screenshot
![](./assets/images/Frontend%20Mentor%20-%20Article%20preview%20component.png)


### Links
- Solution URL: (https://github.com/jacey10/fm-article-preview-component)
- Live Site URL: (https://jacey10.github.io/fm-article-preview-component/)

## My process

### Built with
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned
- Learned why using **one button instead of two** avoids unnecessary JS and styling complexity, especially for the desktop layout.
- Understood when to **move DOM elements with JS vs rely on CSS positioning**.
- Gained clarity on **CSS positioning context** and how `position: absolute` really works.
- Discovered how `overflow: hidden` can **clip tooltips** and why `overflow: visible` matters.
- Learned that **CSS can’t select backwards**, forcing better structure or modern selectors.
- Explored solutions like **`:has()` and sibling combinators** for state-based styling.
- Learned how **CSS specificity and rule order** affect interactive states.
- Built one component with **different roles on mobile vs desktop** using media queries.
- Reinforced the importance of **testing across screen sizes** to catch subtle layout issues.



```css
.main__card--illustration {
  border-top-left-radius: 0.8rem; /*I added this after making overflow on main (desktop to be visible)*/
  border-bottom-left-radius: 0.8rem;
}

.content--wrapper {
  display: contents; /*Makes wrapper invisible on mobile */
  width: 100%;
}

.content-wrapper {
  overflow: visible; 
  position: relative; /*Makes it the positioning reference for sharebox*/
}

.footer {
  height: 4rem; /*This gives both author block and share box/options same height since they are children of footer. This prevents the card layout shift*/
}

. share--box {
  position: absolute;
  height: auto; /* Override mobile height */
  min-height: unset; /* Remove any min-height */
}

/* When sharebox tooltip is open, keep button styled */
.share--box.active ~ * .share--button,
.footer:has(.share--box.active) .author--block .share--button {
  background: var(--very-dark-grayish-blue);
}

.share--box.active ~ * .share--button .share-btn__icon path,
.footer:has(.share--box.active) .author--block .share--button .share-btn__icon path {
  fill: var(--light-grayish-blue);
}
```

### Continued development
- I would continue to explore how to create layouts that are responsive across many screens and devices.
- I would learn more and deeping my understanding of DOM Manipulation and Handling user events
- I would also learn more about using Absolute positioning.

### Useful resources
- ChatGPT and Claude as learning tools. I never copied any code without asking them to explain the code and why it works.

## Author
- Website - [James Chima](https://www.your-site.com)
- Frontend Mentor - [@jacey10](https://www.frontendmentor.io/profile/jacey10)
- Twitter - [@jacey_opara](https://x.com/jacey_opara)

