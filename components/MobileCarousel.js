import { Carousel } from '3d-react-carousal';
import styles from '../styles/MobileCarousel.module.css';
function MobileCarousel({ mobileSlides }) {

    return (
        <div className={styles.divHeight}>
            <Carousel slides={mobileSlides} autoplay={true} interval={5000} />
        </div>
    )
}

export default MobileCarousel



