import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/header/header';
import {ParticlesComponent} from "./components/Particles/particles";
import {AboutTitle} from "./components/sections/aboutTitle/aboutTitle";
import { Loader } from './components/common/loader/loader';
import { AboutInfo } from './components/sections/aboutInfo/aboutInfo';
import {MySkills} from "./components/sections/mySkills/mySkills";
import {MyProjects} from "./components/sections/myProjects/myProjects";
import {Contacts} from "./components/sections/contacts/contacts";

function App() {
    let [showLoader, setLoader] = useState(true);

    setTimeout(() => { setLoader(false) }, 1000);

    return (
    <div className="App">
        <Loader show={showLoader}/>
        <Header/>
        <AboutTitle/>
        <AboutInfo/>
        <MySkills/>
        <MyProjects separator={true}/>
        <Contacts />
        {/*<ParticlesComponent />*/}
    </div>
  );
}

export default App;
