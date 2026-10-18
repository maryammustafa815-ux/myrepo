import './App.css';
import Navbar from './components/Navbar';
import Independence from './components/Independence';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
// } from "react-router-dom";    

function App() {

  const [mode, setMode] = useState('light');   //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';

        setInterval(() => {
          document.title = 'TextUtils is amazing mode';
        }, 2000);
        setInterval(() => {
          document.title = 'Install TextUtils now';
        }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  } 
  return (
    <>
    {/* <Router> */}
        <Navbar title="TextUtils" mod = {mode} toggleMode={toggleMode}/>
        <Alert alert={alert} />
        {/* <Navbar/> */}
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mod = {mode}/>
        <div className="container my-3">
        
          {/* <Routes>   */}
              {/* <Route exact path="/about" element={<About />} />
              <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mod = {mode}/>} />
          </Routes> */}
  
        </div>
    {/* </Router> */}

     {/* <Independence /> */}
     
    </>
  );  
}

export default App;
