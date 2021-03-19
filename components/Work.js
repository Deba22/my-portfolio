import Image from 'next/image'
import { useEffect, useState } from 'react'
import WebProject from './WebProject';

function Work() {

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
                <div className="projects" id="webprojects" style={isWebChecked ? { display: 'block' } : { display: 'none' }}>
                    <WebProject title="Netflix Clone" description="Netflix clone built using ReactJs and Redux with complete payment functionality(Stripe API) and user authentication (Firebase). Movies are fetched using the TMDb API."
                        techstack="React Router, Redux, Payment Processing with Stripe API, Firebase, Material UI" desktopimage="/netflix-desktop.png" mobileimage="/netflix-mobile.png"
                        livelink="https://netflix-clone-e9ce7.web.app/" codelink="https://github.com/Deba22/netflix-clone"
                    />
                    <WebProject title="Hello Chat App" description="A real time chat app powered by React and Firebase. The user has the ability to create private and/or group chat rooms."
                        techstack="ReactJs, Redux, Firebase, Google Authentication, Material UI" desktopimage="/chat-desktop.png" mobileimage="/chat-mobile.png"
                        livelink="https://chatapp-firebase-b3780.web.app" codelink="https://github.com/Deba22/Hello-Chat-App"
                    />
                    <WebProject title="Snapchat Clone" description="Snapchat clone developed using React and Firebase which lets users exchange pictures that are meant to disappear after they're viewed."
                        techstack="ReactJs, Redux, Firebase, Google Authentication, Camera, Material UI" desktopimage="/snapchat-desktop.png" mobileimage="/snapchat-mobile.png"
                        livelink="https://snapchat-clone-ccadd.web.app" codelink="https://github.com/Deba22/snapchat-clone" isBorderRemove
                    />

                </div>
                <div className="designs" id="mobileprojects" style={isMobileChecked ? { display: 'block' } : { display: 'none' }}>
                    <div className="project">
                        <div className="project-images">
                            <img alt="spotify screenshot" loading="lazy" className="big" src="images/spotify.a7c9f4381c6bb80475411bb5d00147ec.webp" style={styleImage} />
                            <img alt="spotify mobile screenshot" loading="lazy" className="small" src="images/spotify-small.8af8c646fb53f6a3e0b954dba265800e.webp" style={styleImage} />
                        </div>
                        <div className="project-details">
                            <h4>Expense Tracker App</h4>
                            <p className="project-desc">A finance managing app that allows you to track your day to day expenses easily and quickly. One can get meaningful and in-depth analysis and also generate reports.</p>
                            <p className="stack"><b>Tech Stack: </b>Xamarin Android, Firebase, Google and Facebook Authentication, Typeform</p>
                            <div className="buttons">
                                <a rel="noreferrer" target="_blank" href="https://play.google.com/store/apps/details?id=com.debweb.expensetracker&hl=en">
                                    <Image src="/google-play-badge.png" alt="google-play" width={157} height={60} />
                                </a>
                                <a rel="noreferrer" target="_blank" href="https://github.com/Deba22/Expense-Tracker---Android-App" className="buttonText">View Code</a>
                            </div>
                        </div>
                    </div>
                    <div className="project">
                        <div className="project-images">
                            <img alt="spotify screenshot" loading="lazy" className="big" src="images/spotify.a7c9f4381c6bb80475411bb5d00147ec.webp" style={styleImage} />
                            <img alt="spotify mobile screenshot" loading="lazy" className="small" src="images/spotify-small.8af8c646fb53f6a3e0b954dba265800e.webp" style={styleImage} />
                        </div>
                        <div className="project-details">
                            <h4>My Collection App</h4>
                            <p className="project-desc">An android app(digital book) that consists of various captivating and realistic articles/stories written by Golda and Curie.</p>
                            <p className="stack"><b>Tech Stack: </b>Xamarin Android, Firebase, Lottie Animation</p>
                            <div className="buttons">
                                <a rel="noreferrer" target="_blank" href="https://github.com/Deba22/MyCollection/blob/master/mycollection.apk" className="button">Download APK</a>
                                <a rel="noreferrer" target="_blank" href="https://github.com/Deba22/MyCollection" className="buttonText">View Code</a>
                            </div>
                        </div>
                    </div>
                    <div className="project">
                        <div className="project-images">
                            <img alt="spotify screenshot" loading="lazy" className="big" src="images/spotify.a7c9f4381c6bb80475411bb5d00147ec.webp" style={styleImage} />
                            <img alt="spotify mobile screenshot" loading="lazy" className="small" src="images/spotify-small.8af8c646fb53f6a3e0b954dba265800e.webp" style={styleImage} />
                        </div>
                        <div className="project-details">
                            <h4>Covid Fight App</h4>
                            <p className="project-desc">An android app that helps you maintain social distance by alerting you when other people are too close so that you can move, and maintain social distance from them.</p>
                            <p className="stack"><b>Tech Stack: </b>Xamarin Android, Bluetooth</p>
                            <div className="buttons">
                                <a rel="noreferrer" target="_blank" href="https://github.com/Deba22/Covid-Fight-App/blob/master/covidfight.apk" className="button">Download APK</a>
                                <a rel="noreferrer" target="_blank" href="https://github.com/Deba22/Covid-Fight-App" className="buttonText">View Code</a>
                            </div>
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
        </section>
    )
}

export default Work
