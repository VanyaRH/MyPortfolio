import styles from './myProjects.module.css';
import {Animations, Text} from "../../common/text/text";
import React, {ForwardedRef} from "react";
import {Sections} from "../../../variables/sections";
import {ProjectCards} from "./projectsCards/projectCards";

interface IMyProjects{
    separator?: boolean;
}

export const MyProjects = React.forwardRef((props: IMyProjects, ref:ForwardedRef<any>) => {
    return (
        <section ref={ref} data-page={Sections.projects} id="projects" className={`${styles.wrap}`}>
            {props?.separator && <div className={styles.separatorWrap}>
                <Text animation={Animations.SlideTop} customClass={styles.separator} text={'Let’s work together'} />
            </div>}

            <div className={styles.projectsWrap}>
                <Text customClass={styles.title} text={'MY PROJECTS'} />
            </div>
            <ProjectCards/>
        </section>
    )
})