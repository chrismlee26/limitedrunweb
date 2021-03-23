import React, { useState } from 'react';
import { Router, Route, Switch } from "react-router";
import Nav from './Nav'
import DashOne from './DashOne'
// import DashTwo from './DashTwo'

import './App.css';

document.body.style.backgroundColor="#575A61"

function App() {
  return (
    <div className="App">
      <Nav />
      <DashOne />
      <div className="photoupload"></div>
    </div>
  );
}

export default App;
