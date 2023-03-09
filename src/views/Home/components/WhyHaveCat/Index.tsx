import "./why-have-cat.scss";
import img1 from "./../../../../assets/image1.png";
import img2 from "./../../../../assets/image2.png";
import img3 from "./../../../../assets/image3.png";

export default function WhyHaveCat() {
    return (
        <div className="why-have-cat">
            <div className="why-have-cat__contents">
                <h2 className="title">Why should you have a cat?</h2>
                <h3 className="sub-title">Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety leves</h3>
                <a href="" className="read-more">
                    Read More
                    <span className="material-icons">arrow_right_alt</span>
                </a>
            </div>
            <div className="why-have-cat__image-gallery">
                <div className="gallery">
                    <div className="img1">
                        <img src={img2} alt="Gallery Image 1" />
                    </div>
                    <div className="img2">
                        <img src={img1} alt="Gallery Image 2" />
                    </div>
                    <div className="img3">
                        <img src={img3} alt="Gallery Image 3" />
                    </div>
                </div>
            </div>
        </div>
    )
};