// left.js
import React, { useEffect, useState } from "react";
import styles from "../styles/Left.module.css";

const left = ({ onImageUpload, setImageOptions }) => {
  const handleImageUpload = (event) => {
    const image = event.target.files[0];
    onImageUpload(image); // Pass the image to the parent component
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setImageOptions((prevOptions) => ({
      ...prevOptions,
      [id]: value,
    }));
  };

  return (
    <div className={styles.leftContainer}>
      <h2 className={styles.title}>Settings</h2>
      <div className={styles.inputGroup}>
        <label htmlFor="layer">Canvas Color :</label>
        <input
          type="text"
          id="canvasColor"
          placeholder="#111111"
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.inputGroup}>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className={styles.hiddenInput}
          id="imageInput"
        />
        <label htmlFor="imageInput" className={styles.uploadButton}>
          Upload Image
        </label>
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          placeholder="sample_image"
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="width">W : </label>
        <input
          type="number"
          id="width"
          placeholder="500px"
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="height">Angle :</label>
        <input type="number" id="angle" onChange={handleInputChange} />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="height">Opacity :</label>
        <input
          type="range"
          id="opacity"
          min="0"
          max="1"
          step="0.01"
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="height">MarginT:</label>
        <input type="number" id="margint" onChange={handleInputChange} />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="height">MarginL:</label>
        <input type="number" id="marginl" onChange={handleInputChange} />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="height">Shadow:</label>
        <input
          type="text"
          id="shadow"
          placeholder="100px 200px 400px #000"
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="height">Border Width:</label>
        <input
          type="text"
          id="borderwid"
          placeholder="100"
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="height">Border Color:</label>
        <input
          type="text"
          id="bordercol"
          placeholder="rgba(100,100,100,0.5)"
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default left;
