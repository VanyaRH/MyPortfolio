import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/header/header';
import {ParticlesComponent} from "./components/Particles/particles";
import {About} from "./components/sections/main/mainSection";
import { Loader } from './components/common/loader/loader';

function App() {
    let [showLoader, setLoader] = useState(true);

    setTimeout(() => { setLoader(false) }, 1000);

    return (
    <div className="App">
        <Loader show={showLoader}/>
        <Header/>
        <About/>
        <ParticlesComponent />
    </div>
  );
}

export default App;
