// src/components/LeftSidebar.js
import FaceSamples from './samples/FaceSamples';
import React, { useState, useEffect } from 'react';
import FetchAndDisplayImage from './samples/FetchAndDisplayImage';

const imageWidth = '150px'; // Change to your preferred width
const imageHeight = '120px'; // Change to your preferred height

  // const fetchAndLog = async () => {
  //   var myHeaders = new Headers();
    
    
  //   var requestOptions = {
  //     method: 'GET',
  //     headers: myHeaders,
  //     redirect: 'follow'
  //   };
    
  //   fetch("https://pixabay.com/api/?key=14748885-e58fd7b3b1c4bf5ae18c651f6&q=yellow+flowers&image_type=photo&min_width=480&min_height=600&per_page=100&page=1", requestOptions)
  //     .then(response => response.text())
  //     .then(result => console.log(result))
  //     .catch(error => console.log('error', error));
  // }

const LeftSidebar = ({selectedButton, selectedImage}) => {

  const getImageForButton = () => {
    if (selectedButton === 'upload' && selectedImage) {
      return <img src={selectedImage} style={{width:imageWidth, height:imageHeight }}alt="Face Samples" />
    } else if (selectedButton === 'faceSamples') {
      return (
        <>
         <FaceSamples />
        </>
      )
    } else if (selectedButton === 'fingerSamples') {
      return (
        <>
          <FetchAndDisplayImage />
        </>
      );
    } else if (selectedButton === 'irisSamples') {
      return <img src="url_to_iris_samples_image" alt="Iris Samples" />;
    } else if (selectedButton === 'voiceSamples') {
      return <img src="url_to_voice_samples_image" alt="Voice Samples" />;
    }
    return null;
  };
  return (
    <div className="sidebar">
      <div className="image-container">
        {selectedButton && getImageForButton()}
      </div>
      {/* ... Other sidebar content ... */}
    </div>
  );
};

export default LeftSidebar;