interface Itext{
    text: string,
    customClass?: string | '',
}

export const Text = (props: Itext) => {
    return (
        <span className={props.customClass || ''}>{props.text}</span>
    )
}