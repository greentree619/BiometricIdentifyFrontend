import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import LeftSidebar from './components/LeftSidebar';
import MainContent from './components/MainContent';
import RightSidebar from './components/RightSidebar';
import Menu from './components/Menu';

// App Component (Parent Component)
function App() {
  const [selectedButton, setSelectedButton] =  useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div className="App">
      <Menu setSelectedButton={setSelectedButton} setSelectedImage={setSelectedImage} />
      <div className="sidebar-container">
        <div className="col-3 col-sm-2 left-sidebar">
        <LeftSidebar selectedButton={selectedButton} selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>
        </div>
        <div className="col-5 col-sm-2 right-sidebar">
          <RightSidebar  />
        </div>
        <div className="col-10 col-sm-8 main-content">
          <MainContent  selectedImage={selectedImage}/>
        </div>
      </div>
    </div>
  );
}

export default App;
