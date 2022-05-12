import React from 'react';
import { Routes, Route } from 'react-router-dom';

import CustomAppbar from 'common/CustomAppbar';
import './App.css';
import RegisterView from 'views/Register/RegisterView';

function App() {
  return (
    <div className='App'>
      <CustomAppbar />
      <Routes>
        <Route path='/' element={<RegisterView />} />
      </Routes>
    </div>
  );
}

export default App;
