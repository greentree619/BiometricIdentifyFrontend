import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';

const Menu = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const getImageForButton = () => {
    if (selectedButton === 'upload') {
      return <img src="url_to_upload_image" alt="Upload" />;
    } else if (selectedButton === 'faceSamples') {
      return <img src="url_to_face_samples_image" alt="Face Samples" />;
    } else if (selectedButton === 'fingerSamples') {
      return <img src="url_to_finger_samples_image" alt="Finger Samples" />;
    } else if (selectedButton === 'irisSamples') {
      return <img src="url_to_iris_samples_image" alt="Iris Samples" />;
    } else if (selectedButton === 'voiceSamples') {
      return <img src="url_to_voice_samples_image" alt="Voice Samples" />;
    }
    return null;
  };

  return (
    <div className="menu">
      <Button variant="success" size="md" onClick={() => handleButtonClick('upload')}>
        <FontAwesomeIcon icon={faCloud} /> Upload Files
      </Button>
      <Button variant="outline-success" size="md" onClick={() => handleButtonClick('faceSamples')}>
        Face Samples
      </Button>
      <Button variant="outline-success" size="md" onClick={() => handleButtonClick('fingerSamples')}>
        Finger Samples
      </Button>
      <Button variant="outline-success" size="md" onClick={() => handleButtonClick('irisSamples')}>
        Iris Samples
      </Button>
      <Button variant="outline-success" size="md" onClick={() => handleButtonClick('voiceSamples')}>
        Voice Samples
      </Button>

      {selectedButton && getImageForButton()}
    </div>
  );
};

export default Menu;
