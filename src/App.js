import React, { useState,useEffect } from "react";
import {BrowserRouter} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Main from "./components/maincomponent/Main";
import "./App.css"

const App = () => {

  const[AppHeight,setAppHeight]=useState(`100vh`)
  useEffect(()=>{
    setAppHeight(`${window.innerHeight - 2}px`)
  })
  return (
    <BrowserRouter>
      <div className="App" style={{height:AppHeight}}>
        <Navbar />
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
