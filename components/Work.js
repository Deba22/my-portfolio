import Image from 'next/image'
import { useEffect, useState } from 'react'
import MobileProject from './MobileProject';
import WebProject from './WebProject';

function Work() {
    let ExpenseTrackerslides = [
        <Image src="/expense-tracker1.png" alt="expense-tracker1" key="1" height={500} width={250} />,
        <Image src="/expense-tracker2.png" alt="expense-tracker2" key="2" height={500} width={250} />,
        <Image src="/expense-tracker3.png" alt="expense-tracker3" key="3" height={500} width={250} />
    ];
    let MyCollectionslides = [
        <Image src="/mycollection1.png" alt="expense-tracker1" key="1" height={500} width={250} />,
        <Image src="/mycollection2.png" alt="expense-tracker2" key="2" height={500} width={250} />,
        <Image src="/mycollection3.png" alt="expense-tracker3" key="3" height={500} width={250} />
    ];
    let CovidFightslides = [
        <Image src="/covidfight1.png" alt="expense-tracker1" key="1" height={500} width={250} />,
        <Image src="/covidfight2.png" alt="expense-tracker2" key="2" height={500} width={250} />,
        <Image src="/covidfight3.png" alt="expense-tracker3" key="3" height={500} width={250} />
    ];

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
                    <MobileProject title="Expense Tracker App" description="A finance managing app that allows you to track your day to day expenses easily and quickly. One can get meaningful and in-depth analysis and also generate reports."
                        techstack="Xamarin Android, Firebase, Google and Facebook Authentication, Typeform" slides={ExpenseTrackerslides} showGoogleStore={true}
                        livelink="https://play.google.com/store/apps/details?id=com.debweb.expensetracker&hl=en" codelink="https://github.com/Deba22/Expense-Tracker---Android-App" />
                    <MobileProject title="My Collection App" description="An android app(digital book) that consists of various captivating and realistic articles/stories written by Golda and Curie."
                        techstack="Xamarin Android, Firebase, Lottie Animation" slides={MyCollectionslides} showGoogleStore={false}
                        livelink="https://github.com/Deba22/MyCollection/blob/master/mycollection.apk" codelink="https://github.com/Deba22/MyCollection" />
                    <MobileProject title="Covid Fight App" description="An android app that helps you maintain social distance by alerting you when other people are too close so that you can move, and maintain social distance from them."
                        techstack="Xamarin Android, Bluetooth" slides={CovidFightslides} showGoogleStore={false}
                        livelink="https://github.com/Deba22/Covid-Fight-App/blob/master/covidfight.apk" codelink="https://github.com/Deba22/Covid-Fight-App" />
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
