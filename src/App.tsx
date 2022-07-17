import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/header/header';
import {ParticlesComponent} from "./components/Particles/particles";
import {AboutTitle} from "./components/sections/aboutTitle/aboutTitle";
import { Loader } from './components/common/loader/loader';
import { AboutInfo } from './components/sections/aboutInfo/aboutInfo';

function App() {
    let [showLoader, setLoader] = useState(true);

    setTimeout(() => { setLoader(false) }, 1000);

    return (
    <div className="App">
        <Loader show={showLoader}/>
        <Header/>
        <AboutTitle/>
        <AboutInfo/>
        {/*<ParticlesComponent />*/}
    </div>
  );
}

export default App;
