import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Signup from './Components/Signup/Signup';
import Projects from './Components/Contributors/Projects';
import Pdescript from './Components/Contributors/ProjectDescription/Pdescript';
import ProfileContrib from './Components/Profile/ProfileContrib';
import Contriblist from './Components/AdminsFol/Contriblist';
import Login from './Components/Login/Login';
import CreateProfile from './Components/Contributors/CreateProfile/CreateProfile';
import AdminProf from './Components/AdminsFol/CreateProf/AdminProf';
import RegisterProject from './Components/AdminsFol/RegisterProject/RegisterProject';

function App() {

  return (
    <>
    <BrowserRouter>

        <Routes>

          <Route path="/" element={<Main />} />
          <Route path="/signup" element={< Signup/>} />
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
          <Route path="/project-descript" element={<Pdescript/>}></Route>
          <Route path="/profile-contributor" element={<ProfileContrib/>}></Route>
          <Route path="/list-contrib" element={<Contriblist/>}></Route>
          <Route path="/create-profilec" element={<CreateProfile/>}></Route>
          <Route path="/create-profilea" element={<AdminProf/>}></Route>
          <Route path="/register-project" element={<RegisterProject/>}></Route>
          
        </Routes>
        
      <Footer/>

    </BrowserRouter>
    </>
  )
}

export default App
