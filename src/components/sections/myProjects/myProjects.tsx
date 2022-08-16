import styles from './myProjects.module.css';
import {Text} from "../../common/text/text";
import project1 from '../../../assets/images/projects/Macbook Pro.jpg';
import {SliderComponent} from "../../common/slider/slider";
import {ProjectsList} from "./projectsList/projectsList";

interface IMyProjects{
    separator?: boolean;
}

export const MyProjects = (props: IMyProjects) => {
    return (
        <section id="projects" className={`${styles.wrap}`}>
            {props?.separator && <div className={styles.separatorWrap}>
                <Text customClass={styles.separator} text={'Let’s work together'} />
            </div>}

            <div className={styles.projectsWrap}>
                <Text customClass={styles.title} text={'MY PROJECTS'} />
            </div>
            <ProjectsList />
        </section>
    )
}