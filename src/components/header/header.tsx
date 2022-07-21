import {useEffect, useState} from 'react';
import { MyMenu } from '../menu/menu';
import { MyLogo } from '../myLogo/logo';
import styles from './header.module.css';

export const Header = () => {

    const [sticky, setSticky] = useState("");
    const [hidden, setHidden] = useState("");

    // on render, set listener
    useEffect(() => {
        window.addEventListener("mousewheel", isSticky);
        return () => {
            window.removeEventListener("mousewheel", isSticky);
        };
    }, []);

    const updateMenu = (event: any) => {
        const scrollTop = window.scrollY;
        let stickyClass = "", hiddenClass = '';

        if (event.wheelDelta >= 0) {
            hiddenClass = '';
            stickyClass = scrollTop >= 110 ? styles.isSticky : "";
        } else {
            stickyClass = styles.isSticky;
            hiddenClass = scrollTop >= 110 ? styles.isHidden : "";
        }

        setSticky(stickyClass);
        setHidden(hiddenClass);
    }

    const isSticky = (event: any) => {
        setTimeout(() => { updateMenu(event); }, 100)
    };

    return (
        <div className={`${styles.header} ${sticky} ${hidden}`}>
            <MyLogo />
            <MyMenu />
        </div>
    )
}