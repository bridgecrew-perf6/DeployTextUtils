import "./App.css";
import About from "./Componets/About";
import NavBar from "./Componets/NavBar";
import TextForm from "./Componets/TextForm";
import React, { useState } from "react";
import Alert from "./Componets/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import {
//   BrowserRouter as Router,
//   Route,

// } from "react-router-dom";
function App() {
  const [mode, setmode] = useState("dark");
  const [textcolor, settextcolor] = useState("white");
  const [enablemode, setenablemode] = useState("Enable Light ");
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  const modeChange = () => {
    if (mode === "dark") {
      setmode("light");
      setenablemode("disable Light");
      settextcolor("black");
      showAlert("Light mode Enabled !", "success");
      document.body.style.backgroundColor = "white";
    } else {
      setmode("dark");
      setenablemode(" Enable Light");
      settextcolor("white");
      showAlert("Light mode disabled !", "success");
      document.body.style.backgroundColor = "#484040";
    }
  };
  return (
    <>
     
          
            
            {/* <NavBar/>

           
              {/* <About /> */}
            

            <Router>
            <NavBar
              title="TextUtils"
              aboututils="About"
              mode={mode}
              modeChange={modeChange}
              enablemode={enablemode}
              textcolor={textcolor}
            />
            <Alert alert={alert} />
              <Routes>
                {/* <Route path='/' element={<NavBar/>}/>  */}
                <Route path='/' element={<TextForm/>}/> 
                <Route path='/about' element={<About/>}/> 
              </Routes>
            </Router>
         
    </>
  );
}

export default App;
