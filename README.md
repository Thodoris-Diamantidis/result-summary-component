# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

This was overall a fun challenge to tackle

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Use the local JSON data to dynamically populate the content

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

My proccess for this project is almost the same as any project that i start:
-First step was to define my html structure and make a starter CSS file so it will be easier later on to style the whole project
-Started of with adding a CSS resseter from (https://www.joshwcomeau.com/css/custom-css-reset/)
-Added some Custom variables to help me in this project(guided by the style-guide.md)
-Second step was to start styling for mobile-first
-Started styling untill i was happy with the result
-Went and did the responsiveness afterwards
-Third and last step was to perfect the styling

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

The best thing that i learned was to develop clear simple maintainable code and also a few css tricks :).

Also this Javascript section was pretty fun never used something like that to go through different colors for every item in the data.

```js
const bgcolors = [
  "var(--clr-primary-lightRed-100)",
  "var(--clr-primary-orangeyYellow-300)",
  "var(--clr-primary-greenTeal-200)",
  "var(--clr-primary-cobaltBlue-200)",
];

const headingColors = [
  "var(--clr-primary-lightRed-300)",
  "var(--clr-primary-orangeyYellow-600)",
  "var(--clr-primary-greenTeal-400)",
  "var(--clr-primary-cobaltBlue-500)",
];

{
  data.map((item, index) => (
    <div
      className="summary__grade"
      key={index}
      style={{ backgroundColor: bgcolors[index] }}
    >
      <p style={{ color: headingColors[index] }}>
        <img src={item.icon} alt="itemicon" />
        {item.category}
      </p>
      <p>
        <span>{item.score}</span> / 100
      </p>
    </div>
  ));
}
```

### Continued development

As always i would love to expand and learn new things on css,js,react

### Useful resources

- [CSS Reset](https://www.joshwcomeau.com/css/custom-css-reset/) - This helped me a ton by starting of my Css file on the right foot. I really liked this pattern and will use

## Author

- Website - [Thodoris Diamantidis](https://www.your-site.com)// ddnt change that yet
- Frontend Mentor - [@Thodoris-Diamantidis](https://www.frontendmentor.io/profile/Thodoris-Diamantidis)

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.
