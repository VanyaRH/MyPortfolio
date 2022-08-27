import styles from './menu.module.css';
import {MyLogo} from "../../myLogo/logo";
import {Text} from "../../common/text/text";
import {Sections} from "../../../variables/sections";
import {useContext, useEffect, useState} from "react";
import ScrollIntoView from 'react-scroll-into-view'
import { GlobalContext } from '../../../App';

interface IMenu{
    open: boolean;
    activeSection: Sections;
    onClick: (name: Sections) => void
}

export const Menu = (props: IMenu) => {
    const context = useContext(GlobalContext);

    const [activeSection, setActive] = useState(context.activePage);

    const handleActive = (name: Sections) => {
        if(activeSection === name) return;
        setActive(name);
        props.onClick(name);
    }

    useEffect(() => {
        if(props.open){
            if(activeSection !== context.activePage){
                setActive(context.activePage);
            }
        }
    }, [activeSection])

    useEffect(() => {
        context.setIsOpenMenu(props.open);
    }, [props.open])

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