import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

function ImageSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="./images/slider-badging.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="./images/slider-badag.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="./images/slider-scale.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="./images/slider-scales.jpg" alt="" />
      </Wrap>
    </Carousel>
  );
}

export default ImageSlider;

const Carousel = styled(Slider)`
  margin-top: 20px;

  ul li button {
    :before {
      color: rgb(150, 158, 171);
      font-size: 10px;
    }
  }

  li.slick-active button::before {
    color: white;
  }

  button {
    z-index: 1;
  }
  .slick-list {
    overflow: visible;
  }
`;

const Wrap = styled.div`
  cursor: pointer;
  img {
    border: 4px solid transparent;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 /69%) 0 29px 36px -10px,
      rgb(0 0 0 /73%) 0 16px 10px -10px;

    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`;
