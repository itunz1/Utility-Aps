import React from 'react';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Prueba from './Components/Clima/Prueba';
import Timer from './Components/Timer/Times';
import MainPage from './Components/TeachClass/MainPage';
import Conversor from './Components/Conversor/Conversor';
import Home from './Components/Home/Home.jsx';
import './App.css';

function App() {
  
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/clima" element={<Prueba/>} />
          <Route path="/timer" element={<Timer/>} />
          <Route path="/class" element={<MainPage/>} />
          <Route exact path="/conversor" element={<Conversor/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
