import styles from './contactForm.module.css';
import buttons from "../../../../mainStyles/buttons.module.css";
import {FormEvent, useState} from "react";
import {Text} from "../../../common/text/text";
import emailjs from 'emailjs-com';

const SERVICE_ID = "service_2fmfrp7";
const TEMPLATE_ID = "template_ei8s5hh";
const USER_ID = "ruK4ad0giwa0ROZRD";

export const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [sent, setSent] = useState(false);
    const [disabled, setDisabled] = useState(false);

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

        send(e);
    }

    const destroy = () => {
        onChangeHandler('name', '');
        onChangeHandler('email', '');
        onChangeHandler('message', '');
    }

    const send = (e: any) => {
        if(name !== '' && email !== '' && message !== ''){
            setDisabled(true);
            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
                .then((result: any) => {
                    destroy();
                    setDisabled(false);
                    setSent(true);
                }, (error: any) => { setDisabled(false); });
        }
    }

    return (
        <form onSubmit={(e) => { onSubmitHandler(e) }} className={styles.form}>
            <div className={`${styles.formGroup} ${!validData.name && styles.error}`}>
                <input name="user_name" disabled={sent} onFocus={() => { changeValid("name", true) }} placeholder="NAME" value={name} onChange={(e)=>{onChangeHandler("name", e.target.value)}} className={`${styles.field} ${styles.name}`} type="text" id="name"/>
                <Text customClass={styles.errorMessage} text={'*Invalid name'} />
            </div>
            <div className={`${styles.formGroup} ${!validData.email && styles.error}`}>
                <input name="user_email" disabled={sent} onFocus={() => { changeValid("email", true) }} placeholder="E-MAIL" value={email} onChange={(e)=>{onChangeHandler("email", e.target.value)}} className={`${styles.field} ${styles.email}`} type="text" id="email"/>
                <Text customClass={styles.errorMessage} text={'*Invalid e-mail'} />
            </div>
            <div className={`${styles.formGroup} ${!validData.message && styles.error}`}>
                <textarea name="message" disabled={sent} onFocus={() => { changeValid("message", true) }} placeholder="MESSAGE" value={message} onChange={(e)=>{onChangeHandler("message", e.target.value)}} className={`${styles.field} ${styles.message}`} rows={3} id="message"></textarea>
                <Text customClass={styles.errorMessage} text={'*Invalid message'} />
            </div>
            <button disabled={disabled} className={`${buttons.btn} ${buttons.send} ${styles.button} ${sent ? styles.sent : ''}`}>{sent ? <Text customClass={styles.errorMessage} text={'SENT'} /> : <Text customClass={styles.errorMessage} text={'SEND MESSAGE'} />}</button>
        </form>
    )
}