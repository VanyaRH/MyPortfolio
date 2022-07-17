import { MyMenu } from '../menu/menu';
import { MyLogo } from '../myLogo/logo';
import styles from './header.module.css';

export const Header = () => {
    return (
        <div className={styles.header}>
            <MyLogo />
            <MyMenu />
        </div>
    )
}