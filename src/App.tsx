import React, {createRef, RefObject, useEffect, useState} from 'react';
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
import {Footer} from "./components/footer/footer";
import {Sections} from "./variables/sections";

const pages = {
    active: Sections.home
}

export const PagesContext = React.createContext(pages.active);

function App() {
    const [showLoader, setLoader] = useState(true);
    const [page, setPage] = useState(Sections.home);

    setTimeout(() => { setLoader(false) }, 1000);

    const refs: React.RefObject<unknown>[] = [];

    const newRef = () => {
        const ref = createRef();

        refs.push(ref);

        return ref;
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                for (let entry of entries) {
                    if (entry.isIntersecting) {
                        // @ts-ignore
                        setPage(entry.target.dataset.page);
                    }
                }
            },
            {
                threshold: 0.5
            }
        );

        refs.forEach((ref:RefObject<any>) =>
            observer.observe(ref.current)
        );

        return () => {
            refs.forEach((ref:RefObject<any>) => ref.current && observer.unobserve(ref.current));
        };
    }, []);

    return (
        <PagesContext.Provider value={page}>
            <div className="App">
                <Loader show={showLoader}/>
                <Header/>
                <AboutTitle ref={newRef()}/>
                <AboutInfo ref={newRef()}/>
                <MySkills ref={newRef()}/>
                <MyProjects separator={true} ref={newRef()}/>
                <Contacts ref={newRef()} />
                <Footer />
                {/*<ParticlesComponent />*/}
            </div>
        </PagesContext.Provider>

  );
}

export default App;
