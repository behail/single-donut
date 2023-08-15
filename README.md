# React Donut Single Slice

It is a simple react single splice donut package.

## Installation

Using npm:

### `npm i single-donut`

## Configure

###

```JavaScript
configure = {
svg: {
width: string,
height: string,
},
circle: {
cx: string,
cy: string,
radius: number,
fill: string,
strokeColor1: string,
strokeColor2: string,
strokeWidth: string,
},
text: {
fill: string,
textAnchor: string,
},
percentagevalue: number,

};
```

## Usage

```JavaScript

import ReactDOM from "react-dom/client";

import App from "./App";
import { ReactDonut } from "single-donut";

function App() {
 const configure = {
    svg: {
      width: "80",
      height: "80",
    },
    circle: {
      cx: "50",
      cy: "25",
      radius: 20,
      fill: "transparent",
      strokeColor1: "#aab3b2",
      strokeColor2: "#34ebe5",
      strokeWidth: "6",
    },
    text: {
      fill: "gray",
      textAnchor: "middle",
    },
    percentagevalue: 60,
  };
return (

<div>
<ReactDonut configure={configure} />
</div>
);
}

const root = ReactDOM.createRoot(
document.getElementById("root") as HTMLElement
);
root.render(<App />);
```
