import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";
import { useEffect } from 'react'
function WebProject({ title, description, techstack, desktopimage, mobileimage, livelink, codelink, isBorderRemove }) {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);
    const imageVariants = {
        visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
        hidden: { opacity: 0, scale: 0 }
    }
    return (
        <div className="project">
            <div className="project-images">
                <motion.img
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    variants={imageVariants}
                    alt="tmdb screenshot" loading="lazy" className="big" src={desktopimage} />
                <motion.img
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    transition={{ duration: 0.3 }}
                    variants={imageVariants}
                    alt="tmdb mobile screenshot" loading="lazy" className={"small " + (isBorderRemove ? 'remove-small' : null)} src={mobileimage} />
            </div>
            <div className="project-details">
                <h4>{title}</h4>
                <p className="project-desc">{description}</p>
                <p className="stack"><b>Tech Stack: </b>{techstack}</p>
                <div className="buttons">
                    <a rel="noreferrer" target="_blank" href={livelink} className="button">Live Preview</a>
                    <a rel="noreferrer" target="_blank" href={codelink} className="buttonText">View Code</a>
                </div>
            </div>
        </div>
    )
}

export default WebProject
