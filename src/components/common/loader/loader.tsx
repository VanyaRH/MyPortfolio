import styles from './loader.module.css';

interface ILoader {
    show: boolean
}

export const Loader = (props: ILoader) => {
    return (
        props.show ? <div className={styles.loaderWrap}><span className={styles.loader}></span></div> : <></>
    )
}