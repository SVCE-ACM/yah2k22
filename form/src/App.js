import React from 'react';
import { Routes, Route } from 'react-router-dom';

import CustomAppbar from 'common/CustomAppbar';
import './App.css';
import RegisterView from 'views/Register/RegisterView';
import SuccessPage from 'views/Success/SuccessPage';

function App() {
  return (
    <div className='App'>
      <CustomAppbar />
      <Routes>
        <Route path='/' element={<RegisterView />} />
        <Route path='/done' element={<SuccessPage />} />
      </Routes>
    </div>
  );
}

export default App;
