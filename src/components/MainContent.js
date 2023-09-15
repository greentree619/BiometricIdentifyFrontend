import React from 'react';

function MainContent({ selectedImage }) {
  return (
    <div className="maincontent">
      {selectedImage && (
        <img
          src={selectedImage}
          alt="Selected Image"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      )}
    </div>
  );
}

export default MainContent;
