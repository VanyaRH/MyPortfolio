import styles from './experienceCard.module.css';
import {Text} from "../../../../common/text/text";
import React, {useRef, useState} from "react";
import CountUp from 'react-countup';

export enum ExperienceCardTypes{
    count = 'count',
    period = 'period'
}

interface ExperienceCardI{
    title: string;
    value: number;
    type: ExperienceCardTypes;
}

export const ExperienceCard = (props: ExperienceCardI) => {

    return (
        <div className={styles.card}>
            <div className={styles.cardTitle}>
                { props.type === ExperienceCardTypes.count && <CountUp className={`${styles.customTitle} ${styles.isUpCount}`} enableScrollSpy={true} start={0} end={props.value} /> }
                { props.type === ExperienceCardTypes.period && <div className={` ${styles.periodTitle}`}>
                    <CountUp className={`${styles.customTitle}`} enableScrollSpy={true} start={0} end={props.value} />
                    <Text customClass={styles.customSubTitle} text={'years'} />
                </div> }
            </div>
            <div className={styles.cardSubTitle}>
                <Text text={props.title} />
            </div>
        </div>
    )
}