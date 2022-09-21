import {useEffect, useRef, useState} from "react";
import Typed from "typed.js";

interface IPrintText{
    texts: Array<string>;
    delay: number;
    loop?: boolean;
    customClass?: string;
    showCursor?: boolean;
}

export const PrintText = ({ texts, delay = 100, loop = false, showCursor = true, customClass}: IPrintText) => {
    const el = useRef(null);
    let typed:any = null;

    useEffect(() => {
        if(el.current){
            typed = new Typed(el.current, {
                strings: texts, // Strings to display
                startDelay: 300,
                typeSpeed: delay,
                backSpeed: 50,
                backDelay: 100,
                loop: loop,
                showCursor: showCursor
            });
        }

        return () => {
            if(typed !== null) {
                typed.destroy();
            }
        };
    }, []);

    return (<span className={customClass && customClass} ref={el}></span>)
}