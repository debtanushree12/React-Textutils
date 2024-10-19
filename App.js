import './App.css';

import Navbar1 from './components/Navbar1';
import About from './components/About';
import Textarea1 from './components/Textarea1';
import Alert from './components/Alert';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  
  const toggleMode =()=>{
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background = '#042743';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enable", "success");
    }
    else {
      setMode('light');
      document.body.style.background = 'white'
      document.body.style.color = 'black';

      showAlert("Light mode has been enable", "success");

    }
  }
  return (

    <>
       <Router>
      
      <Navbar1 title="Textutils" mode={mode} toggleMode={toggleMode}  />
      <Alert alert={alert}></Alert>
   

      <div className="container my-3">
      
      <Routes>
        <Route exact path="/Home"element={<Textarea1 showAlert={showAlert} heading="Try Textutils- Word counter, Character counter" mode={mode} />} /> 
        <Route exact path="/About" element={<About mode={mode} />} />
      </Routes> 
        </div> 
        </Router>
       
        
    </>

  );
}

export default App;
