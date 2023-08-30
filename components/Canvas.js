import React, { useEffect, useState } from "react";
import { fabric } from "fabric";

const Canvas = ({ uploadedImage, imageOptions, inputData }) => {
  useEffect(() => {
    const canvas = new fabric.Canvas("canvas", {
      backgroundColor: imageOptions.canvasColor,
    });

    if (uploadedImage) {
      fabric.Image.fromURL(uploadedImage, (img) => {
        const width = imageOptions.width
          ? parseInt(imageOptions.width, 10)
          : 100;
        const height = imageOptions.height
          ? parseInt(imageOptions.height, 10)
          : 10;

        img.scaleToWidth(canvas.width / 2 + width);

        // Apply image options
        img.set({
          top: parseInt(imageOptions.margint, 10),
          left: parseInt(imageOptions.marginl, 10),
          angle: imageOptions.angle,
          opacity: imageOptions.opacity,
          shadow: imageOptions.shadow,
          borderRadius: 1,
          strokeWidth: imageOptions.borderwid
            ? parseInt(imageOptions.borderwid, 10)
            : 10,
          stroke: `${imageOptions.bordercol}`,
        });

        canvas.add(img);

        if (inputData) {
          Object.keys(inputData).forEach((inputKey) => {
            const inputIndex = parseInt(inputKey.split("-")[1]);
            const inputValue = inputData[inputKey];

            var text = new fabric.Text(`${inputValue.text}`, {
              left: inputValue.leftMargin
                ? parseInt(inputValue.leftMargin, 10)
                : 1,
              top: inputValue.topMargin
                ? parseInt(inputValue.topMargin, 10)
                : 1,
              fontSize: inputValue.fontsize
                ? parseInt(inputValue.fontsize, 10)
                : 40,
              fill: inputValue.fontcolor
                ? `${inputValue.fontcolor}`
                : "#000000",
            });
            canvas.add(text);
          });
        }
      });
    }
  }, [uploadedImage, imageOptions, inputData]);

  return (
    <div>
      <canvas id="canvas" width={"800px"} height={"550px"}></canvas>
    </div>
  );
};

export default Canvas;
