import styles from './contacts.module.css';
import {Text} from "../../common/text/text";
import {ProjectsList} from "../myProjects/projectsList/projectsList";
import {Socials} from "./socials/socials";
import buttons from '../../../mainStyles/buttons.module.css'
import {ContactForm} from "./contactForm/contactForm";

export const Contacts = () => {
    return (
        <section id="contacts" className={`${styles.wrap}`}>
            <div className={styles.contactsWrap}>
                <Text customClass={styles.title} text={'MY CONTACTS'} />
            </div>
            <div className={`container ${styles.contactsInfoWrap}`}>
                <div className={styles.contactsInfo}>
                    <Text customClass={styles.title} text={'Contact information —'} />
                    <Text customClass={styles.subTitle} text={'Feel free to reach out to me any time. I prefer to talk over email, especially since we may be a few time zones away.\n'} />
                    <div className={styles.contactsList}>
                        <div className={styles.item}>
                            <Text customClass={styles.name} text={'E-mail:'} />
                            <Text customClass={styles.value} text={'wanja68@gmail.com'} />
                        </div>
                        <div className={styles.item}>
                            <Text customClass={styles.name} text={'Phone:'} />
                            <Text customClass={styles.value} text={'+380-517-512-348'} />
                        </div>
                    </div>
                    <div className={styles.socials}>
                        <Text customClass={styles.name} text={'Follow me —'} />
                        <Socials/>
                    </div>
                </div>
                <div className={styles.contactsForm}>
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}