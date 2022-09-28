import React, { Component } from "react";
import Slider from "react-slick";
import {screenWidth} from "../../../helpers/misc";

export const SliderComponent = (props: any) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerPadding: '20px'
    };

    const styles = {
        width: '600px',
        zIndex: 1
    }

    if(screenWidth() <= 1200){
        styles.width = '400px';
    }

    if(screenWidth() <= 496){
        styles.width = '380px';
    }

    if(screenWidth() <= 399){
        styles.width = '340px';
    }

    if(screenWidth() <= 352){
        styles.width = '300px';
    }

    return (
        <div style={styles} >
            <Slider className="tablet-item-wrap-2" {...settings}>
                {props.children.map((child: any) => { return child })}
            </Slider>
        </div>
    )
}

export const SliderTabletComponent = (props: any) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
    };

    const styles = {
        width: '600px',
        zIndex: 1
    }

    if(screenWidth() <= 580){
        styles.width = '537px';
    }

    if(screenWidth() <= 496){
        styles.width = '380px';
        settings.centerMode = false;
    }

    if(screenWidth() <= 399){
        styles.width = '340px';
        settings.centerMode = false;
    }

    if(screenWidth() <= 352){
        styles.width = '300px';
        settings.centerMode = false;
    }

    return (
        <div style={styles}>
            <Slider className="tablet-item-wrap" {...settings}>
                {props.children.map((child: any) => { return child })}
            </Slider>
        </div>
    )
}