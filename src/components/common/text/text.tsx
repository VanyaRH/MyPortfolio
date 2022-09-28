import {Slide} from "react-awesome-reveal";
import {useMediaQuery} from "react-responsive";

export enum Animations{
    SlideLeft = 'slideLeft',
    SlideRight = 'slideRight',
    SlideTop = 'slideTop',
    SlideDown = 'slideDown',
}


interface Itext{
    text: string,
    customClass?: string | '',
    animation?: Animations
}

export const Text = (props: Itext) => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const getType = (props: Itext) => {
        if(props.animation && isDesktopOrLaptop){
            switch (props.animation){
                case Animations.SlideLeft:
                    return <Slide triggerOnce={true} className={props.customClass || ''} direction="left">
                        {props.text}
                    </Slide>
                    break;
                case Animations.SlideRight:
                    return <Slide triggerOnce={true} className={props.customClass || ''} direction="right" >
                        {props.text}
                    </Slide>
                    break;
                case Animations.SlideTop:
                    return <Slide triggerOnce={true} className={props.customClass || ''} direction="up">
                        {props.text}
                    </Slide>
                    break;
                case Animations.SlideDown:
                    <Slide triggerOnce={true} className={props.customClass || ''} direction="down">
                        {props.text}
                    </Slide>
                    break;
            }
        }

        return <span className={props.customClass || ''}>{props.text}</span>;
    }
    return getType(props);
}