import { Carousel } from '3d-react-carousal';
import styles from '../styles/MobileCarousel.module.css';
function MobileCarousel({ mobileSlides }) {
    try {
        return (
            <div className={styles.divHeight}>
                    <Carousel slides={mobileSlides} autoplay={true} interval={5000} />
            </div>
        )
    }
    catch (error) {

    }
}

export default MobileCarousel



