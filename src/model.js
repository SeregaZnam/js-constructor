import image from "./assets/image.png";
import {
  ColumnsBlock,
  ImageBlock,
  TextBlock,
  TitleBlock,
} from "./classes/blocks";

export const model = [
  new TitleBlock("Constructor sites on pure js", {
    tag: "h2",
    styles: {
      background: "linear-gradient(to right, #ff0099, #493240)",
      color: "#fff",
      padding: "1.5rem",
      "text-align": "center",
    },
  }),
  new ImageBlock(image, {
    styles: {
      padding: "2rem 0",
      display: "flex",
      "justify-content": "center",
    },
    imageStyles: {
      width: "500px",
      height: "auto",
    },
    auto: "This is image",
  }),
  new ColumnsBlock(["11111111111", "22222222222", "33333333333"], {
    styles: {
      background: "linear-gradient(to bottom, #8e2de2, #4a00e0)",
      padding: "2rem",
      color: "#fff",
      "font-weight": "bold",
    },
  }),
  new TextBlock("here we go with some text", {
    styles: {
      background: "linear-gradient(to left, #f299a4, #f2c94c)",
      padding: "1rem",
      "font-weight": "bold",
    },
  }),
];
