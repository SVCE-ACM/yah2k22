import React from 'react';
import { Routes, Route } from 'react-router-dom';

import CustomAppbar from 'common/CustomAppbar';
import './App.css';
import RegisterView from 'views/Register/RegisterView';
import SuccessPage from 'views/Success/SuccessPage';
import SelectionPage from 'views/Selection/Selection';

function App() {
  return (
    <div className='App'>
      <CustomAppbar />
      <Routes>
        <Route path='/' element={<RegisterView />} />
        <Route path='/done' element={<SuccessPage />} />
        <Route path='/very-secret-route/secret' element={<SelectionPage />} />
      </Routes>
    </div>
  );
}

export default App;
