# Blinking Squares React Component

## Description

Blinking Squares React Component is a visually appealing user interface element created using React. It displays a grid of animated squares that blink intermittently, creating an eye-catching background effect.

## Live Site

[Check out the live site here!](https://spontaneous-tarsier-978048.netlify.app/)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## Installation

To use the Blinking Squares React Component in your project, follow these steps:

1. Clone the repository: `git clone https://github.com/DShaon/bg-animation-job-task.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`

Make sure to customize the component's appearance and behavior by modifying the CSS styles and adjusting the component's props in `BlinkingSquares.js`.

## Usage

Once installed, you can include the Blinking Squares React Component in your project like this:

```jsx
import React from 'react';
import BlinkingSquares from './BlinkingSquares';

const App = () => {
  return (
    <div>
      <BlinkingSquares />

    </div>
  );
};

export default App;


## Customization

### Adjust Grid Size and Spacing:
You can modify the number of rows (`numRows`), number of columns (`numCols`), square size (`squareSize`), and spacing between squares (`spacing`) in the `BlinkingSquares.js` file.

### Change Animation Duration:
The animation delay for each square is randomized between 0s and 10s, creating a blinking effect. You can adjust the animation delay by modifying the `Math.random() * 10 + 's'` expression in the `useEffect` of `BlinkingSquares.js`.

### Customize Square Appearance:
The appearance of the squares can be customized by modifying the CSS rules in the `BlinkingSquares.css` file. You can change the square color, opacity, blur effect, and other visual properties according to your preferences.
```
