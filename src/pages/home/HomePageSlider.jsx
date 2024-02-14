import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HomePageSlider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src="https://insanelygoodrecipes.com/wp-content/uploads/2022/12/Pink-Mini-Cakes-with-Vanilla-and-Berries.jpg" />
        </div>
        <div>
          <img src="https://i.ytimg.com/vi/uH6oC5bcpho/maxresdefault.jpg" />
        </div>
      </Slider>
    </div>
  );
}

export default HomePageSlider;
