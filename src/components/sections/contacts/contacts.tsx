import styles from './contacts.module.css';
import {Animations, Text} from "../../common/text/text";
import {Socials} from "./socials/socials";
import {ContactForm} from "./contactForm/contactForm";
import React, {ForwardedRef} from "react";
import {Sections} from "../../../variables/sections";
import {Slide} from "react-awesome-reveal";
import Cursor from "../../common/cursor/cursor";
import MediaQuery from "react-responsive";

export const Contacts = React.forwardRef((props, ref:ForwardedRef<any>) => {
    return (
        <section ref={ref} data-page={Sections.contacts} id="contacts" className={`${styles.wrap}`}>
            <div className={styles.contactsWrap}>
                <Text animation={Animations.SlideTop} customClass={styles.title} text={'MY CONTACTS'} />
            </div>
            <div className={`container ${styles.contactsInfoWrap}`}>
                <div className={styles.contactsInfo}>
                    <Text animation={Animations.SlideLeft} customClass={styles.title} text={'Contact information —'} />
                    <Text animation={Animations.SlideLeft} customClass={styles.subTitle} text={'Feel free to reach out to me any time. I prefer to talk over email, especially since we may be a few time zones away.\n'} />
                    <div className={styles.contactsList}>
                        <div className={styles.item}>
                            <Text customClass={styles.name} text={'E-mail:'} />
                            <Text customClass={styles.value} text={'rosokha.dev@gmail.com'} />
                        </div>
                        <div className={styles.item}>
                            <Text customClass={styles.name} text={'Telegram:'} />
                            <Text customClass={styles.value} text={'@vanyarosokha'} />
                        </div>
                    </div>
                    <div className={styles.socials}>
                        <Text customClass={styles.name} text={'Follow me —'} />
                        <Socials/>
                    </div>
                </div>
                <MediaQuery minWidth={1225}>
                    <Slide className={styles.contactsForm} triggerOnce={true} direction="right" cascade={true}>
                        <ContactForm />
                    </Slide>
                </MediaQuery>
                <MediaQuery maxWidth={1225}>
                    <div className={styles.contactsForm}>
                        <ContactForm />
                    </div>
                </MediaQuery>

            </div>
        </section>
    )
})