import React, { Component } from "react";
import Slider from "react-slick";

interface ICustomDot{
    index: number
}

export const SliderComponent = (props: any) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const styles = {
        width: '600px'
    }

    return (
        <div style={styles} >
            <Slider {...settings}>
                {props.children.map((child: any) => { return child })}
            </Slider>
        </div>
    )
}