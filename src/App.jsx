import React from 'react';
import HomePage from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './pages/Login';

function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/signup" element={<HomePage/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/login" element={<>hello</>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
