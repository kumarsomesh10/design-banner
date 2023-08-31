import React, { useState } from "react";
import styles from "../styles/Right.module.css";

const Right = ({ imageOptions, handleInputData }) => {
  const [inputCount, setInputCount] = useState(2); // Initial input count

  const increaseInputCount = () => {
    setInputCount(inputCount + 1);
  };

  const downloadCanvasAsImage = () => {
    const canvas = document.getElementById("canvas");

    // Convert canvas to image data URL
    const dataURL = canvas.toDataURL("image/png");

    const downloadLink = document.createElement("a");
    downloadLink.href = dataURL;

    downloadLink.download = imageOptions.name
      ? `${imageOptions.name}.png`
      : "canvas_image.png";
    document.body.appendChild(downloadLink);

    downloadLink.click();

    document.body.removeChild(downloadLink);
  };

  return (
    <div className={styles.rightContainer}>
      <button className={styles.saveButton} onClick={downloadCanvasAsImage}>
        Save Image
      </button>

      <div className={styles.inputGroup}>
        <label htmlFor="layer">Add New Layers :</label>
        <button className={styles.addButton} onClick={increaseInputCount}>
          Add
        </button>
      </div>

      {Array.from({ length: inputCount }).map((_, index) => (
        <div className={styles.inputGroup} key={index}>
          <label htmlFor={`input-${index}`}>Input {index + 1}:</label>
          <div className={styles.inputFlexContainer}>
            <input
              type="text"
              id={`input-${index}`}
              onChange={(event) =>
                handleInputData(index, "text", event.target.value)
              }
            />
          </div>
          <div className={styles.marginFlexContainer}>
            <input
              type="number"
              placeholder="Top Margin"
              onChange={(event) =>
                handleInputData(index, "topMargin", event.target.value)
              }
            />
            <input
              type="number"
              placeholder="Left Margin"
              onChange={(event) =>
                handleInputData(index, "leftMargin", event.target.value)
              }
            />
          </div>
          <div className={styles.marginFlexContainer}>
            <input
              type="number"
              placeholder="Font Size"
              onChange={(event) =>
                handleInputData(index, "fontsize", event.target.value)
              }
            />
            <input
              type="text"
              placeholder="Color #000000"
              onChange={(event) =>
                handleInputData(index, "fontcolor", event.target.value)
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Right;
