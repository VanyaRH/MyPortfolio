import styles from './mySkills.module.css';
import { Text } from '../../common/text/text';
import cssImg from '../../../assets/images/icons/css.svg';
import htmlImg from '../../../assets/images/icons/html.svg';
import jsImg from '../../../assets/images/icons/js.svg';
import reactImg from '../../../assets/images/icons/react.png';
import angularImg from '../../../assets/images/icons/angular.svg';
import wordpressImg from '../../../assets/images/icons/wordpress.png';

export const MySkills = () => {
    return (
        <section className={`container ${styles.wrap}`}>
            <div className={styles.title}>
                <Text customClass={styles.titleText} text={'My skills and knowledge'} />
            </div>
            <div className={styles.mySkills}>
                <div className={`${styles.bar} ${styles.leftBar}`}>
                    <div className={`${styles.skillItem} ${styles.right}`}>
                        <div className={styles.skillInfo}>
                            <p className={styles.value}>
                                90%
                            </p>
                            <Text customClass={styles.title} text={'Used in the work'} />
                        </div>
                        <div className={styles.skillImage}>
                            <img src={cssImg} alt=""/>
                        </div>
                    </div>

                    <div className={styles.separator}></div>

                    <div className={`${styles.skillDescription} ${styles.left}`}>
                        <p className={styles.skillName}>HTML</p>
                        <Text customClass={styles.skillTitle} text={'turpis, ut suscipit turpis fringilla eu'} />
                        <Text customClass={styles.skillUsingTime} text={'2017 - NOW'} />
                        <Text customClass={styles.description} text={'Integer pharetra rutrum turpis, ut suscipit turpis fringilla eu. Sed condimentum velit eget imperdiet accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent pretium nulla a neque scelerisque vestibulum eu scelerisque metus.'} />
                    </div>

                    <div className={styles.separator}></div>

                    <div className={`${styles.skillItem} ${styles.left}`}>
                        <div className={styles.skillInfo}>
                            <p className={styles.value}>
                                90%
                            </p>
                            <Text customClass={styles.title} text={'Used in the work'} />
                        </div>
                        <div className={styles.skillImage}>
                            <img src={jsImg} alt=""/>
                        </div>
                    </div>

                    <div className={styles.separator}></div>

                    <div className={`${styles.skillDescription} ${styles.left}`}>
                        <p className={styles.skillName}>React</p>
                        <Text customClass={styles.skillTitle} text={'turpis, ut suscipit turpis fringilla eu'} />
                        <Text customClass={styles.skillUsingTime} text={'2017 - NOW'} />
                        <Text customClass={styles.description} text={'Integer pharetra rutrum turpis, ut suscipit turpis fringilla eu. Sed condimentum velit eget imperdiet accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent pretium nulla a neque scelerisque vestibulum eu scelerisque metus.'} />
                    </div>

                    <div className={styles.separator}></div>

                    <div className={`${styles.skillItem} ${styles.left}`}>
                        <div className={styles.skillInfo}>
                            <p className={styles.value}>
                                90%
                            </p>
                            <Text customClass={styles.title} text={'Used in the work'} />
                        </div>
                        <div className={styles.skillImage}>
                            <img src={angularImg} alt=""/>
                        </div>
                    </div>

                    <div className={styles.separator}></div>

                    <div className={`${styles.skillDescription} ${styles.left}`}>
                        <p className={styles.skillName}>Wordpress</p>
                        <Text customClass={styles.skillTitle} text={'turpis, ut suscipit turpis fringilla eu'} />
                        <Text customClass={styles.skillUsingTime} text={'2017 - NOW'} />
                        <Text customClass={styles.description} text={'Integer pharetra rutrum turpis, ut suscipit turpis fringilla eu. Sed condimentum velit eget imperdiet accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent pretium nulla a neque scelerisque vestibulum eu scelerisque metus.'} />
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
                </div>
                <div className={`${styles.bar} ${styles.rightBar}`}>
                    <div className={`${styles.skillDescription} ${styles.right}`}>
                        <p className={styles.skillName}>CSS</p>
                        <Text customClass={styles.skillTitle} text={'turpis, ut suscipit turpis fringilla eu'} />
                        <Text customClass={styles.skillUsingTime} text={'2017 - NOW'} />
                        <Text customClass={styles.description} text={'Integer pharetra rutrum turpis, ut suscipit turpis fringilla eu. Sed condimentum velit eget imperdiet accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent pretium nulla a neque scelerisque vestibulum eu scelerisque metus.'} />
                    </div>

                    <div className={styles.separator}></div>

                    <div className={`${styles.skillItem} ${styles.right}`}>
                        <div className={styles.skillImage}>
                            <img src={htmlImg} alt=""/>
                        </div>
                        <div className={styles.skillInfo}>
                            <p className={styles.value}>
                                90%
                            </p>
                            <Text customClass={styles.title} text={'Used in the work'} />
                        </div>
                    </div>

                    <div className={styles.separator}></div>

                    <div className={`${styles.skillDescription} ${styles.right}`}>
                        <p className={styles.skillName}>JS</p>
                        <Text customClass={styles.skillTitle} text={'turpis, ut suscipit turpis fringilla eu'} />
                        <Text customClass={styles.skillUsingTime} text={'2017 - NOW'} />
                        <Text customClass={styles.description} text={'Integer pharetra rutrum turpis, ut suscipit turpis fringilla eu. Sed condimentum velit eget imperdiet accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent pretium nulla a neque scelerisque vestibulum eu scelerisque metus.'} />
                    </div>

                    <div className={styles.separator}></div>

                    <div className={`${styles.skillItem} ${styles.right}`}>
                        <div className={styles.skillImage}>
                            <img src={reactImg} alt=""/>
                        </div>
                        <div className={styles.skillInfo}>
                            <p className={styles.value}>
                                90%
                            </p>
                            <Text customClass={styles.title} text={'Used in the work'} />
                        </div>
                    </div>

                    <div className={styles.separator}></div>

                    <div className={`${styles.skillDescription} ${styles.right}`}>
                        <p className={styles.skillName}>Angular</p>
                        <Text customClass={styles.skillTitle} text={'turpis, ut suscipit turpis fringilla eu'} />
                        <Text customClass={styles.skillUsingTime} text={'2017 - NOW'} />
                        <Text customClass={styles.description} text={'Integer pharetra rutrum turpis, ut suscipit turpis fringilla eu. Sed condimentum velit eget imperdiet accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent pretium nulla a neque scelerisque vestibulum eu scelerisque metus.'} />
                    </div>

                    <div className={styles.separator}></div>

                    <div className={`${styles.skillItem} ${styles.right}`}>
                        <div className={styles.skillImage}>
                            <img src={wordpressImg} alt=""/>
                        </div>
                        <div className={styles.skillInfo}>
                            <p className={styles.value}>
                                90%
                            </p>
                            <Text customClass={styles.title} text={'Used in the work'} />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}