import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img01 from "../assets/hero-slide-imgs/01.jpg"
import img02 from "../assets/hero-slide-imgs/02.jpg"
import img03 from "../assets/hero-slide-imgs/03.jpg"
import img04 from "../assets/hero-slide-imgs/04.jpg"
import img05 from "../assets/hero-slide-imgs/05.jpg"
import img06 from "../assets/hero-slide-imgs/06.jpg"
import img07 from "../assets/hero-slide-imgs/07.jpg"

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    fade: true,
    cssEase: 'linear'
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img 
            src={img01} 
            alt="Image 1" 
            className="w-full h-96 object-cover rounded-lg shadow-xl"
          />
        </div>
        <div>
          <img 
            src={img02} 
            alt="Image 2" 
            className="w-full h-96 object-cover rounded-lg shadow-xl"
          />
        </div>
        <div>
          <img 
            src={img03} 
            alt="Image 3" 
            className="w-full h-96 object-cover rounded-lg shadow-xl"
          />
        </div>
        <div>
          <img 
            src={img04} 
            alt="Image 4" 
            className="w-full h-96 object-cover rounded-lg shadow-xl"
          />
        </div>
        <div>
          <img 
            src={img05} 
            alt="Image 5" 
            className="w-full h-96 object-cover rounded-lg shadow-xl"
          />
        </div>
        <div>
          <img 
            src={img06} 
            alt="Image 6" 
            className="w-full h-96 object-cover rounded-lg shadow-xl"
          />
        </div>
        <div>
          <img 
            src={img07} 
            alt="Image 7" 
            className="w-full h-96 object-cover rounded-lg shadow-xl"
          />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;