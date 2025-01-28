# `roulette-img` 🌀

A lightweight and customizable React component for creating roulette animations with ease.

   <img src="public/assets/imgRouletteGif.gif" alt="rouletteGif" style="width: 100%;"/>

## Features ✨

- **Customizable Roulette**: Easily change the number of slots, images, and arrow positions.
- **Random or Controlled Results**: Supports random results or fixed winning numbers.
- **Customizable Buttons**: Fully style or replace the default start button.
- **Event Callbacks**: React to spin results with `onWin`.
- **Asynchronous Control**: Integrate external APIs to fetch winning numbers dynamically.

---

## Installation 📦

Install the package using npm:

```bash
npm install roulette-img
```

# Usage 🛠️

Import the Roulette component and configure it with your desired props:

## basic example

```js
import React from "react";
import { Roulette } from "roulette-img";

const App = () => {
  return (
    <Roulette
      imgUrl="/assets/bg_circle-" // Path to roulette images (excluding number and extension)
      arrowImgUrl="/assets/arrow.png" // Path to arrow image
      chunkRange={{ start: 2, end: 6 }} // Minimum and maximum number of slots
    />
  );
};

export default App;
```

## advanced example

```js
import React, { useState } from "react";
import { Roulette } from "roulette-img";

const App = () => {
  const [winNumber, setWinNumber] = (useState < number) | (null > null);

  const handleWin = (number: number) => {
    console.log(`Winning number: ${number}`);
    setWinNumber(number);
  };

  const fetchWinNumber = () => {
    setWinNumber(null); // Reset the roulette before spinning
    setTimeout(() => setWinNumber(3), 3000); // Simulate an API call
  };

  return (
    <div>
      <Roulette
        imgUrl="/assets/bg_circle-"
        arrowImgUrl="/assets/arrow.png"
        chunkRange={{ start: 2, end: 6 }}
        winNumber={winNumber}
        drivingType="async"
        buttonStyle={<button onClick={fetchWinNumber}>Spin</button>}
        onWin={handleWin}
      />
    </div>
  );
};

export default App;
```

# Props 📋

| Prop Name | Type | Required | Default | Description | | --------------- | -------------------------------- | -------------- | ------------------ | ------------------------------------------------------------------- | ----------------------------------------------------------------------- | ------ | -------------------------------------- | | imgUrl | string | ✅ | - | Path to the roulette images. Exclude the number and file extension. | | arrowImgUrl | string | ✅ | - | Path to the arrow image. | | chunkRange | { start: number; end: number } | ✅ | - | Range of the number of slots for the roulette. | | chunk | number | ❌ | chunkRange.start | Number of slots in the roulette. | | arrowPosition | "up" | "down" | "left" | "right" | ❌ | "up" | Position of the arrow on the roulette. | | winNumber | number | null | ❌ | Random | Predefined winning slot. Random if not provided. | | buttonText | string | ❌ | "start" | Text displayed on the start button. | | buttonShape | "round" | "square" | ❌ | "round" | Shape of the start button. | | buttonStyle | React.ReactNode | ❌ | - | Custom button component to replace the default start button. | | onWin | (winNumber: number | null) => void | ❌ | - | Callback function triggered when the spin ends with the winning number. | | drivingType | "async" | undefined | ❌ | undefined | Enables asynchronous winning number handling via external APIs. |         |

## Styling 🎨

You can customize the styles of the roulette components using the following class names:

| **Element**        | **Class Name**  | **Description**                         |
| ------------------ | --------------- | --------------------------------------- |
| **Roulette Image** | `.roulette`     | The spinning roulette wheel.            |
| **Arrow Image**    | `.arrow`        | The arrow pointing to the winning slot. |
| **Start Button**   | `.start-button` | The button to start spinning the wheel. |

### Example

```css
.start-button {
  background-color: red;
  color: yellow;
  font-size: 16px;
}

.arrow {
  width: 50px;
  height: 50px;
}

.roulette {
  border: 5px solid #000;
}
```

# Changelog 📝

Version 0.3.2

1. Added asynchronous winning number handling (drivingType="async").
2. Enhanced button customization via buttonStyle.

Version 0.3.0

1. Added onWin callback to retrieve the winning number.
2. Improved button customization options.
