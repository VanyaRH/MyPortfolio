import styles from './projectsList.module.css';
import {SliderComponent} from "../../../common/slider/slider";
import project1 from "../../../../assets/images/projects/Macbook Pro.jpg";
import {Text} from "../../../common/text/text";
import {ElementRef, useEffect, useMemo, useRef, useState} from "react";

export const ProjectsList = () => {
    let zSpacing = -1000,
        lastPos = zSpacing / 5,
        $frames = document.getElementsByClassName('frame'),
        frames = Array.from($frames),
        zVals: number[] = [];

    const wrap = useRef(null);

    if(wrap?.current){
        // @ts-ignore
        let topOffset = wrap.current.scrollTop;
        console.log(topOffset);
        // @ts-ignore
        wrap.current.onscroll = (e: Event) => {
            e.preventDefault();
            e.stopPropagation();
            // @ts-ignore
            let top =  wrap.current.scrollTop,
                 delta = lastPos - top;
            lastPos = top;
            console.log(frames);
            frames.forEach(function(n, i) {
                let topSpasing = 200 * i;
                zVals.push((i * zSpacing) + zSpacing)
                zVals[i] += delta * -5.5
                let frame = frames[i],
                    transform = `translateZ(${zVals[i]}px)`,
                    opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0
                frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}; top: ${topSpasing}px`)
            })
        }
    }

    return (<div ref={wrap} className={styles.projectsListWrap}>
        <div className={styles.projectsList}>
            <div className={`frame ${styles.projectItem}`}>
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
            <div className={`frame ${styles.projectItem}`}>
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
            <div className={`frame ${styles.projectItem}`}>
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
            <div className={`frame ${styles.projectItem}`}>
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
    </div>)
}


