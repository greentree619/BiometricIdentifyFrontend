import React, { useState, useEffect } from 'react';
import { imageWidth,imageHeight } from '../../config/config';

function FetchAndDisplayImages() {
  const [images, setImages] = useState([]);

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

  return (
    <div>
      {images.map((image) => (
        <img key={image.id} src={image.largeImageURL} style={{width: imageWidth, height: imageHeight}} alt={image.tags} />
      ))}
    </div>
  );
}

export default FetchAndDisplayImages;
