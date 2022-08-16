import styles from './footer.module.css';
import {MyLogo} from "../myLogo/logo";
import {Socials} from "../sections/contacts/socials/socials";
import buttons from "../../mainStyles/buttons.module.css";
import {Text} from "../common/text/text";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.left}>
                <MyLogo />
                <div className={styles.info}>
                    © 2022-2022, Impulse Design. All Rights Reserved.
                </div>
            </div>
            <div className={styles.right}>
                <Socials />
                <button className={`${buttons.btn} ${buttons.download} ${buttons.downloadCV} ${buttons.black} ${styles.downloadBtn}`}><Text customClass={buttons.link} text={'Download CV'}/></button>
            </div>
        </footer>
    )
}