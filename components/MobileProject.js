
import Image from 'next/image'
import dynamic from "next/dynamic";
const MobileCarousel = dynamic(
    () => import('../components/MobileCarousel'),
    { ssr: false }
)

function MobileProject({ title, description, techstack, slides, livelink, codelink, showGoogleStore }) {

    return (
        <div className="project">
            <div className="mobile-project-images">
                <MobileCarousel mobileSlides={slides} />
            </div>
            <div className="project-details">
                <h4>{title}</h4>
                <p className="project-desc">{description}</p>
                <p className="stack"><b>Tech Stack: </b>{techstack}</p>
                <div className="buttons">
                    {showGoogleStore ? (
                        <a rel="noreferrer" target="_blank" href={livelink}>
                            <Image src="/google-play-badge.png" alt="google-play" width={157} height={60} />
                        </a>
                    ) :
                        (
                            <a rel="noreferrer" target="_blank" href={livelink} className="button">Download APK</a>
                        )}
                    <a rel="noreferrer" target="_blank" href={codelink} className="buttonText">View Code</a>
                </div>
            </div>
        </div>
    )
}

export default MobileProject
