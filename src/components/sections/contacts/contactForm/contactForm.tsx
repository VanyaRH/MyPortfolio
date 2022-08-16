import styles from './contactForm.module.css';
import buttons from "../../../../mainStyles/buttons.module.css";
import {FormEvent, useState} from "react";
import {Text} from "../../../common/text/text";

export const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [sent, setSent] = useState(false);

    const [validData, setValid] = useState({
        name: true,
        email: true,
        message: true
    });

    const onChangeHandler = (fieldName: string, value: string)=> {
        if (fieldName === "name") {
            setName(value);
        }

        if (fieldName === "email") {
            setEmail(value);
        }

        if (fieldName === "message") {
            setMessage(value);
        }
    }

    const changeValid = (fieldName: string, isCorrect: boolean) => {
        if(fieldName === 'name'){
            setValid((prevState) => ({
                ...prevState,
                name: isCorrect
            }));
        }

        if(fieldName === 'email'){
            setValid((prevState) => ({
                ...prevState,
                email: isCorrect
            }));
        }

        if(fieldName === 'message'){
            setValid((prevState) => ({
                ...prevState,
                message: isCorrect
            }));
        }
    }

    const onSubmitHandler = (e: FormEvent) => {
        e.preventDefault();

        if(sent) return;

        changeValid("name", name !== '');
        changeValid("email", email !== '');
        changeValid("message", message !== '');

        send();
    }

    const destroy = () => {
        onChangeHandler('name', '');
        onChangeHandler('email', '');
        onChangeHandler('message', '');
    }

    const send = () => {
        if(name !== '' && email !== '' && message !== ''){
            destroy();
            setSent(true);
        }
    }

    return (
        <form onSubmit={(e) => { onSubmitHandler(e) }} className={styles.form}>
            <div className={`${styles.formGroup} ${!validData.name && styles.error}`}>
                <input disabled={sent} onFocus={() => { changeValid("name", true) }} placeholder="NAME" value={name} onChange={(e)=>{onChangeHandler("name", e.target.value)}} className={`${styles.field} ${styles.name}`} type="text" id="name"/>
                <Text customClass={styles.errorMessage} text={'*Invalid name'} />
            </div>
            <div className={`${styles.formGroup} ${!validData.email && styles.error}`}>
                <input disabled={sent} onFocus={() => { changeValid("email", true) }} placeholder="E-MAIL" value={email} onChange={(e)=>{onChangeHandler("email", e.target.value)}} className={`${styles.field} ${styles.email}`} type="text" id="email"/>
                <Text customClass={styles.errorMessage} text={'*Invalid e-mail'} />
            </div>
            <div className={`${styles.formGroup} ${!validData.message && styles.error}`}>
                <textarea disabled={sent} onFocus={() => { changeValid("message", true) }} placeholder="MESSAGE" value={message} onChange={(e)=>{onChangeHandler("message", e.target.value)}} className={`${styles.field} ${styles.message}`} name="message" rows={3} id="message"></textarea>
                <Text customClass={styles.errorMessage} text={'*Invalid message'} />
            </div>
            <button className={`${buttons.btn} ${buttons.send} ${styles.button} ${sent ? styles.sent : ''}`}>{sent ? <Text customClass={styles.errorMessage} text={'SENT'} /> : <Text customClass={styles.errorMessage} text={'SEND MESSAGE'} />}</button>
        </form>
    )
}