import React from 'react';
import { Routes, Route } from 'react-router-dom';

import CustomAppbar from 'common/CustomAppbar';
import './App.css';
// import RegisterView from 'views/Register/RegisterView';
// import SuccessPage from 'views/Success/SuccessPage';
import SelectionPage from 'views/Selection/Selection';
import SelectedPage from './views/Selected/Selected';
import RegisterClosed from './views/RegisterClosed/RegisterClosed';

function App() {
  return (
    <div className='App'>
      <CustomAppbar />
      <Routes>
        <Route path='/' element={<RegisterClosed />} />
        {/* <Route path='/done' element={<SuccessPage />} /> */}
        <Route path='/very-secret-route/secret' element={<SelectionPage />} />
        <Route path='/very-secret-route/secret/selected' element={<SelectedPage />} />
      </Routes>
    </div>
  );
}

export default App;
