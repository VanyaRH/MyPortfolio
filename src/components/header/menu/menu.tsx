import styles from './menu.module.css';
import {MyLogo} from "../../myLogo/logo";
import {Text} from "../../common/text/text";
import {Sections} from "../../../variables/sections";
import {useState} from "react";
import ScrollIntoView from 'react-scroll-into-view'

interface IMenu{
    open: boolean;
    activeSection: Sections;
    onClick: (name: Sections) => void
}

export const Menu = (props: IMenu) => {
    const [activeSection, setActive] = useState(props.activeSection);

    const handleActive = (name: Sections) => {
        if(activeSection === name) return;
        setActive(name);
        props.onClick(name);
    }

    const isInViewport = (el: any) => {
        const rect = el.getBoundingClientRect();
        console.log(`xzcz`, el, rect.top, rect.bottom)
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    const getActiveSection = () => {
        let els = {
            home: document.getElementById('home'),
            aboutMe: document.getElementById('aboutMe'),
            skills: document.getElementById('skills'),
            projects: document.getElementById('projects'),
            contacts: document.getElementById('contacts'),
        }

        if(els.home && isInViewport(els.home) && activeSection !== Sections.home){
            setActive(Sections.home);
        }

        if(els.aboutMe && isInViewport(els.aboutMe) && activeSection !== Sections.aboutMe){
            setActive(Sections.aboutMe);
        }

        if(els.skills && isInViewport(els.skills) && activeSection !== Sections.skills){
            setActive(Sections.skills);
        }

        if(els.projects && isInViewport(els.projects) && activeSection !== Sections.projects){
            setActive(Sections.projects);
        }

        if(els.contacts && isInViewport(els.contacts) && activeSection !== Sections.contacts){
            setActive(Sections.contacts);
        }
    }

    if(props.open){
        getActiveSection();
    }

    return (
        <div className={`${styles.menu} ${props.open && styles.open}`} >
            <div className={styles.header}>
                <MyLogo />
            </div>
            <div className={styles.content}>
                <div className={styles.sectionsList}>
                    <Text customClass={styles.title} text={'Menu'} />
                    <ul className={styles.list}>
                        <li onClick={handleActive.bind(this, (Sections.home))} className={`${styles.item} ${activeSection === Sections.home && styles.active}`}><ScrollIntoView onClick={(ev: MouseEvent) => { console.log(ev) }} alignToTop={true} selector="#home"><Text text={Sections.home} /></ScrollIntoView></li>
                        <li onClick={handleActive.bind(this, (Sections.aboutMe))} className={`${styles.item} ${activeSection === Sections.aboutMe && styles.active}`}><ScrollIntoView alignToTop={true} selector="#aboutMe"><Text text={Sections.aboutMe} /></ScrollIntoView></li>
                        <li onClick={handleActive.bind(this, (Sections.skills))} className={`${styles.item} ${activeSection === Sections.skills && styles.active}`}><ScrollIntoView alignToTop={true} selector="#skills"><Text text={Sections.skills} /></ScrollIntoView></li>
                        <li onClick={handleActive.bind(this, (Sections.projects))} className={`${styles.item} ${activeSection === Sections.projects && styles.active}`}><ScrollIntoView alignToTop={true} selector="#projects"><Text text={Sections.projects} /></ScrollIntoView></li>
                        <li onClick={handleActive.bind(this, (Sections.contacts))} className={`${styles.item} ${activeSection === Sections.contacts && styles.active}`}><ScrollIntoView alignToTop={true} selector="#contacts"><Text text={Sections.contacts} /></ScrollIntoView></li>
                    </ul>
                </div>
                <div className={styles.activeSectioWrap}>
                    <div className={styles.activeSection}>
                        {activeSection}
                    </div>
                </div>
            </div>
        </div>
    )
}