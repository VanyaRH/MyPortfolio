import styles from './projects-cards.module.css';
import {ProjectCard} from "./projectCard/projectCard";
import MediaQuery, { useMediaQuery } from 'react-responsive';
import {SliderTabletComponent} from "../../../common/slider/slider";
import {Projects} from "../../../../projects/projects";
import {log} from "util";
import {ProjectDialog} from "../../../common/modal/modal";
import {useState} from "react";
import {DetailProject} from "./projectDetail/projectDetail";

export const ProjectCards = () => {

    const [detailObject, setDetail] = useState({
        isOpen: false,
        project: null,
    })

    const setOpen = (open: boolean) => {
        setDetail({
            ...detailObject,
            isOpen: open
        })
    }

    const showDetail = (project: any) => {
        setDetail({
            ...detailObject,
            isOpen: true,
            project
        })
    }

    return (
        <div className={`container ${styles.wrap}`}>
            <MediaQuery maxWidth={1224}>
                <SliderTabletComponent>
                    {Object.values(Projects).map((project: any, index: number) => {
                        return <ProjectCard key={index} id={project.id} onOpen={(project: any) => { showDetail(project) }}/>
                    })}
                </ SliderTabletComponent>
            </MediaQuery>
            <MediaQuery minWidth={1225}>
                {Object.values(Projects).map((project: any, index: number) => {
                    return <ProjectCard key={index} id={project.id} onOpen={(project: any) => { showDetail(project) }}/>
                })}
            </MediaQuery>
            {detailObject.project && <ProjectDialog isOpen={detailObject.isOpen} children={<DetailProject project={detailObject.project}/>} onSetOpen={setOpen}/>}
        </div>
    )
}