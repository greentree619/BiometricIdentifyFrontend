import React, { useState, useEffect } from 'react';
import { imageWidth, imageHeight } from '../../config/config';
import MainContent from '../MainContent'; // Import the MainContent component

function FetchAndDisplayImages({selectedImage, setSelectedImage}) {
  const [images, setImages] = useState([]); // Use useState to manage images

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://pixabay.com/api/?key=14748885-e58fd7b3b1c4bf5ae18c651f6&q=yellow+flowers&image_type=photo&min_width=480&min_height=600&per_page=100&page=1"
        );
        if (response.ok) {
          const data = await response.json();
          setImages(data.hits);
        } else {
          console.error("Error fetching data from the Pixabay API.");
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  const handleImageClick = (image) => {
    console.log("Selected Image URL:", image.largeImageURL);
    setSelectedImage( image.largeImageURL); // Update selectedImage with the URL
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {images.map((image) => (
        <div
          key={image.id}
          style={{
            margin: '10px',
            border: `1px solid ${image.largeImageURL === selectedImage ? 'blue' : '#ccc'}`,
            cursor: 'pointer',
          }}
          onClick={() => handleImageClick(image)}
        >
          <img src={image.largeImageURL} style={{ width: imageWidth, height: imageHeight }} alt={image.tags} />
        </div>
      ))}
      <MainContent selectedImage={selectedImage} /> {/* Pass the selected image URL to MainContent */}
    </div>
  );
}

export default FetchAndDisplayImages;
