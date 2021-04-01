import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'
import { server } from '../config'
import { ToastProvider, useToasts } from 'react-toast-notifications'

function Contact() {
    const { addToast } = useToasts();
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const [botCheck, setBotCheck] = useState("");

    const [isEmailActive, setisEmailActive] = useState(false);
    const [isMessageActive, setisMessageActive] = useState(false);
    const [isNameActive, setisNameActive] = useState(false);

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);
    const emailRE = /^\S+@\S+\.\S+$/;

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (botCheck) {
            return;
        }
        else if (!name) {
            nameRef.current.nextSibling.classList.add('error-msg');
            nameRef.current.focus();
        }
        else if (!email || !emailRE.test(email)) {
            emailRef.current.nextSibling.classList.add('error-msg');
            emailRef.current.focus();
        }
        else if (!message || message.length < 10) {
            messageRef.current.nextSibling.classList.add('error-msg');
            messageRef.current.focus();
        }
        else {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ Name: name, Email: email, Message: message })
            };
            const response = await fetch(`${server}/api/sendMessageToAirtable`, requestOptions)
                .then(async response => {
                    const data = await response.json();
                    // check for error response
                    if (!response.ok) {
                        // get error message from body or default to response status
                        const error = (data && data.message) || response.status;
                        return Promise.reject(error);
                    }
                    setName("");
                    setEmail("");
                    setMessage("");
                    console.log('success!');
                    //alert('success');
                    addToast("Thanks! You'll hear from me within 24 hours. Keep an eye on your email box.", {
                        appearance: 'success',
                        autoDismiss: true,
                        autoDismissTimeout: 7500
                    })
                })
                .catch(error => {
                    console.error('There was an error!', error);
                    //alert(error);
                    addToast("There was an error in sending your message. Please try again later.", {
                        appearance: 'error',
                        autoDismiss: true,
                        autoDismissTimeout: 7500
                    })
                });
        }
    }
    useEffect(() => {
        const inputElems = document.querySelectorAll('.inputElem');
        const inputElemsLabels = document.querySelectorAll('.form-input label');
        const emailRE = /^\S+@\S+\.\S+$/;
        inputElemsLabels.forEach((elem) => {
            elem.addEventListener('click', (e) => {
                elem.nextSibling.focus();
            });
        });
        inputElems.forEach((elem) => {
            elem.addEventListener('focus', (e) => {
                if (!e.target.classList.contains('active')) {
                    e.target.classList.add('active');
                }
            });
            elem.addEventListener('keydown', (e) => {
                if (e.target.nextSibling.classList.contains('error-msg')) {
                    e.target.nextSibling.classList.remove('error-msg');
                }
            });
            elem.addEventListener('blur', (e) => {
                if (!e.target.value) {
                    e.target.classList.remove('active');
                    e.target.nextSibling.classList.add('error-msg');
                } else if (e.target.getAttribute('name') === 'email' && !emailRE.test(e.target.value)) {
                    e.target.nextSibling.classList.add('error-msg');
                } else if (e.target.getAttribute('name') === 'message' && e.target.value.length < 10) {
                    e.target.nextSibling.classList.add('error-msg');
                }
            });
        });
    }, []);
    return (
        <section id="contact">
            <div className="contact__container">
                <h3 className="heading">Let's Talk Business!</h3>
                <div className="contact-inner">
                    <div className="contact-info">
                        <Image alt="web-dev service image" src="/contact.svg" height="370" width="500" />
                        <div className="contact-info-inner">
                            <h5>Let's make it work.</h5>
                            <h3><a href="mailto:debagracias@gmail.com">debagracias@gmail.com</a></h3>
                            <h3><a href="tel:+917867943737">+91 7507465444</a></h3>
                        </div>
                    </div>
                    <form className="contact-form">
                        <h5>I'd love to hear from you</h5>
                        <div className="form-input">
                            <label className={(isNameActive && name) ? "field-active" : ""}>Name</label>
                            <input ref={nameRef} type="text" name="name" id="name" className="inputElem" value={name} onChange={e => setName(e.target.value)} onFocus={e => setisNameActive(true)} />
                            <p className="error">Please enter your name</p>
                        </div>
                        <div className="form-input">
                            <label className={(isEmailActive && email) ? "field-active" : ""}>Email</label>
                            <input ref={emailRef} type="email" name="email" id="email" className="inputElem" value={email} onChange={e => setEmail(e.target.value)} onFocus={e => setisEmailActive(true)} />
                            <p className="error">Enter a valid email address</p>
                        </div>
                        <div className="form-input">
                            <label className={(isMessageActive && message) ? "field-active" : ""}>Message</label>
                            <textarea ref={messageRef} name="message" id="message" className="inputElem" value={message} onChange={e => setMessage(e.target.value)} onFocus={e => setisMessageActive(true)}></textarea>
                            <p className="error">Come on, pour your heart out...</p>
                        </div>
                        <div className="form-input botCheck">
                            <label>Bot Check</label>
                            <input type="text" name="BotCheck" id="BotCheck" className="inputElemHidden" value={botCheck} onChange={e => setBotCheck(e.target.value)} />
                        </div>
                        <div className="form-input buttons">
                            <button type="submit" className="button" id="submitForm" onClick={handleSendMessage}>Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
