import Image from 'next/image'
import { useEffect, useState } from 'react'
function Contact() {
    useEffect(() => {
        const contactForm = document.querySelector('.contact-form');
        const inputElems = document.querySelectorAll('.inputElem');
        const emailRE = /^\S+@\S+\.\S+$/;

        inputElems.forEach((elem) => {
            elem.addEventListener('focus', (e) => {
                if (!e.target.classList.contains('active')) {
                    e.target.classList.add('active');
                }
            });
            elem.addEventListener('keydown', (e) => {
                if (e.target.parentNode.classList.contains('error')) {
                    e.target.parentNode.classList.remove('error');
                }
            });
            elem.addEventListener('blur', (e) => {
                if (!e.target.value) {
                    e.target.classList.remove('active');
                    e.target.parentNode.classList.add('error');
                } else if (e.target.getAttribute('name') === 'email' && !emailRE.test(e.target.value)) {
                    e.target.parentNode.classList.add('error');
                } else if (e.target.getAttribute('name') === 'message' && e.target.value.length < 10) {
                    e.target.parentNode.classList.add('error');
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
                        <Image alt="web-dev service image" src="/contact.svg" height="300" width="500" />
                        <div className="contact-info-inner">
                            <h5>Let's make it work.</h5>
                            <h3><a href="mailto:debagracias@gmail.com">debagracias@gmail.com</a></h3>
                            <h3><a href="tel:+917867943737">+91 7507465444</a></h3>
                        </div>
                    </div>
                    <form className="contact-form">
                        <h5>I'd love to hear from you</h5>
                        <div className="form-input">
                            <input type="text" name="name" id="name" className="inputElem" />
                            <label for="name">Name</label>
                            <p className="error">Please enter your name</p>
                        </div>
                        <div className="form-input">
                            <input type="email" name="email" id="email" className="inputElem" />
                            <label htmlFor="email">Email Address</label>
                            <p className="error">Enter a valid email address</p>
                        </div>
                        <div className="form-input">
                            <textarea name="message" id="message" className="inputElem"></textarea>
                            <label htmlFor="message">Message</label>
                            <p className="error">Come on, pour your heart out...</p>
                        </div>
                        <div className="form-input buttons">
                            <button type="submit" className="button buttonPrimary" id="submitForm">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
