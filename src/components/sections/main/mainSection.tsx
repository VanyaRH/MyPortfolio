import styles from './main-section.module.css';
import {Text} from "../../common/text/text";
import buttons from '../../../mainStyles/buttons.module.css';

export const About = () => {
    return (
        <section className={styles.container}>
            <Text customClass={styles.positionName} text={'Programmer'}/>
            <div className={styles.mainInfo}>
                <p className={styles.mainTitle}>IVAN ROSOKHA</p>
                <h3 className={`${styles.positionSubName} ${styles.positionSubNameMargin}`}><Text customClass={buttons.positionSubName} text={'Front-end Developer & Mentor'}/></h3>
                <div className={`${styles.descriptionWrap} ${styles.description}`}>
                    <Text customClass={buttons.link} text={`In pretium luctus nunc, sed vehicula nisi vulputate condimentum.
                    Maecenas molestie erat ut aliquet tincidunt. Nullam mauris lorem, tristique non dapibus vel, congue ut est.
                    Nunc ac sollicitudin tellus.
                    Nam eget purus nec massa efficitur ultrices in sit amet ipsum. Praesent mi erat, scelerisque sed tempus`}/>
                </div>
                <div className={styles.buttons}>
                    <a className={`${buttons.btn} ${buttons.link} ${styles.animateLink}`} data-link-alt="Go to" href="#"><Text customClass={buttons.link} text={'View Projects'}/></a>
                    <span className={styles.textSeparator}>or</span>
                    <a className={`${buttons.btn} ${buttons.link} ${styles.animateLink}`} data-link-alt="Go to" href="#"><Text customClass={buttons.link} text={'Read About Me'}/></a>
                </div>
            </div>
        </section>
    )
}