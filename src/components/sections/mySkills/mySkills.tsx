import styles from './mySkills.module.css';
import {Animations, Text} from '../../common/text/text';
import cssImg from '../../../assets/images/icons/css.svg';
import htmlImg from '../../../assets/images/icons/html.svg';
import jsImg from '../../../assets/images/icons/js.svg';
import tsImg from '../../../assets/images/icons/typescript.png';
import reactImg from '../../../assets/images/icons/react.png';
import angularImg from '../../../assets/images/icons/angular.svg';
import wordpressImg from '../../../assets/images/icons/wordpress.png';
import React, {ForwardedRef} from "react";
import {Sections} from "../../../variables/sections";
import MediaQuery from "react-responsive";
import {Slide} from "react-awesome-reveal";

export const MySkills = React.forwardRef((props, ref:ForwardedRef<any>) => {
    return (
        <section ref={ref} data-page={Sections.skills} id="skills" className={`container ${styles.wrap}`}>
            <div className={styles.title}>
                <Text customClass={styles.titleText} text={'My skills and knowledge'} />
            </div>
            <div className={styles.mySkills}>
                <div className={`${styles.bar} ${styles.leftBar}`}>
                    <MediaQuery maxWidth={375}>
                        <div className={styles.separator}></div>
                    </MediaQuery>
                    <div className={`${styles.skillItem} ${styles.left}`}>
                        <Slide className={styles.skillInfo} triggerOnce={true} direction="left" duration={1000}>
                            <div className={styles.skillInfo}>
                                <p className={styles.value}>
                                    85%
                                </p>
                                <Text customClass={styles.title} text={'Used in the work'} />
                            </div>
                        </Slide>
                        <Slide className={styles.skillImage} triggerOnce={true} direction="left" duration={1000}>
                            <img src={cssImg} alt=""/>
                        </Slide>
                    </div>

                    <div className={styles.separator}></div>

                    <Slide className={styles.skillDescription} triggerOnce={true} direction="left" duration={1000}>
                        <div className={`${styles.skillDescription} ${styles.left}`}>
                            <p className={styles.skillName}>HTML</p>
                            <Text animation={Animations.SlideLeft} customClass={styles.skillTitle} text={'HyperText Markup Language'} />
                            <Text animation={Animations.SlideLeft} customClass={styles.skillUsingTime} text={'2018 - NOW'} />
                            <Text animation={Animations.SlideLeft} customClass={styles.description} text={'A standardized document markup language for viewing web pages in a browser. One of the foundations for developing web applications.'} />
                        </div>
                    </Slide>

                    <div className={styles.separator}></div>

                    <div className={`${styles.skillItem} ${styles.left}`}>
                        <Slide className={styles.skillInfo} triggerOnce={true} direction="left" duration={1000}>
                            <div className={styles.skillInfo}>
                                <p className={styles.value}>
                                    80%
                                </p>
                                <Text customClass={styles.title} text={'Used in the work'} />
                            </div>
                        </Slide>
                        <Slide className={styles.skillImage} triggerOnce={true} direction="left" duration={1000}>
                            <img src={jsImg} alt=""/>
                        </Slide>
                    </div>

                    <div className={styles.separator}></div>

                    <div className={`${styles.skillDescription} ${styles.left}`}>
                        <p className={styles.skillName}>TypeScript</p>
                        <Text animation={Animations.SlideLeft} customClass={styles.skillTitle} text={'TypeScript'} />
                        <Text animation={Animations.SlideLeft} customClass={styles.skillUsingTime} text={'2021 - NOW'} />
                        <Text animation={Animations.SlideLeft} customClass={styles.description} text={'The programming language is positioned as a tool for developing web applications that extends the capabilities of JavaScript, enabling the explicit definition of types.'} />
                    </div>

                    <div className={styles.separator}></div>

                    <div className={`${styles.skillItem} ${styles.left}`}>
                        <Slide className={styles.skillInfo} triggerOnce={true} direction="left" duration={1000}>
                            <div className={styles.skillInfo}>
                                <p className={styles.value}>
                                    90%
                                </p>
                                <Text customClass={styles.title} text={'Used in the work'} />
                            </div>
                        </Slide>
                        <Slide className={styles.skillImage} triggerOnce={true} direction="left" duration={1000}>
                            <img src={reactImg} alt=""/>
                        </Slide>
                    </div>

                    <div className={styles.separator}></div>

                    <div className={`${styles.skillDescription} ${styles.left}`}>
                        <p className={styles.skillName}>ANGULAR</p>
                        <Text animation={Animations.SlideLeft} customClass={styles.skillTitle} text={'Angular'} />
                        <Text animation={Animations.SlideLeft} customClass={styles.skillUsingTime} text={'2021 - NOW'} />
                        <Text animation={Animations.SlideLeft} customClass={styles.description} text={'An open and free web application development platform written in TypeScript.'} />
                    </div>

                    <div className={styles.separator}></div>

                    <div className={`${styles.skillItem} ${styles.left}`}>
                        <Slide className={styles.skillInfo} triggerOnce={true} direction="left" duration={1000}>
                            <div className={styles.skillInfo}>
                                <p className={styles.value}>
                                    40%
                                </p>
                                <Text customClass={styles.title} text={'Used for work'} />
                            </div>
                        </Slide>
                        <Slide className={styles.skillImage} triggerOnce={true} direction="left" duration={1000}>
                            <img src={wordpressImg} alt=""/>
                        </Slide>
                    </div>

                </div>
                <div className={styles.centerBar}>
                    <div className={`${styles.roundSeparator} ${styles.right}`}>
                        <div className={styles.round}></div>
                    </div>
                    <div className={`${styles.roundSeparator} ${styles.left}`}>
                        <div className={styles.round}></div>
                    </div>
                    <div className={`${styles.roundSeparator} ${styles.right}`}>
                        <div className={styles.round}></div>
                    </div>
                    <div className={`${styles.roundSeparator} ${styles.left}`}>
                        <div className={styles.round}></div>
                    </div>
                    <div className={`${styles.roundSeparator} ${styles.right}`}>
                        <div className={styles.round}></div>
                    </div>
                    <div className={`${styles.roundSeparator} ${styles.left}`}>
                        <div className={styles.round}></div>
                    </div>
                    <div className={`${styles.roundSeparator} ${styles.right}`}>
                        <div className={styles.round}></div>
                    </div>
                </div>
                <div className={`${styles.bar} ${styles.rightBar}`}>
                    <div className={`${styles.skillDescription} ${styles.right}`}>
                        <p className={styles.skillName}>CSS (LESS, SCSS, SASS)</p>
                        <Text animation={Animations.SlideRight} customClass={styles.skillTitle} text={'Cascading Style Sheets'} />
                        <Text animation={Animations.SlideRight} customClass={styles.skillUsingTime} text={'2018 - NOW'} />
                        <Text animation={Animations.SlideRight} customClass={styles.description} text={'A special style language for pages used to describe their appearance. The core technology of the World Wide Web.'} />
                    </div>

                    <div className={styles.separator}></div>

                    <div className={`${styles.skillItem} ${styles.right}`}>
                        <Slide className={styles.skillImage} triggerOnce={true} direction="right" duration={1000}>
                            <img src={htmlImg} alt=""/>
                        </Slide>
                        <Slide className={styles.skillInfo} triggerOnce={true} direction="right" duration={1000}>
                            <div className={styles.skillInfo}>
                                <p className={styles.value}>
                                    85%
                                </p>
                                <Text customClass={styles.title} text={'Used in the work'} />
                            </div>
                        </Slide>
                    </div>

                    <div className={styles.separator}></div>

                    <div className={`${styles.skillDescription} ${styles.right}`}>
                        <p className={styles.skillName}>JS, ECMAScript</p>
                        <Text animation={Animations.SlideRight} customClass={styles.skillTitle} text={'JavaScript, ECMAScript'} />
                        <Text animation={Animations.SlideRight} customClass={styles.skillUsingTime} text={'2018 - NOW'} />
                        <Text animation={Animations.SlideRight} customClass={styles.description} text={'A dynamic, object-oriented, prototype programming language, the first and primary language for working with web applications.'} />
                    </div>

                    <div className={styles.separator}></div>

                    <div className={`${styles.skillItem} ${styles.right}`}>
                        <Slide className={styles.skillImage} triggerOnce={true} direction="right" duration={1000}>
                            <img src={tsImg} alt=""/>
                        </Slide>
                        <Slide className={styles.skillInfo} triggerOnce={true} direction="right" duration={1000}>
                            <div className={styles.skillInfo}>
                                <p className={styles.value}>
                                    75%
                                </p>
                                <Text customClass={styles.title} text={'Used in the work'} />
                            </div>
                        </Slide>
                    </div>

                    <div className={styles.separator}></div>

                    <div className={`${styles.skillDescription} ${styles.right}`}>
                        <p className={styles.skillName}>React</p>
                        <Text animation={Animations.SlideRight} customClass={styles.skillTitle} text={'React.js'} />
                        <Text animation={Animations.SlideRight} customClass={styles.skillUsingTime} text={'2021 - NOW'} />
                        <Text animation={Animations.SlideRight} customClass={styles.description} text={`JavaScript library for creating user interfaces that is designed to solve the problems of partially updating the content of a web page encountered in the development of single-page applications.`} />
                    </div>

                    <div className={styles.separator}></div>

                    <div className={`${styles.skillItem} ${styles.right}`}>
                        <Slide className={styles.skillImage} triggerOnce={true} direction="right" duration={1000}>
                            <img src={angularImg} alt=""/>
                        </Slide>
                        <Slide className={styles.skillInfo} triggerOnce={true} direction="right" duration={1000}>
                            <div className={styles.skillInfo}>
                                <p className={styles.value}>
                                    35%
                                </p>
                                <Text customClass={styles.title} text={'Study'} />
                            </div>
                        </Slide>
                    </div>

                    <div className={styles.separator}></div>

                    <div className={`${styles.skillDescription} ${styles.right}`}>
                        <p className={styles.skillName}>Wordpress</p>
                        <Text animation={Animations.SlideRight} customClass={styles.skillTitle} text={'WordPress'} />
                        <Text animation={Animations.SlideRight} customClass={styles.skillUsingTime} text={'2022'} />
                        <Text animation={Animations.SlideRight} customClass={styles.description} text={'An open source content management system that is widely used for creating websites due to its ease of installation and use.'} />
                    </div>
                </div>
            </div>
        </section>
    )
})