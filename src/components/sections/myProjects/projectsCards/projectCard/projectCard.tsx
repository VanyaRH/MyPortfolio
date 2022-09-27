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
                                    <a href="">{project.type}</a>
                                </div>
                                <div className="meta">
                                </div>
                            </div>
                            <h4 className={styles.title}><a href="">{project.previewTitle}</a>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            <ProjectDialog isOpen={open} children={<DetailProject project={project}/>} onSetOpen={setOpen}/></>
    )
}

interface IDetailProject{
    project: any
}
export const DetailProject = ({ project }: IDetailProject) => {
    console.log(project);
    return (<div className={`${projectItem.projectItem}`}>
        <SliderComponent>
            {project.images.map((img: any, index: number) => {
                return <div key={index} className={projectItem.preview}>
                    <img src={img} alt=""/>
                </div> })}
        </ SliderComponent>
        <div className={projectItem.info}>
            <PrintText customClass={projectItem.projectName} showCursor={false} delay={70} texts={[project.name]} />
            <Text customClass={projectItem.projectTitle} text={project.title} />
            <Text customClass={projectItem.projectDescription} text={project.description} />

            <div className={projectItem.myInfo}>
                <div className={projectItem.myRoleWrap}>
                    <Text customClass={projectItem.title} text={'MY ROLE'} />
                    {project.roles.map((role: string) => {
                        return <Text customClass={projectItem.subTitle} text={role} />
                    })}
                </div>
                <div className={projectItem.myToolsWrap}>
                    <Text customClass={projectItem.title} text={'Tech. stack'} />
                    {project.stack.map((role: string) => {
                        return <Text customClass={projectItem.subTitle} text={role} />
                    })}
                </div>
            </div>
            {project.link && <div className={projectItem.previewWrap}>
                <Text customClass={projectItem.previewText} text={'Preview:'} />
                &nbsp;
                <a href={project.link} className={projectItem.link} target="_blank">{project.name}</a>
            </div>}
        </div>
    </div>)
}