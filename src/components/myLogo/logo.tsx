import styles from './logo.module.css';
import myLogo from '../../assets/images/icons/logo.svg';
import { Text } from '../common/text/text';

export const MyLogo = () => {
    return (
        <div className={styles.main}>
            <img src={myLogo} alt="Rosokha Ivan - portfolio"/>
            <div className={styles.mainText}>
                <p className={styles.name}>Ivan Rosokha</p>
                <Text customClass={styles.subTitle} text={'Front-end Developer & Mentor'}/>
            </div>
        </div>
    )
}