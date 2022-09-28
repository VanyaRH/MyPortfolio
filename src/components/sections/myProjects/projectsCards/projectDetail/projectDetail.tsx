import projectItem from "../../projectsList/projectsList.module.css";
import {SliderComponent} from "../../../../common/slider/slider";
import {PrintText} from "../../../../common/text/printText";
import {Text} from "../../../../common/text/text";

interface IDetailProject{
    project: any
}
export const DetailProject = ({ project }: IDetailProject) => {

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
                    {project.roles.map((role: string, index: number) => {
                        return <Text customClass={projectItem.subTitle} text={role} key={index} />
                    })}
                </div>
                <div className={projectItem.myToolsWrap}>
                    <Text customClass={projectItem.title} text={'Tech. stack'} />
                    {project.stack.map((role: string, index: number) => {
                        return <Text customClass={projectItem.subTitle} text={role} key={index} />
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