import styles from './about-info.module.css';
import {Text} from "../../common/text/text";
import buttons from '../../../mainStyles/buttons.module.css';
import pcGif from '../../../assets/images/icons/pc.gif';

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
            <div className={styles.sectionContent}>
                <div className="flexRow">
                    <div className={styles.mainDescription}>
                        <p>Proin volutpat mauris ac pellentesque pharetra. Suspendisse congue elit vel odio suscipit,
                            sit amet tempor nisl imperdiet. Quisque ex justo, faucibus ut mi in, condimentum finibus
                            dolor. Aliquam vitae hendrerit dolor, eget imperdiet mauris. Maecenas et ante id ipsum
                            condimentum dictum et vel massa. Ut in imperdiet dolor, vel consectetur dui.</p>
                    </div>
                    <div>
                        <div className={styles.infoList}>
                            <ul>
                                <li>
                                    <span className={styles.title}>Age</span>
                                    <span className={styles.value}>32</span>
                                </li>

                                <li>
                                    <span className={styles.title}>Residence</span>
                                    <span className={styles.value}>USA</span>
                                </li>

                                <li>
                                    <span className={styles.title}>Address</span>
                                    <span className={styles.value}>88 Some Street, Some Town</span>
                                </li>

                                <li>
                                    <span className={styles.title}>e-mail</span>
                                    <span className={styles.value}>email@example.com</span>
                                </li>

                                <li>
                                    <span className={styles.title}>Phone</span>
                                    <span className={styles.value}>+0123 123 456 789</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="separator"></div>
                <div className="flexRow justify-center">
                    <div className={styles.blockTitleWrap}>
                        <div className={styles.blockTitle}>
                            <h3>What <span>I Do</span></h3>
                        </div>
                    </div>
                </div>

                <div className={`flexRow ${styles.innerSection}`}>
                        <div className={styles.inner}>
                            <div className={styles.innerList}>
                                <div className={styles.innerListBlock}>
                                    <div className={styles.ciIcon}>
                                        <img className={styles.gif} src={pcGif} alt=""/>
                                    </div>
                                    <div className={styles.ciText}>
                                        <h4>Copywriting</h4>
                                        <p>Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor
                                            bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non
                                            sodales.</p>
                                    </div>
                                </div>
                                <div className={styles.innerListBlock}>
                                    <div className={styles.ciIcon}>
                                        <img className={styles.gif} src={pcGif} alt=""/>
                                    </div>
                                    <div className={styles.ciText}>
                                        <h4>Management</h4>
                                        <p>Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor
                                            bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non
                                            sodales.</p>
                                    </div>
                                </div>
                                <div className={styles.innerListBlock}>
                                    <div className={styles.ciIcon}>
                                        <img className={styles.gif} src={pcGif} alt=""/>
                                    </div>
                                    <div className={styles.ciText}>
                                        <h4>Copywriting</h4>
                                        <p>Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor
                                            bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non
                                            sodales.</p>
                                    </div>
                                </div>
                                <div className={styles.innerListBlock}>
                                    <div className={styles.ciIcon}>
                                        <img className={styles.gif} src={pcGif} alt=""/>
                                    </div>
                                    <div className={styles.ciText}>
                                        <h4>Management</h4>
                                        <p>Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor
                                            bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non
                                            sodales.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className="white-space-30"></div>
            </div>
        </section>
    )
}