import styles from './card.module.css';
import pcGif from "../../../../../assets/images/icons/pc.gif";
import {Text} from "../../../../common/text/text";
import {useState} from "react";
import {Slide} from "react-awesome-reveal";
import MediaQuery from "react-responsive";

interface ICard{
    icon: any;
    title: string;
    description: string;
}

export const Card = (props: ICard) => {
    const [isShown, setIsShown] = useState(false);

    return (
        <>
            <MediaQuery minWidth={1225}>
                <Slide triggerOnce={true} className={styles.innerListBlock} direction="left" duration={1000}>
                    <div className={styles.innerListBlock}
                         onMouseEnter={() => setIsShown(true)}
                         onMouseLeave={() => setIsShown(false)}
                    >
                        <div className={styles.ciIcon}>
                            <img className={styles.gif} src={props.icon} alt=""/>
                        </div>
                        <div className={styles.ciText}>
                            <h4><Text customClass={styles.aboutTitle} text={props.title}/></h4>
                            <p className={styles.descriptionWrap}><Text customClass={styles.aboutTitle} text={props.description}/></p>
                        </div>
                    </div></Slide>
            </MediaQuery>
            <MediaQuery maxWidth={1225}>
                <div className={styles.innerListBlock}
                     onMouseEnter={() => setIsShown(true)}
                     onMouseLeave={() => setIsShown(false)}
                >
                    <div className={styles.ciIcon}>
                        <img className={styles.gif} src={props.icon} alt=""/>
                    </div>
                    <div className={styles.ciText}>
                        <h4><Text customClass={styles.aboutTitle} text={props.title}/></h4>
                        <p className={styles.descriptionWrap}><Text customClass={styles.aboutTitle} text={props.description}/></p>
                    </div>
                </div>
            </MediaQuery>
        </>

    )
}