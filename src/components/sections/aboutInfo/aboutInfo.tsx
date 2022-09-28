import styles from './about-info.module.css';
import {Animations, Text} from "../../common/text/text";
import buttons from '../../../mainStyles/buttons.module.css';
import designingGif from '../../../assets/images/icons/designing.gif';
import developmentGif from '../../../assets/images/icons/development.gif';
import optimizationGif from '../../../assets/images/icons/optimization.gif';
import supportGif from '../../../assets/images/icons/support.gif';
import avatar from '../../../assets/images/avatar.jpg';
import {Card} from "./components/card/card";
import {ExperienceCard, ExperienceCardTypes} from "./components/experienceCard/experienceCard";
import {Sections} from "../../../variables/sections";
import React, {ForwardedRef} from "react";
import {Slide} from "react-awesome-reveal";
import { showCV } from '../../../helpers/showCV';
import {MemoizedParticlesComponent} from "../../Particles/particles";
import MediaQuery from "react-responsive";

export const AboutInfo = React.forwardRef((props, ref:ForwardedRef<any>) => {
    return (
        <section ref={ref} data-page={Sections.aboutMe} id="aboutMe" className={`container ${styles.container}`}>
            <div className={styles.aboutSection}>
                <div className={styles.avatarWrap}>
                    <Slide triggerOnce={true} cascade={true} direction="left" duration={1000}><img src={avatar} alt="Ivan Rosokha"/></Slide>
                </div>
                <div className={styles.aboutTitleWrap}>
                    <Text animation={Animations.SlideTop} customClass={styles.aboutTitle} text={'A FEW WORDS ABOUT ME'}/>
                    <Text animation={Animations.SlideTop} customClass={styles.aboutSubTitle} text={'My business card site where you will learn about my capabilities'}/>
                </div>
                <div className={styles.myCVWrap}>

                    <button className={`${buttons.btn} ${buttons.download} ${buttons.downloadCV}`} onClick={showCV}><Text customClass={buttons.link} text={'Open CV'}/></button>
                    <div className={styles.CVInfo}>
                        <Text animation={Animations.SlideTop} customClass={styles.CVInfoTitle} text={'I am a web developer for whom the result of the work, the success of the project and customer feedback are important first of all.'}/>
                    </div>
                </div>
            </div>
            <div className={styles.sectionContent}>
                <div className={`flexRow ${styles.contentInfo}`}>
                    <div className={styles.mainDescription}>
                        <Slide triggerOnce={true} cascade={true} direction="left" duration={800}>
                        <p><Text text={`Already in the third year of study at the university, I became interested in web development, began to study more deeply all the technologies available at that time, after a year of active study, I began to perform work to order, after a while I decided to try to find a place in the company, after months of searching, I succeeded , from that time I worked not only for myself, there I got the opportunity to work on different types of projects, with different technologies, I constantly learned and practiced something new and I continue to do this until now.`}/></p>
                        </Slide>
                    </div>
                    <div>
                        <div className={styles.infoList}>
                            <Slide triggerOnce={true} cascade={true} direction="up" duration={400}>
                                <ul>
                                    <li>
                                        <span className={styles.title}>Age</span>
                                        <span className={styles.value}>24</span>
                                    </li>

                                    <li>
                                        <span className={styles.title}>Residence</span>
                                        <span className={styles.value}>Ukraine</span>
                                    </li>

                                    <li>
                                        <span className={styles.title}>Address</span>
                                        <span className={styles.value}>Uzhhorod</span>
                                    </li>

                                    <li>
                                        <span className={styles.title}>E-mail</span>
                                        <span className={styles.value}>rosokha.dev@gmail.com</span>
                                    </li>

                                    <li>
                                        <span className={styles.title}>Telegram</span>
                                        <span className={styles.value}>@vanyarosokha</span>
                                    </li>
                                </ul>
                            </Slide>
                        </div>
                    </div>
                </div>
                <div className="separator"></div>
                <div className="flexRow justify-center">
                    <div className={styles.blockTitleWrap}>
                        <Slide triggerOnce={true} className={styles.blockTitle} cascade={true} direction="up" duration={400}>
                            <h3>What <span>I Do</span></h3>
                        </Slide>
                    </div>
                </div>

                <div className={`flexRow ${styles.innerSection}`}>
                    <MediaQuery minWidth={1225}>
                        <Slide triggerOnce={true} className={styles.inner} direction="left" duration={500}>
                            <div className={styles.innerList}>
                                <Card icon={designingGif} title={'Designing'} description={`Designing the main work and functioning of the project according to the given technical task. Division into stages. A plan for full implementation, taking into account possible complications and shortcomings that will require more time.`} />
                                <Card icon={developmentGif} title={'Development'} description={`Development of the project in compliance with all the requirements and rules specified in the previously designed plan. Completion of all tasks in a given time.`} />
                                <Card icon={optimizationGif} title={'Optimization'} description={`Optimization of the product after its full execution and during its execution. Replacing difficult methods and algorithms with simpler ones, but with the same performance.`} />
                                <Card icon={supportGif} title={'Support'} description={`Project support after its release. Optimization of already written code and addition of new functionality when necessary.`} />
                            </div>
                        </Slide>
                    </MediaQuery>
                    <MediaQuery maxWidth={1225}>
                        <div className={styles.inner}>
                            <div className={styles.innerList}>
                                <Card icon={designingGif} title={'Designing'} description={`Designing the main work and functioning of the project according to the given technical task. Division into stages. A plan for full implementation, taking into account possible complications and shortcomings that will require more time.`} />
                                <Card icon={developmentGif} title={'Development'} description={`Development of the project in compliance with all the requirements and rules specified in the previously designed plan. Completion of all tasks in a given time.`} />
                                <Card icon={optimizationGif} title={'Optimization'} description={`Optimization of the product after its full execution and during its execution. Replacing difficult methods and algorithms with simpler ones, but with the same performance.`} />
                                <Card icon={supportGif} title={'Support'} description={`Project support after its release. Optimization of already written code and addition of new functionality when necessary.`} />
                            </div>
                        </div>
                    </MediaQuery>
                    </div>
                <div className="white-space-30"></div>
            </div>
            <div className={styles.myExperienceInfoWrap}>
                <Slide triggerOnce={true} className={styles.myExperienceInfoWrap} direction="up" duration={300} cascade={true}>
                <ExperienceCard title={'Projects implemented'} value={20} type={ExperienceCardTypes.count} />
                <ExperienceCard title={'Positive feedback'} value={40} type={ExperienceCardTypes.count} />
                <ExperienceCard title={'In the development and promotion of sites.'} value={3} type={ExperienceCardTypes.period} />
                </Slide>
                </div>
        </section>
    )
})