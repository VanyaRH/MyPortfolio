import styles from './main-section.module.css';
import {Text} from "../../common/text/text";
import buttons from '../../../mainStyles/buttons.module.css';
import {Sections} from "../../../variables/sections";
import React, {ForwardedRef, Ref} from "react";
import {PrintText} from "../../common/text/printText";
import ScrollIntoView from "react-scroll-into-view";
import {Slide} from "react-awesome-reveal";


export const AboutTitle = () => {
    return (
        <section id="home" data-page={Sections.home} className={`container ${styles.container}`}>
            <Text customClass={styles.positionName} text={'Programmer'}/>
            <div className={styles.mainInfo}>
                <Slide direction="up" cascade={true}><p className={styles.mainTitle}>IVAN ROSOKHA</p></Slide>
                <h3 className={`${styles.positionSubName} ${styles.positionSubNameMargin}`}><PrintText delay={100} texts={['Front-end Developer and Mentor']}/></h3>
                <div className={`${styles.descriptionWrap} ${styles.description}`}>
                    <Text customClass={buttons.link} text={`A front-end developer who has been developing in this field for more than 3 years, who loves his work, is interested in his work and learns something new every day and improves his skills.`}/>
                </div>
                <div className={styles.buttons}>
                    <ScrollIntoView alignToTop={true} selector="#projects"><a className={`${buttons.btn} ${buttons.link} ${styles.animateLink}`} onClick={(e) => { e.preventDefault(); }} data-link-alt="Go to" href="#projects"><Text customClass={buttons.link} text={'View Projects'}/></a></ScrollIntoView>
                    <span className={styles.textSeparator}>or</span>
                    <ScrollIntoView alignToTop={true} selector="#aboutMe"><a className={`${buttons.btn} ${buttons.link} ${styles.animateLink}`} data-link-alt="Go to" href="#aboutMe" onClick={(e) => { e.preventDefault(); }}><Text customClass={buttons.link} text={'Read About Me'}/></a></ScrollIntoView>
                </div>
            </div>
        </section>
    )
};