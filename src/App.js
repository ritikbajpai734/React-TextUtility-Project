import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React,{useState} from 'react'
import FeaturedProducts from "./components/FeaturedProducts";
import './App.css';

function App() {

const [mode, setMode] = useState('light'); //wheather dark mode is enabled or not

const [alert, setAlert] = useState(null); //Alert State

//Show Alert
const showAlert =(message, type) => {
  setAlert({
      msg: message,
      type : type
  })

  setTimeout(() => {
      setAlert(null);
  }, 1500);
}

const toggleMode = () => {
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = '#082346';
        showAlert("Dark mode has been Enabled","success");
      }else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been Enabled", "success");
      }
}

  return (
   
    <BrowserRouter>
      <Navbar title="TextUtils" aboutUs="About us" mode={mode} toggleMode={toggleMode} />
      <Alert  alert={alert}/>
      <div className="container my-3">
    <Routes>
      <Route path="/" element={<TextForm showAlert={showAlert}  heading="Enter the text analyze below" mode={mode}/>} />
      <Route path="about-us" element={<About />} />
      <Route path="products" element={<FeaturedProducts />} />
   </Routes> 
      </div>
  </BrowserRouter>


  );
}

export default App;
