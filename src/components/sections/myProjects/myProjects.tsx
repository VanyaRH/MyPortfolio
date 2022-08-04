import styles from './myProjects.module.css';
import {Text} from "../../common/text/text";
import project1 from '../../../assets/images/projects/Macbook Pro.jpg';
import {SliderComponent} from "../../common/slider/slider";

interface IMyProjects{
    separator?: boolean;
}

export const MyProjects = (props: IMyProjects) => {
    return (
        <section className={`container ${styles.wrap}`}>
            {props?.separator && <div className={styles.separatorWrap}>
                <Text customClass={styles.separator} text={'Let’s work together'} />
            </div>}

            <div className={styles.projectsWrap}>
                <Text customClass={styles.title} text={'MY PROJECTS'} />
            </div>

            <div className={styles.projectsList}>
                <div className={styles.projectItem}>
                    <SliderComponent>
                        <div className={styles.preview}>
                            <img src={project1} alt=""/>
                        </div>
                        <div className={styles.preview}>
                            <img src={project1} alt=""/>
                        </div>
                    </ SliderComponent>
                    <div className={styles.info}>
                        <Text customClass={styles.projectName} text={'HUINJA JAPONSKA'} />
                        <Text customClass={styles.projectTitle} text={'My business card site where you will learn about my capabilities'} />
                        <Text customClass={styles.projectDescription} text={'Phasellus eu nulla vel est interdum tempor eget id est. Aliquam placerat turpis nec enim euismod, eget porttitor erat feugiat. Duis ut ligula tellus. Donec ornare erat quis porta mattis. Ut nec eros mi. Pellentesque vitae quam tellus. Quisque luctus felis sit amet fringilla commodo. Nullam lacinia mauris non blandit posuere. Proin eget interdum dolor. Phasellus ut dui'} />
                        <div className={styles.myInfo}>
                            <div className={styles.myRoleWrap}>
                                <Text customClass={styles.title} text={'MY ROLE'} />
                                <Text customClass={styles.subTitle} text={'Development'} />
                                <Text customClass={styles.subTitle} text={'Optimization'} />
                                <Text customClass={styles.subTitle} text={'Support'} />
                            </div>
                            <div className={styles.myToolsWrap}>
                                <Text customClass={styles.title} text={'MY TOOLS'} />
                                <Text customClass={styles.subTitle} text={'Figma'} />
                                <Text customClass={styles.subTitle} text={'Adobe Photoshop'} />
                                <Text customClass={styles.subTitle} text={'Visual Studio'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}