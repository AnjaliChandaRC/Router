import React, { useRef } from "react";
import { sliderData } from "../content/content";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const SliderCard = () => {
  const slider = useRef();
  var settings = {
    dots: false,
    autoplay: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: sliderData.length <= 2 ? sliderData.length : 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 text-center m-auto">
              <h4 className="fs-2 fw-bold">Slider Start</h4>
            </div>
          </div>
          <Slider {...settings} ref={slider}>
            {sliderData.map((obj, index) => {
              return (
                <div key={index} className="pt-3 pt-sm-5">
                  <div className="slider_bg me-sm-4">
                    <img className="w-100" src={obj.imgUrl} alt="" />
                    <div className="p-3">
                      <h3 className="fs-5 fw-bold">{obj.heading}</h3>
                      <p className="fs-6 fw-normal">{obj.para}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default SliderCard;
