import styles from './menu.module.css';
import {MyLogo} from "../../myLogo/logo";
import {Animations, Text} from "../../common/text/text";
import {Sections} from "../../../variables/sections";
import {useContext, useEffect, useRef} from "react";
import ScrollIntoView from 'react-scroll-into-view'
import {GlobalContext} from '../../../App';
import {Slide} from "react-awesome-reveal";

interface IMenu{
    open: boolean;
    onClick: () => void
}

export const Menu = ({ open, onClick }: IMenu) => {
    const context = useContext(GlobalContext);
    const activeSectionRef = useRef<HTMLDivElement>(null);


    const handleActive = () => {
        onClick();
    }

    const setActiveSectionName = (name: Sections) => {
        if(activeSectionRef && activeSectionRef?.current){
            const paragraf = activeSectionRef.current.querySelector('p');
            if(paragraf) paragraf.innerHTML = name;
        }
    }

    const setActiveSection = (name: Sections) => {
        setActiveSectionName(name);
    }

    useEffect(() => {
        context.setIsOpenMenu(open);
    }, [open])

    setActiveSectionName(Sections.menu);

    return (
        <div className={`${styles.menu} ${open && styles.open}`} >
            <div className={styles.header}>
                <MyLogo />
            </div>
            <div className={styles.content}>
                <div className={styles.sectionsList}>
                    <Text customClass={styles.title} text={'Menu'} />
                    <ul className={styles.list}>
                        <li onMouseOver={setActiveSection.bind(this, (Sections.home))} onClick={handleActive} className={`${styles.item} `}><ScrollIntoView onClick={(ev: MouseEvent) => { console.log(ev) }} alignToTop={true} selector="#home"><Slide direction="left" duration={500}><Text animation={Animations.SlideLeft} text={Sections.home} /></Slide></ScrollIntoView></li>
                        <li onMouseOver={setActiveSection.bind(this, (Sections.aboutMe))} onClick={handleActive} className={`${styles.item} `}><ScrollIntoView alignToTop={true} selector="#aboutMe"><Slide direction="left" duration={600}><Text text={Sections.aboutMe} /></Slide></ScrollIntoView></li>
                        <li onMouseOver={setActiveSection.bind(this, (Sections.skills))} onClick={handleActive} className={`${styles.item} `}><ScrollIntoView alignToTop={true} selector="#skills"><Slide direction="left" duration={700}><Text text={Sections.skills} /></Slide></ScrollIntoView></li>
                        <li onMouseOver={setActiveSection.bind(this, (Sections.projects))} onClick={handleActive} className={`${styles.item} `}><ScrollIntoView alignToTop={true} selector="#projects"><Slide direction="left" duration={800}><Text text={Sections.projects} /></Slide></ScrollIntoView></li>
                        <li onMouseOver={setActiveSection.bind(this, (Sections.contacts))} onClick={handleActive} className={`${styles.item} `}><ScrollIntoView alignToTop={true} selector="#contacts"><Slide direction="left" duration={900}><Text text={Sections.contacts} /></Slide></ScrollIntoView></li>
                    </ul>
                </div>
                <div ref={activeSectionRef} className={styles.activeSectioWrap}>
                        <Slide className={styles.activeSection} direction="down" duration={600}>
                            <p ></p>
                        </Slide>
                </div>
            </div>
        </div>
    )
}