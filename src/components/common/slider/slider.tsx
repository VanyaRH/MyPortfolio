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

    return (
        <div style={styles} >
            <Slider {...settings}>
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

    return (
        <div style={styles} >
            <Slider className="tablet-item-wrap" {...settings}>
                {props.children.map((child: any) => { return child })}
            </Slider>
        </div>
    )
}