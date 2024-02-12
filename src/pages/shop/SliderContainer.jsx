import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { linksArray } from "../../utils/linksArray";
import CategoryLink from "./CategoryLink";

function SliderContainer() {
  const settings = {
    // dots: true,
    infinite: false,
    // centerMode: true,
    variableWidth: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // initialSlide: 0,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 4,
    //       slidesToScroll: 1,
    //       infinite: false,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 4,
    //       slidesToScroll: 2,
    //     },
    //   },
    // ],
  };

  //   let settings = {
  //     className: "center",
  //     infinite: false,
  //     centerPadding: "100px",
  //     slidesToShow: 10,
  //     swipeToSlide: true,
  //     responsive: [
  //       {
  //         breakpoint: 768,
  //         settings: {
  //           slidesToShow: 5,
  //           slidesToScroll: 4,
  //           infinite: false,
  //           dots: false,
  //         },
  //       },
  //       {
  //         breakpoint: 600,
  //         settings: {
  //           slidesToShow: 6,
  //           slidesToScroll: 2,
  //           initialSlide: 2,
  //         },
  //       },
  //       {
  //         breakpoint: 480,
  //         settings: {
  //           slidesToShow: 4,
  //           slidesToScroll: 1,
  //         },
  //       },
  //     ],
  //   };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {linksArray.map((link) => {
          return <CategoryLink key={link.name} {...link} />;
        })}
      </Slider>
    </div>
  );
}

export default SliderContainer;
