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
    id: number,
    onOpen: (project: any) => void;
}
export const ProjectCard = ({ id, onOpen }: IProjectCard) => {
    const project = Projects[`project-${id}`];
    const [open, setOpen] = useState(false);

    if(!project){
        return <div></div>;
    }

    const showDetail = (e: any) => {
        e.preventDefault();
        e.stopPropagation();

        onOpen(project);
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
            </>
    )
}