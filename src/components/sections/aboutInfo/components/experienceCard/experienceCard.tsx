import styles from './experienceCard.module.css';
import {Text} from "../../../../common/text/text";
import React, {useRef, useState} from "react";

export enum ExperienceCardTypes{
    count = 'count',
    period = 'period'
}

interface ExperienceCardI{
    title: string;
    value: string;
    type: ExperienceCardTypes;
}

export const ExperienceCard = (props: ExperienceCardI) => {

    /*const [isFirst, setFirst] = useState(true);
    const displayed = {};

    function scrollTracking(entries: any) {
        for (const entry of entries) {
            // @ts-ignore
            displayed[entry.target.id] = entry.intersectionRatio >= 0.2;
        }

        window.document.textContent = Object
            .entries(displayed)
            .filter(([id, inViewport]) => inViewport)
            .map(([id, inViewport]) => id)
            .join('\n');
        setFirst(false);
        console.log(`displayed`, displayed);
    }

    const observer = new IntersectionObserver(scrollTracking, {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
    });

    const myRef = useRef(null);
    if(myRef.current){
        // @ts-ignore
        observer.observe(myRef.current);
    }*/
    /*ref={myRef}*/
    return (
        <div  className={styles.card}>
            <div className={styles.cardTitle}>
                { props.type === ExperienceCardTypes.count && <Text customClass={styles.customTitle} text={props.value} /> }
                { props.type === ExperienceCardTypes.period && <div className={` ${styles.periodTitle}`}>
                    <Text customClass={styles.customTitle} text={props.value} />
                    <Text customClass={styles.customSubTitle} text={'years'} />
                </div> }
            </div>
            <div className={styles.cardSubTitle}>
                <Text text={props.title} />
            </div>
        </div>
    )
}