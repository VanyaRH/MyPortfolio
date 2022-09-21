import styles from './project-card.module.css';
import {Projects} from "../../../../../projects/projects";
import {useState} from "react";
import {SliderComponent} from "../../../../common/slider/slider";
import project1 from "../../../../../assets/images/projects/Macbook Pro.jpg";
import {Text} from "../../../../common/text/text";
import projectItem from '../../projectsList/projectsList.module.css'
import { ProjectDialog } from "../../../../common/modal/modal";
import {PrintText} from "../../../../common/text/printText";

interface IProjectCard{
    id: number
}
export const ProjectCard = ({ id }: IProjectCard) => {
    const project = Projects[`project-${id}`];
    const [open, setOpen] = useState(false);

    if(!project){
        return <div></div>;
    }

    const showDetail = () => {
        setOpen(true);
    }

    return (
        <>
            <div className={`${styles.card} project-card`} onClick={showDetail}>
                <div className={styles.rnPortfolio}>
                    <div className="inner">
                        <div className={styles.thumbnail}>
                            <img src={project.images[0]} alt=""/>
                        </div>
                        <div>
                            <div className={styles.category}>
                                <div className={styles.categoryList}>
                                    <a href="">Application</a>
                                </div>
                                <div className="meta">
                                </div>
                            </div>
                            <h4 className={styles.title}><a href="">Mobile app landing
                                design &amp; app
                                maintain<i className="feather-arrow-up-right"></i></a>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            <ProjectDialog isOpen={open} children={<DetailProject/>} onSetOpen={setOpen}/></>
    )
}

export const DetailProject = () => {
    return (<div className={`${projectItem.projectItem}`}>
        <SliderComponent>
            <div className={projectItem.preview}>
                <img src={project1} alt=""/>
            </div>
            <div className={projectItem.preview}>
                <img src={project1} alt=""/>
            </div>
        </ SliderComponent>
        <div className={projectItem.info}>
            <PrintText customClass={projectItem.projectName} showCursor={false} delay={70} texts={['HUINJA JAPONSKA']} />
            <Text customClass={projectItem.projectTitle} text={'My business card site where you will learn about my capabilities'} />
            <Text customClass={projectItem.projectDescription} text={'Phasellus eu nulla vel est interdum tempor eget id est. Aliquam placerat turpis nec enim euismod, eget porttitor erat feugiat. Duis ut ligula tellus. Donec ornare erat quis porta mattis. Ut nec eros mi. Pellentesque vitae quam tellus. Quisque luctus felis sit amet fringilla commodo. Nullam lacinia mauris non blandit posuere. Proin eget interdum dolor. Phasellus ut dui'} />
            <div className={projectItem.myInfo}>
                <div className={projectItem.myRoleWrap}>
                    <Text customClass={projectItem.title} text={'MY ROLE'} />
                    <Text customClass={projectItem.subTitle} text={'Development'} />
                    <Text customClass={projectItem.subTitle} text={'Optimization'} />
                    <Text customClass={projectItem.subTitle} text={'Support'} />
                </div>
                <div className={projectItem.myToolsWrap}>
                    <Text customClass={projectItem.title} text={'MY TOOLS'} />
                    <Text customClass={projectItem.subTitle} text={'Figma'} />
                    <Text customClass={projectItem.subTitle} text={'Adobe Photoshop'} />
                    <Text customClass={projectItem.subTitle} text={'Visual Studio'} />
                </div>
            </div>
        </div>
    </div>)
}