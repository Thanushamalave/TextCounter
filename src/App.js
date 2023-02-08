import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import Alert from './components/Alert';
import About from './components/About';
import './App.css';
import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode]= useState('light');
  const [alert, setAlert]=useState("");
    const showAlert=(msg,type)=>{
    setAlert({
      msg : msg,
      type :type
    })
     setTimeout(() => {
      setAlert(null)
     }, 1500); 
    }
  // const showAlert=()=>{
  //     if(mode==='light'){
  //       setAlert("Dark mood has been enabled");
  //     }else{
  //       setAlert("Light mood has been enabled");
  //     }
  //   }
  const togglemode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#212529';
      showAlert("Dark mood has been enabled","success");
      
    }else{
      setMode('light');
      document.body.style.backgroundColor='#f8f9fa';
      showAlert("Light mood has been enabled","success");
    }
  }
  
  return (
    <>
      <Router> 
      <Navbar  mode={mode} togglemode={togglemode}/>
      <Alert alert={alert} />
      <div className='container'>
      <Switch>
       <Route path="/about">
         <About  mode={mode}/>
       </Route>
      
       <Route path="/">
        <Textarea mode={mode} heading="Enter here" showAlert={showAlert}/>
      </Route>
     </Switch>
      </div>
       </Router> 
      
      </>
    
    
  );
}

export default App;
