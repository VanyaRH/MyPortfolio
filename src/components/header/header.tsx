import {useEffect, useState} from 'react';
import { MyMenu } from '../menu/menu';
import { MyLogo } from '../myLogo/logo';
import styles from './header.module.css';

export const Header = () => {

    const [sticky, setSticky] = useState("");

    // on render, set listener
    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
            window.removeEventListener("scroll", isSticky);
        };
    }, []);

    const isSticky = () => {
        const scrollTop = window.scrollY;
        const stickyClass = scrollTop >= 10 ? styles.isSticky : "";
        setSticky(stickyClass);
    };

    return (
        <div className={`${styles.header} ${sticky}`}>
            <MyLogo />
            <MyMenu />
        </div>
    )
}