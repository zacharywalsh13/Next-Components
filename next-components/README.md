# Next-Components-Kit

This package, `next-components-kit`, is a robust library of components designed for [Next.js](https://nextjs.org/) applications. It fully leverages the power and flexibility of [Tailwind CSS](https://tailwindcss.com/).

## Getting Started

To use this component library, you must first have a Next.js project. If you haven't already, you can bootstrap one with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Installation

First, add the `next-components-kit` to your project using npm:

```bash
npm install next-components-kit
```

## Setting Up Tailwind CSS

If Tailwind CSS is not already configured for your project, follow these steps:

1. Install Tailwind via npm:

```bash
npm install tailwindcss
```

2. Initialize your `tailwind.config.js` file:

```bash
npx tailwindcss init
```

3. Add the following line to the `content` array in your `tailwind.config.js` file:

```javascript
module.exports = {
content: [
// add the following line
'./node_modules/next-components-kit/**/*.{js,ts,jsx,tsx,mdx}',
],
// ...
}
```

## Setting Up TypeScript

Follow these steps to set up TypeScript in your project:

1. Install TypeScript via npm:
```bash
npm install --save typescript @types/react @types/node
```

2. Next.js will automatically detect TypeScript in your project and create a `tsconfig.json` file for you when you run `next dev`:
```bash
npx next dev
```


## Usage

Now, you can start using components from the `next-components-kit`. Simply import them directly into your project files. Remember, each component is fully customizable with Tailwind CSS utility classes.

```javascript
import { ComponentName } from 'next-components-kit'
```

## KitButton Component

The `KitButton` is a versatile and customizable button component. 

### Importing

```javascript
import { KitButton } from 'next-components-kit'
```

### Basic Usage

```javascript
export default function Home() {
return (
<div>
    <h1>Home</h1>
    <KitButton />
</div>
)
}
```

By default, the `KitButton` doesn't need any props and can be used as shown above.

### Customizable Props

You can also customize the `KitButton` by passing various props to it:

```javascript
<KitButton
ButtonText="Submit"
onClick={() => {}}
color="blue"
size="medium"
weight="medium"
radius="full"
shadow="medium"
/>
```

Here are the available options for each prop:

```javascript
{
  "ButtonText": "Submit", // (string, default: "Submit"): Sets the text of the button.
  "onClick": "() => {}", // (function, default: () => {}): Sets the function to be called on click.
  "color": "blue", // (string, default: "blue"): Sets the color of the button. Available options are "sky", "blue", "indigo", "slate", "red", "rose", "green", "teal", "yellow", "orange", "amber", "purple", "violet", "fuchsia", "gray", "neutral", "stone", "pink", "lime", "cyan", and "emerald".
  "size": "medium", // (string, default: "medium"): Sets the size of the button. Available options are "extraSmall", "small", "medium", "large", "extraLarge", and "extraExtraLarge".
  "weight": "medium", // (string, default: "medium"): Sets the font weight of the button. Available options are "thin", "extraLight", "light", "normal", "medium", "semibold", "bold", "extrabold", and "black".
  "radius": "full", // (string, default: "full"): Sets the border radius of the button. Available options are "none", "small", "medium", "large", and "full".
  "shadow": "medium" // (string, default: "medium"): Sets the shadow of the button. Available options are "none", "small", "medium", "large", and "xl".
}


# Future Plans

In the spirit of continuous growth and innovation, plans for the future development of `next-components-kit` involve transforming it into a fully-fledged UI library. The ultimate goal is to provide a comprehensive set of components that cater to a wide variety of UI needs, creating a tool that is both versatile and highly performant.

We are excited to be able to offer a robust set of features and functionalities that will enhance the user's web development experience. We aim to optimize for maximum performance and minimal load time, to ensure that the tools provided by `next-components-kit` not only meet but exceed your expectations in building modern, responsive web applications.

The project's evolution will be heavily driven by the feedback and needs of the user community. We are committed to implementing feedback and conducting user testing to constantly improve the library's efficiency and versatility.

Join us on this journey of creating a library that is more than just a collection of components but a complete toolkit for building beautiful, interactive, and high-performance web applications.

# About

I am **Zachary Walsh**, an innovative Junior Software Developer offering expertise in both front-end and back-end development. I'm skilled in creating tailored software solutions and web designs to enhance operational productivity and improve user experiences. I am currently on the lookout for a challenging role in web development where I can leverage my skills and contribute to a forward-thinking organization.

You can reach me at (469) 216-5441 or [zacharywalsh13@gmail.com](mailto:zacharywalsh13@gmail.com). You can also find me on [Github](https://github.com/zacharywalsh13/) and [LinkedIn](https://www.linkedin.com/in/zachry-walsh-40b18920b/).

My skillset is wide and includes Web Development, Headless CMS, Mobile Development, UI design, Responsive Design, Firebase, Database Management, MongoDB, Web Hosting, App Distribution, and App Marketing and Sales.

In terms of programming languages, I am proficient in Swift, HTML, CSS, Tailwind CSS, Javascript, Typescript, React, Next.JS, React Native, Node.js, and Express.

Outside of work, I have a passion for backpacking, hiking, gaming, and cooking. These hobbies, in addition to my passion for coding and volunteering, help me to maintain a balanced lifestyle and fuel my creativity. I am committed to continuous learning and growth in both my professional and personal life.

Feedback and contributions to `next-components-kit` are always welcome! 


