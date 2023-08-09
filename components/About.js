import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Link } from 'react-scroll'
function About() {
    const [playlist, setplaylist] = useState([require('../public/audio/holdmedown.mp3'), require('../public/audio/radioactive.mp3'), require('../public/audio/chlorine.mp3'), require('../public/audio/clementine.mp3'), require('../public/audio/whatever.mp3'), require('../public/audio/thunder.mp3'), require('../public/audio/yesterday.mp3')]);
    const [audioElement, setAudioElement] = useState(null);
    const [playButton, setPlayButton] = useState(null);
    useEffect(() => {
        setAudioElement(document.createElement('audio'));
        setPlayButton(document.querySelector('#playAudio'));

    }, []);
    useEffect(() => {
        if (audioElement) {
            audioElement.addEventListener("ended", function () {
                playButton.classList.remove('isPlaying');
            });
        }

    }, [audioElement]); 


    const handleAudio = () => {
        if (!playButton.classList.contains('isPlaying')) {
            playButton.classList.add('isPlaying');
            const randomSong = playlist[Math.floor(Math.random() * playlist.length)];
            audioElement.setAttribute('src', randomSong);
            audioElement.load();
            audioElement.play();
        } else {
            audioElement.pause();
            audioElement.src = '';
            playButton.classList.remove('isPlaying');
        }
    }

    return (
        <section id="about">
            <div className="about__container">
                <h3 className="heading">Who Am I?</h3>
                <div className="about-who">
                    <div className="hero-image">
                        <Image alt="avatar image" className="avatar" src="/profile-pic.png" height="500" width="500" />
                    </div>
                    <div className="hero-content">
                        <h4>HELLO. THIS IS</h4>
                        <h1 className="title">DEBASISH GRACIAS</h1>
                        <p className="phonetics">
                            <span className="lighter">(n.) /dəbeisiʃ Gracias/</span>
                            <svg id="playAudio" onClick={handleAudio} className="speaker" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path d="M64.79 15.5c-7.7 0-13.18 14.26-14.98 33.93 5.16.04 8.63 7.24 8.63 16.13 0 8.66-4.1 15.72-8.32 16.1 2.06 18.11 7.37 30.95 14.67 30.95 5.27 0 14.04-21.74 14.04-48.55 0-26.82-8.76-48.56-14.04-48.56z" fill="#262f3d"></path><path d="M39.84 64.06c0-23.58 6.5-43.29 15.23-48.56h-3.29c-3.38 0-10.21 9.87-14.31 24.51L25.22 55.38c-1.45.22-2.91.57-4.38.9-.56-6.23-1.84-10.57-4.23-10.91.1-.01-.31-.04-.31-.04H8.11c-4.43 0-8.02 8.99-8.02 20.09 0 11.09 3.59 20.09 8.02 20.09h8.18s.41-.03.31-.05c2.43-.35 3.71-4.85 4.26-11.25l4.35 1.25 14.06 17.75s.11.04.27.08c4.35 11.73 10.02 19.32 11.73 19.32h3.79c-8.73-5.27-15.22-24.98-15.22-48.55z" fill="#7b8ba4"></path><g fill="#2e94ad"><path d="M84.93 44.93c2.97 4.29 4.72 11.24 4.72 19.07s-1.76 14.78-4.72 19.06l4.73 4.76c4.22-5.42 6.65-14 6.65-23.83 0-9.83-2.42-18.41-6.65-23.83l-4.73 4.77z" id="wave1" className="waves"></path><path d="M102.52 27.22l-4.85 4.88c4.61 7.73 7.31 19.17 7.31 31.9 0 12.72-2.7 24.16-7.3 31.9l4.84 4.88c5.83-8.85 9.12-21.93 9.12-36.78 0-14.85-3.29-27.93-9.12-36.78z" id="wave2" className="waves"></path></g></svg>
                        </p>
                        <p className="description"><span className="lighter">defn.</span> Umbraco certified software developer living in the most scenic Indian state of Goa, whose passion is creating digital solutions to solve real world problems. Currently working at ClerksWell as a developer.<Link to="work" smooth={true} className="lighter"><small>[more]</small></Link></p>
                        <Link to="contact" smooth={true} className="cta magnet">
                            Say "Hi" 
                              <svg id="hand" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="hand"><g fill="#0f97b8"><path d="M16.1 48.5c-.5-.1-.9-.2-1.4-.4-.5-.2-.9-.3-1.3-.5-.9-.4-1.7-.9-2.5-1.5C9.3 45 8 43.5 7 41.7 6 40 5.4 38 5.3 36.1c-.1-1 0-1.9.1-2.9.1-.5.2-.9.3-1.4.1-.5.3-.9.4-1.4l.1 1.4c0 .5.1.9.2 1.4.1.9.3 1.8.5 2.6.4 1.7 1 3.3 1.9 4.8.9 1.5 1.9 2.9 3.2 4.2.6.6 1.3 1.2 2 1.8.3.3.7.6 1.1.9l1 1M15.8 52.1c-.3.2-.7.3-1.1.4-.4.1-.7.2-1.1.2-.7.1-1.5.2-2.3.1-1.5-.1-3.1-.5-4.4-1.2-1.4-.7-2.6-1.8-3.4-3.1-.4-.6-.8-1.3-1.1-2-.1-.3-.2-.7-.3-1.1 0-.3-.1-.6-.1-1 .3.3.5.6.7.8.3.3.5.6.7.8.5.5.9 1 1.4 1.4 1 .9 2 1.7 3.2 2.3 1.1.6 2.4 1.1 3.6 1.5.6.2 1.3.3 2 .5.3.1.7.1 1 .2.5.1.8.1 1.2.2M38.4 3.5c.5.1.9.3 1.4.5.5.2.9.4 1.3.6.9.5 1.7 1 2.5 1.6 1.6 1.2 2.9 2.8 3.8 4.6.9 1.8 1.4 3.8 1.4 5.7 0 1-.1 1.9-.3 2.9-.1.5-.2.9-.4 1.4-.2.5-.3.9-.5 1.3l-.1-1.4c0-.5 0-.9-.1-1.4l-.3-2.7c-.3-1.7-.9-3.4-1.7-5-.8-1.6-1.8-3-3-4.3-.6-.7-1.3-1.3-1.9-2-.3-.3-.7-.6-1.1-.9l-1-.9M47.1 3.1c.4.1.7.2 1 .4.3.1.7.3 1 .5.6.4 1.2.8 1.8 1.3 1.1 1 2 2.2 2.5 3.6.6 1.4.8 2.9.6 4.4-.1.7-.3 1.4-.5 2.1-.1.3-.3.7-.4 1-.2.3-.3.6-.6.9v-2c0-.7-.1-1.3-.1-1.9-.2-1.3-.4-2.5-.9-3.6-.5-1.2-1.1-2.2-1.8-3.3-.4-.5-.8-1.1-1.2-1.6-.2-.3-.4-.5-.7-.8-.2-.5-.5-.8-.7-1"></path></g><g fill="#EC615B"><path d="M10 18c-2 .9-2.7 3.3-1.8 5.3l12.6 26.3 7-3.3-12.6-26.4c-.9-2-3.2-2.9-5.2-1.9M43.1 38.9l7.4-3.5-14.4-30c-1-2-3.4-2.9-5.5-1.9-2 1-2.9 3.4-1.9 5.5l14.4 29.9"></path></g><path d="M30.7 3.4c-.2.1-.4.2-.6.4 1.9-.5 3.9.4 4.8 2.2l14.4 30 1.3-.6-14.4-30c-1-2.1-3.4-3-5.5-2" fill="#CC4A44"></path><path d="M27.8 46.2l7.7-3.7-14.7-30.6c-1-2.1-3.6-3.1-5.7-2.1s-3 3.6-2 5.7l14.7 30.7" fill="#EC615B"></path><path d="M15.1 9.9c-.2.1-.4.2-.6.4 1.9-.5 4.1.4 5 2.3l9.1 19.1 2.2 1.3-10-21c-1-2.2-3.5-3.1-5.7-2.1" fill="#CC4A44"></path><path d="M34.3 40.1l7.7-3.7L27.3 5.8c-1-2.1-3.6-3.1-5.7-2-2.1 1-3 3.6-2 5.7l14.7 30.6" fill="#EC615B"></path><g fill="#CC4A44"><path d="M21.6 3.7c-.2.1-.4.3-.6.4 1.9-.5 4.1.4 5 2.3L36.3 28l2.2 1.3L27.3 5.8c-1-2.2-3.6-3.1-5.7-2.1M10 18c-.2.1-.4.2-.6.4 1.8-.5 3.7.4 4.5 2.2l7.5 15.7 2.2 1.3L15.2 20c-.9-2.1-3.2-3-5.2-2"></path></g><path d="M60.8 15c-2.7-2.1-7.1.2-9.3 7.4-1.5 5-1.7 6.5-4.9 8l-1.8-3.7S16.4 40.4 17.5 42.6c0 0 3.4 10.6 9.2 15.5 8.6 7.4 28.7-.5 29.6-19.6.5-11.1 7.4-21.2 4.5-23.5" fill="#EC615B"></path><g fill="#CC4A44"><path d="M60.8 15c-.5-.4-1.1-.6-1.7-.7.1.1.3.1.4.2 3 2.3-.1 7.6-1.8 12.4-1.4 3.8-2.6 7.7-2.4 11.5.8 16.6-15.9 24.5-25.9 21.5 9.8 4.1 28-3.7 27.2-21-.2-3.8.9-7.5 2.4-11.5 1.6-4.8 4.7-10.1 1.8-12.4"></path><path d="M47.5 30c-6.2.7-15.3 9.6-8.9 19.3-4.7-9.8 3-16.4 7.9-18.7.5-.4 1-.6 1-.6"></path></g></svg>
                        </Link>
                        {/* <svg id="hand" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="hand"><g fill="#0f97b8"><path d="M16.1 48.5c-.5-.1-.9-.2-1.4-.4-.5-.2-.9-.3-1.3-.5-.9-.4-1.7-.9-2.5-1.5C9.3 45 8 43.5 7 41.7 6 40 5.4 38 5.3 36.1c-.1-1 0-1.9.1-2.9.1-.5.2-.9.3-1.4.1-.5.3-.9.4-1.4l.1 1.4c0 .5.1.9.2 1.4.1.9.3 1.8.5 2.6.4 1.7 1 3.3 1.9 4.8.9 1.5 1.9 2.9 3.2 4.2.6.6 1.3 1.2 2 1.8.3.3.7.6 1.1.9l1 1M15.8 52.1c-.3.2-.7.3-1.1.4-.4.1-.7.2-1.1.2-.7.1-1.5.2-2.3.1-1.5-.1-3.1-.5-4.4-1.2-1.4-.7-2.6-1.8-3.4-3.1-.4-.6-.8-1.3-1.1-2-.1-.3-.2-.7-.3-1.1 0-.3-.1-.6-.1-1 .3.3.5.6.7.8.3.3.5.6.7.8.5.5.9 1 1.4 1.4 1 .9 2 1.7 3.2 2.3 1.1.6 2.4 1.1 3.6 1.5.6.2 1.3.3 2 .5.3.1.7.1 1 .2.5.1.8.1 1.2.2M38.4 3.5c.5.1.9.3 1.4.5.5.2.9.4 1.3.6.9.5 1.7 1 2.5 1.6 1.6 1.2 2.9 2.8 3.8 4.6.9 1.8 1.4 3.8 1.4 5.7 0 1-.1 1.9-.3 2.9-.1.5-.2.9-.4 1.4-.2.5-.3.9-.5 1.3l-.1-1.4c0-.5 0-.9-.1-1.4l-.3-2.7c-.3-1.7-.9-3.4-1.7-5-.8-1.6-1.8-3-3-4.3-.6-.7-1.3-1.3-1.9-2-.3-.3-.7-.6-1.1-.9l-1-.9M47.1 3.1c.4.1.7.2 1 .4.3.1.7.3 1 .5.6.4 1.2.8 1.8 1.3 1.1 1 2 2.2 2.5 3.6.6 1.4.8 2.9.6 4.4-.1.7-.3 1.4-.5 2.1-.1.3-.3.7-.4 1-.2.3-.3.6-.6.9v-2c0-.7-.1-1.3-.1-1.9-.2-1.3-.4-2.5-.9-3.6-.5-1.2-1.1-2.2-1.8-3.3-.4-.5-.8-1.1-1.2-1.6-.2-.3-.4-.5-.7-.8-.2-.5-.5-.8-.7-1"></path></g><g fill="#ffdb54"><path d="M10 18c-2 .9-2.7 3.3-1.8 5.3l12.6 26.3 7-3.3-12.6-26.4c-.9-2-3.2-2.9-5.2-1.9M43.1 38.9l7.4-3.5-14.4-30c-1-2-3.4-2.9-5.5-1.9-2 1-2.9 3.4-1.9 5.5l14.4 29.9"></path></g><path d="M30.7 3.4c-.2.1-.4.2-.6.4 1.9-.5 3.9.4 4.8 2.2l14.4 30 1.3-.6-14.4-30c-1-2.1-3.4-3-5.5-2" fill="#eba352"></path><path d="M27.8 46.2l7.7-3.7-14.7-30.6c-1-2.1-3.6-3.1-5.7-2.1s-3 3.6-2 5.7l14.7 30.7" fill="#ffdb54"></path><path d="M15.1 9.9c-.2.1-.4.2-.6.4 1.9-.5 4.1.4 5 2.3l9.1 19.1 2.2 1.3-10-21c-1-2.2-3.5-3.1-5.7-2.1" fill="#eba352"></path><path d="M34.3 40.1l7.7-3.7L27.3 5.8c-1-2.1-3.6-3.1-5.7-2-2.1 1-3 3.6-2 5.7l14.7 30.6" fill="#ffdb54"></path><g fill="#eba352"><path d="M21.6 3.7c-.2.1-.4.3-.6.4 1.9-.5 4.1.4 5 2.3L36.3 28l2.2 1.3L27.3 5.8c-1-2.2-3.6-3.1-5.7-2.1M10 18c-.2.1-.4.2-.6.4 1.8-.5 3.7.4 4.5 2.2l7.5 15.7 2.2 1.3L15.2 20c-.9-2.1-3.2-3-5.2-2"></path></g><path d="M60.8 15c-2.7-2.1-7.1.2-9.3 7.4-1.5 5-1.7 6.5-4.9 8l-1.8-3.7S16.4 40.4 17.5 42.6c0 0 3.4 10.6 9.2 15.5 8.6 7.4 28.7-.5 29.6-19.6.5-11.1 7.4-21.2 4.5-23.5" fill="#ffdb54"></path><g fill="#eba352"><path d="M60.8 15c-.5-.4-1.1-.6-1.7-.7.1.1.3.1.4.2 3 2.3-.1 7.6-1.8 12.4-1.4 3.8-2.6 7.7-2.4 11.5.8 16.6-15.9 24.5-25.9 21.5 9.8 4.1 28-3.7 27.2-21-.2-3.8.9-7.5 2.4-11.5 1.6-4.8 4.7-10.1 1.8-12.4"></path><path d="M47.5 30c-6.2.7-15.3 9.6-8.9 19.3-4.7-9.8 3-16.4 7.9-18.7.5-.4 1-.6 1-.6"></path></g></svg>*/}
                    </div>
                </div>
                <h3 className="heading">What I Do?</h3>

                <div className="services">
                    <div className="service" >
                        {/* <svg className="service-icon" viewBox="0 0 144 144" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.5"><path d="M91.732 104.989H15.683c-6.623 0-12.042-5.419-12.042-12.042v-58.82c0-6.623 5.419-12.042 12.042-12.042h83.771c6.623 0 12.042 5.419 12.042 12.042v22.536" fill="none" stroke="#0f97b8" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"></path><path d="M91.732 87.74h-75.97c-3.558 0-6.469-2.911-6.469-6.469V34.467c0-3.558 2.911-6.47 6.47-6.47h83.613c3.558 0 6.469 2.911 6.469 6.469v21.675" fill="none" stroke="#0f97b8" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"></path><path d="M9.292 36.519v-2.052c0-3.558 2.911-6.47 6.47-6.47h83.613c3.558 0 6.469 2.911 6.469 6.469v2.053H9.292z" fill="#ffdb54"></path><path d="M9.292 36.519v-2.052c0-3.558 2.911-6.47 6.47-6.47h83.613c3.558 0 6.469 2.911 6.469 6.469v2.053H9.292z" fill="none" stroke="#0f97b8" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"></path><circle cx="57.569" cy="96.613" fill="#ffdb54" r="3.605"></circle><circle cx="57.569" cy="96.613" fill="none" stroke="#0f97b8" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" r="3.605"></circle><path d="M68.111 105.247s-1.904 12.308 7.468 12.308H39.557c9.371 0 7.321-12.18 7.321-12.18m-30.34-62.448h35.955v13.434H16.538zM58.36 44.555h30m-30 6h35m-35 4h30" fill="none" stroke="#0f97b8" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"></path><path fill="#ffdb54" d="M16.538 63.77h17.978v17.978H16.538z"></path><path fill="none" stroke="#0f97b8" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M16.538 63.77h17.978v17.978H16.538zm24.497 0h17.978v17.978H41.035zm24.497 0H83.51v17.978H65.532zm69.195 61.11H96.596a4.836 4.836 0 01-4.822-4.822V61.48a4.836 4.836 0 014.822-4.822h38.131a4.836 4.836 0 014.822 4.822v58.578a4.836 4.836 0 01-4.822 4.822z"></path><path d="M133.102 113.904h-34.88a3.11 3.11 0 01-3.11-3.11V63.66a3.11 3.11 0 013.11-3.11h34.88a3.11 3.11 0 013.11 3.11v47.134a3.11 3.11 0 01-3.11 3.11z" fill="none" stroke="#0f97b8" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"></path><circle cx="117.456" cy="119.246" fill="#ffdb54" r="2.206"></circle><circle cx="117.456" cy="119.246" fill="none" stroke="#0f97b8" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" r="2.206"></circle><path fill="#ffdb54" d="M100.96 65.646h30.596v25.649H100.96z"></path><path fill="none" stroke="#0f97b8" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M100.318 65.646h31.238v25.649h-31.238zm1.042 32.909h24m-24 4h20"></path><path className="star" d="M125.538 40.51v6.231m3.116-3.116h-6.231" fill="none" stroke="#ffdb54" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="9" ></path><path className="star" d="M135.663 18.369v10.408m5.204-5.204H130.46" fill="none" stroke="#ffdb54" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" ></path></svg> */}
                        <Image alt="web-dev service image" src="/webdev-service.svg" height="500" width="500" />
                        <h4>Web Development</h4>
                        <p>Starting from app dashboards to single page apps to e-commerce websites, I can help you visualize what you think, and build a full-fledged digital solution with clean and user‑friendly experience.</p>
                    </div>

                    <div className="service" >
                        {/*<svg className="service-icon" viewBox="0 0 144 144" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.5"><path d="M91.732 104.989H15.683c-6.623 0-12.042-5.419-12.042-12.042v-58.82c0-6.623 5.419-12.042 12.042-12.042h83.771c6.623 0 12.042 5.419 12.042 12.042v22.536" fill="none" stroke="#0f97b8" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"></path><path d="M91.732 87.74h-75.97c-3.558 0-6.469-2.911-6.469-6.469V34.467c0-3.558 2.911-6.47 6.47-6.47h83.613c3.558 0 6.469 2.911 6.469 6.469v21.675" fill="none" stroke="#0f97b8" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"></path><path d="M9.292 36.519v-2.052c0-3.558 2.911-6.47 6.47-6.47h83.613c3.558 0 6.469 2.911 6.469 6.469v2.053H9.292z" fill="#ffdb54"></path><path d="M9.292 36.519v-2.052c0-3.558 2.911-6.47 6.47-6.47h83.613c3.558 0 6.469 2.911 6.469 6.469v2.053H9.292z" fill="none" stroke="#0f97b8" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"></path><circle cx="57.569" cy="96.613" fill="#ffdb54" r="3.605"></circle><circle cx="57.569" cy="96.613" fill="none" stroke="#0f97b8" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" r="3.605"></circle><path d="M68.111 105.247s-1.904 12.308 7.468 12.308H39.557c9.371 0 7.321-12.18 7.321-12.18m-30.34-62.448h35.955v13.434H16.538zM58.36 44.555h30m-30 6h35m-35 4h30" fill="none" stroke="#0f97b8" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"></path><path fill="#ffdb54" d="M16.538 63.77h17.978v17.978H16.538z"></path><path fill="none" stroke="#0f97b8" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M16.538 63.77h17.978v17.978H16.538zm24.497 0h17.978v17.978H41.035zm24.497 0H83.51v17.978H65.532zm69.195 61.11H96.596a4.836 4.836 0 01-4.822-4.822V61.48a4.836 4.836 0 014.822-4.822h38.131a4.836 4.836 0 014.822 4.822v58.578a4.836 4.836 0 01-4.822 4.822z"></path><path d="M133.102 113.904h-34.88a3.11 3.11 0 01-3.11-3.11V63.66a3.11 3.11 0 013.11-3.11h34.88a3.11 3.11 0 013.11 3.11v47.134a3.11 3.11 0 01-3.11 3.11z" fill="none" stroke="#0f97b8" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"></path><circle cx="117.456" cy="119.246" fill="#ffdb54" r="2.206"></circle><circle cx="117.456" cy="119.246" fill="none" stroke="#0f97b8" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" r="2.206"></circle><path fill="#ffdb54" d="M100.96 65.646h30.596v25.649H100.96z"></path><path fill="none" stroke="#0f97b8" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M100.318 65.646h31.238v25.649h-31.238zm1.042 32.909h24m-24 4h20"></path><path className="star" d="M125.538 40.51v6.231m3.116-3.116h-6.231" fill="none" stroke="#ffdb54" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="9" ></path><path className="star" d="M135.663 18.369v10.408m5.204-5.204H130.46" fill="none" stroke="#ffdb54" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" ></path></svg>*/}
                        <Image alt="mobile-dev service image" src="/mobiledev-service.svg" height="500" width="500" />
                        <h4>Mobile App Development</h4>
                        <p>With years of experience in the mobile app development field, I can craft top-notch Android and iOS applications using the latest technologies with scalability and maintainabilty in mind.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
