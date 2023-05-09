import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login';
import Register from './Signup';
import HomePage from "./Hompage";
import { useState } from "react";


function App() {
  const [mail, setMail]=useState([]);
  const sendMail = (mail)=>{
    setMail(...mail,mail);
  }
  const email = mail;


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login sendMail={sendMail} />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/dashboard" element={<HomePage mail={mail[0]}/>}></Route>
    </Routes>
  </BrowserRouter>

  


  );
}

export default App;