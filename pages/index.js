import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Left from "../components/Left";
import Canvas from "../components/Canvas";
import Right from "../components/Right";
import styles from "../styles/Layout.module.css";

export default function Home() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [imageOptions, setImageOptions] = useState({
    // Initialize with default values
    name: "",
    width: "0px",
    height: "0px",
    angle: 0,
    opacity: 1,
    margint: 1,
    marginl: 1,
    shadow: "0px 0px 0px #000",
    borderrad: "1px",
    borderwid: "1px",
    bordercol: "#000000",
  });

  const handleImageUpload = (image) => {
    const uploadedImageURL = URL.createObjectURL(image);
    setUploadedImage(uploadedImageURL);
  };

  const handleTextInput = (inputIndex, inputValue) => {
    // Update the text input value in the imageOptions state
    setImageOptions((prevOptions) => ({
      ...prevOptions,
      [`input-${inputIndex}`]: inputValue,
    }));
  };

  const [inputData, setInputData] = useState({}); // New state to store input index and values

  const handleInputData = (inputIndex, key, value) => {
    setInputData((prevData) => ({
      ...prevData,
      [`input-${inputIndex}`]: {
        ...prevData[`input-${inputIndex}`],
        [key]: value,
      },
    }));
  };

  // useEffect(() => {
  //   console.log(inputData);
  // }, [inputData]);

  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles["canvas-container"]}>
        <Left
          onImageUpload={handleImageUpload}
          setImageOptions={setImageOptions}
        />
        <Canvas
          key={JSON.stringify(imageOptions)}
          uploadedImage={uploadedImage}
          imageOptions={imageOptions}
          inputData={inputData}
        />
        <Right imageOptions={imageOptions} handleInputData={handleInputData} />
      </div>
    </div>
  );
}
