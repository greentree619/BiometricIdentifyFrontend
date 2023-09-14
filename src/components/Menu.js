import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';

const Menu = ({setSelectedButton, setSelectedImage}) => {

  const buttonStyle = {
    marginRight: '15px', // You can adjust this value as needed
  };

  const handleUploadButtonClick = () => {
    // Programmatically trigger the file input click event
    const fileInput = document.getElementById('file-input');
    fileInput.click();
    setSelectedButton('upload');
  };

 const handleFileInputChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      // Handle file selection here
      setSelectedButton('upload');

      // Display the selected image
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target.result;
        setSelectedImage(imageUrl);
        // You can set imageUrl in state or use it directly to display the image
        // For example, you can update the state with setSelectedImage(imageUrl);
        console.log('Selected image:', imageUrl);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <div className="menu">
      <Button variant="success" style={buttonStyle} size="md" onClick={handleUploadButtonClick}>
        <FontAwesomeIcon icon={faCloud} /> Upload Files
      </Button>
      <input
        type="file"
        id="file-input"
        style={{ display: 'none' }}
        onChange={handleFileInputChange}
        accept="image/*" // Specify the file type(s) you want to accept (e.g., images)
      />
      <Button variant="outline-success" style={buttonStyle} size="md" onClick={() => handleButtonClick('faceSamples')}>
        Face Samples
      </Button>
      <Button variant="outline-success" style={buttonStyle} size="md" onClick={() => handleButtonClick('fingerSamples')}>
        Finger Samples
      </Button>
      <Button variant="outline-success" style={buttonStyle} size="md" onClick={() => handleButtonClick('irisSamples')}>
        Iris Samples
      </Button>
      <Button variant="outline-success" style={buttonStyle} size="md" onClick={() => handleButtonClick('voiceSamples')}>
        Voice Samples
      </Button>
      
      {/* <App selectedButton={selectedButton} /> */}
    </div>
  );
};

export default Menu;
