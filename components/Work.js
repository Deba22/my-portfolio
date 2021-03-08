import Image from 'next/image'
import { useEffect, useState } from 'react'
function Work() {
    // const styleWeb = {
    //     display: 'block',
    //     transform: `translate(${0}px, ${0}px)`,
    //     opacity: 1
    // };
    // const styleMobile = {
    //     display: 'none',
    //     transform: `translate(${0}px, ${50}px)`,
    //     opacity: 0
    // };
    const styleImage = {
        transform: `translate(${0}px, ${0}px)`
    };
    const [isWebChecked, setisWebChecked] = useState(true);
    const [isMobileChecked, setisMobileChecked] = useState(false);
    const handleWebAppsChange = (e) => {
        if (e.target.checked) {
            setisWebChecked(true);
            setisMobileChecked(false);
        }
        else {
            setisWebChecked(false);
            setisMobileChecked(true);
        }
    }
    const handleMobileAppsChange = (e) => {
        if (e.target.checked) {
            setisMobileChecked(true);
            setisWebChecked(false);
        }
        else {
            setisMobileChecked(false);
            setisWebChecked(true);
        }
    }
    return (
        <section id="work">
            <div className="work__container">
                <div className="work-header">
                    <h3 className="work-heading">What I've done?</h3>
                    <div className="work-radio">
                        <span className="work-option">
                            <input type="radio" name="workType" value="web" id="workTypeWeb" checked={isWebChecked} onChange={handleWebAppsChange} />
                            <label htmlFor="workTypeWeb">Web Apps</label>
                        </span>
                        <span className="work-option">
                            <input type="radio" name="workType" value="mobile" id="workTypeMobile" checked={isMobileChecked} onChange={handleMobileAppsChange} />
                            <label htmlFor="workTypeMobile">Mobile Apps</label>
                        </span>
                    </div>
                </div>
                <div className="projects" id="projects" style={isWebChecked?{ display:'block'} : {display : 'none'}}>
                    <div className="project">
                        <div className="project-images">
                            <img alt="amazon screenshot" loading="lazy" className="big" src="images/amazon.00b1ee4aae56d4ccd0607c7828fa1ab6.webp" style={styleImage} />
                            <img alt="amazon mobile screenshot" loading="lazy" className="small" src="images/amazon-small.a648a4e261b1ec33c21f69c0f9063aa8.webp" style={styleImage} />
                        </div>
                        <div className="project-details">
                            <h4>Netflix Clone</h4>
                            <p className="project-desc">Netflix clone built using ReactJs and Redux with complete payment functionality(Stripe API) and user authentication (Firebase). Movies are fetched using the TMDb API.</p>
                            <p className="stack"><b>Tech Stack: </b>React Router, Redux, Payment Processing with Stripe API, Firebase, Material UI</p>
                            <div className="buttons">
                                <a rel="noreferrer" target="_blank" href="https://netflix-clone-e9ce7.web.app" className="button">Live Preview</a>
                                <a rel="noreferrer" target="_blank" href="https://github.com/Deba22/netflix-clone" className="buttonText">View Code</a>
                            </div>
                        </div>
                    </div>
                    <div className="project">
                        <div className="project-images">
                            <img alt="tmdb screenshot" loading="lazy" className="big" src="images/tmdb.487ae9dd26c3f72c98e8338766eb7c69.webp" style={styleImage} />
                            <img alt="tmdb mobile screenshot" loading="lazy" className="small" src="images/tmdb-small.f5969f9b77fdfc4d135bffa8210bccf7.webp" style={styleImage} />
                        </div>
                        <div className="project-details">
                            <h4>Hello Chat App</h4>
                            <p className="project-desc">A real time chat app powered by React and Firebase. The user has the ability to create private and/or group chat rooms. </p>
                            <p className="stack"><b>Tech Stack: </b>ReactJs, Redux, Firebase, Google Authentication, Material UI</p>
                            <div className="buttons">
                                <a rel="noreferrer" target="_blank" href="https://chatapp-firebase-b3780.web.app" className="button">Live Preview</a>
                                <a rel="noreferrer" target="_blank" href="https://github.com/Deba22/Hello-Chat-App" className="buttonText">View Code</a>
                            </div>
                        </div>
                    </div>
                    <div className="project">
                        <div className="project-images">
                            <img alt="spotify screenshot" loading="lazy" className="big" src="images/spotify.a7c9f4381c6bb80475411bb5d00147ec.webp" style={styleImage} />
                            <img alt="spotify mobile screenshot" loading="lazy" className="small" src="images/spotify-small.8af8c646fb53f6a3e0b954dba265800e.webp" style={styleImage} />
                        </div>
                        <div className="project-details">
                            <h4>Snapchat Clone</h4>
                            <p className="project-desc">Snapchat clone developed using React and Firebase which lets users exchange pictures that are meant to disappear after they're viewed.</p>
                            <p className="stack"><b>Tech Stack: </b>ReactJs, Redux, Firebase, Google Authentication, Camera, Material UI</p>
                            <div className="buttons">
                                <a rel="noreferrer" target="_blank" href="https://snapchat-clone-ccadd.web.app" className="button">Live Preview</a>
                                <a rel="noreferrer" target="_blank" href="https://github.com/Deba22/snapchat-clone" className="buttonText">View Code</a>
                            </div>
                        </div>
                    </div>
                    <div className="view-more">
                        <a href="https://github.com/Deba22" rel="noreferrer" target="_blank" className="button">
                            <Image src="/github-black.svg" alt="github" height="18" width="18" />
                            View More
                        </a>
                    </div>
                </div>
                <div className="designs" id="designs" style={isMobileChecked?{ display:'block'} : {display : 'none'}}>
                </div>
            </div>
        </section>
    )
}

export default Work
