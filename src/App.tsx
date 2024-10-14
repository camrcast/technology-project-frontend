import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Login from './pages/Login';


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;
