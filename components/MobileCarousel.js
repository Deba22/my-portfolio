import {Carousel} from '3d-react-carousal';
function MobileCarousel({mobileSlides}) {
    let slides = [
        mobileSlides];
    
    return (
        <div>
            <Carousel slides={mobileSlides} autoplay={true} interval={5000}/>
        </div>
    )
}

export default MobileCarousel



