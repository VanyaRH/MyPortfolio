import styles from './about-info.module.css';
import {Text} from "../../common/text/text";
import buttons from '../../../mainStyles/buttons.module.css';

export const AboutInfo = () => {
    return (
        <section className={`container ${styles.container}`}>
            <div className={styles.aboutSection}>
                <div className={styles.aboutTitleWrap}>
                    <Text customClass={styles.aboutTitle} text={'A FEW WORDS ABOUT ME'}/>
                    <Text customClass={styles.aboutSubTitle} text={'My business card site where you will learn about my capabilities'}/>
                </div>
                <div className={styles.myCVWrap}>

                    <button className={`${buttons.btn} ${buttons.download} ${buttons.downloadCV}`}><Text customClass={buttons.link} text={'Download CV'}/></button>
                    <div className={styles.CVInfo}>
                        <Text customClass={styles.CVInfoTitle} text={'We are a web studio, which is primarily concerned with the result of work, the success of the site and the feedback of our customers - a financial reward for their work.'}/>
                    </div>
                </div>
            </div>
        </section>
    )
}