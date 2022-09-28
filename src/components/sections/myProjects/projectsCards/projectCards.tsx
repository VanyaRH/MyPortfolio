import styles from './projects-cards.module.css';
import {ProjectCard} from "./projectCard/projectCard";
import MediaQuery, { useMediaQuery } from 'react-responsive';
import projectItem from "../projectsList/projectsList.module.css";
import project1 from "../../../../assets/images/projects/Macbook Pro.jpg";
import {SliderComponent, SliderTabletComponent} from "../../../common/slider/slider";

export const ProjectCards = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

    return (
        <div className={`container ${styles.wrap}`}>
            <MediaQuery maxWidth={1224}>
                <SliderTabletComponent>
                    <ProjectCard id={1}/>
                    <ProjectCard id={2}/>
                    <ProjectCard id={3}/>
                    <ProjectCard id={4}/>
                    <ProjectCard id={5}/>
                    <ProjectCard id={6}/>
                    <ProjectCard id={7}/>
                </ SliderTabletComponent>
            </MediaQuery>
            <MediaQuery minWidth={1225}>
                <ProjectCard id={1}/>
                <ProjectCard id={2}/>
                <ProjectCard id={3}/>
                <ProjectCard id={4}/>
                <ProjectCard id={5}/>
                <ProjectCard id={6}/>
                <ProjectCard id={7}/>
            </MediaQuery>
        </div>
    )
}