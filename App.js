import React from 'react'
import './App.css'
import Home from './home'
import Signup from './signup'
import Login from './login';

import {Route, Link, Routes, BrowserRouter} from 'react-router-dom';

const App=()=> {
  return (
    <>
  <div>
        <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/signup" element={<Signup/>}/>
        </Routes>
  </div>

    </>
  );
}

export default App;
