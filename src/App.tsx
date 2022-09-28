import React, {createRef, RefObject, useEffect, useState} from 'react';
import './App.css';
import {Header} from './components/header/header';
import {AboutTitle} from "./components/sections/aboutTitle/aboutTitle";
import {Loader} from './components/common/loader/loader';
import {AboutInfo} from './components/sections/aboutInfo/aboutInfo';
import {MySkills} from "./components/sections/mySkills/mySkills";
import {MyProjects} from "./components/sections/myProjects/myProjects";
import {Contacts} from "./components/sections/contacts/contacts";
import {Footer} from "./components/footer/footer";
import {Sections} from "./variables/sections";
import {MemoizedParticlesComponent, ParticlesComponent} from "./components/Particles/particles";
import {ReactComponent} from "*.svg";
import Cursor from "./components/common/cursor/cursor";
import MediaQuery from "react-responsive";

interface IContextState{
    activePage: Sections,
    openedMenu: boolean;
    setIsOpenMenu?: (isOpen: boolean) => void
}

const context = {
    activePage: Sections.home,
    openedMenu: false,
    setIsOpenMenu: (isOpen: boolean) => { }
}

export const GlobalContext = React.createContext(context);

function App() {
    const [showLoader, setLoader] = useState(true);
    const [mainContext, setContext] = useState<IContextState>({
        activePage: Sections.home,
        openedMenu: false
    });

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
                        const {page} = entry.target.dataset;
                        setContext({
                            ...context,
                            activePage: page
                        });
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

    const [open, setOpen] = useState(false);
    const handleClickOpen = (isOpen: boolean) => {
        setOpen(isOpen);
    };

    return (
        <GlobalContext.Provider value={{
            activePage: mainContext.activePage,
            openedMenu: false,
            setIsOpenMenu: (isOpen) => {
                setContext({
                    ...context,
                    openedMenu: isOpen
                })
            }
            }}>
            <div className="App">
                <div className="content">
                    <Loader show={showLoader}/>
                    <Header/>
                    <AboutTitle ref={newRef()}/>
                    <AboutInfo ref={newRef()}/>
                    <MySkills ref={newRef()}/>
                    <MyProjects separator={true} ref={newRef()}/>
                    <Contacts ref={newRef()} />
                    <Footer />
                    <MemoizedParticlesComponent />
                </div>
            </div>
            <MediaQuery minWidth={1225}>
                <Cursor/>
            </MediaQuery>
        </GlobalContext.Provider>
  );
}

export default App;

