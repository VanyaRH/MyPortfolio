import styles from './logo.module.css';
import myLogo from '../../assets/images/icons/logo.svg';
import { Text } from '../common/text/text';
import React from "react";

interface IMyLogo {
    isFooter?: boolean;
}

export const MyLogoComponent = (props: IMyLogo) => {
    return (
        <div className={`${props.isFooter && styles.isFooter} ${styles.main}`}>
            <img src={myLogo} alt="Rosokha Ivan - portfolio"/>
            <div className={styles.mainText}>
                <p className={styles.name}>Ivan Rosokha</p>
                <Text customClass={styles.subTitle} text={'Front-end Developer & Mentor'}/>
            </div>
        </div>
    )
}

export const MyLogo = React.memo(MyLogoComponent);