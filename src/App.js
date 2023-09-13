import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import LeftSidebar from './components/LeftSidebar';
import MainContent from './components/MainContent';
import RightSidebar from './components/RightSidebar';
import Menu from './components/Menu';

// App Component (Parent Component)
function App() {
  return (
    <div className="App">
      <Menu />
      <div className="sidebar-container">
        <div className="col-3 col-sm-3 left-sidebar">
          <LeftSidebar  />
        </div>
        <div className="col-5 col-sm-3 right-sidebar">
          <RightSidebar  />
        </div>
        <div className="col-10 col-sm-6 main-content">
          <MainContent  />
        </div>
      </div>
    </div>
  );
}

export default App;
