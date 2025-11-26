"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Image from "next/image";

const PartnersSection = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 8,
    autoplay: true,
    speed: 30000,
    autoplaySpeed: 0,
    cssEase: "linear",
  };
  return (
    <div className='slider-container max-w-full lg:px-80 mt-20 max-md:px-2'>
      <h1 className='text-center mb-10 text-gray-400 text-2xl'>Our Friends!</h1>
      <Slider {...settings}>
        <div>
          <Image src={"/aave.png"} alt='aave' width={150} height={150} />
        </div>
        <div>
          <Image src={"/metamask.png"} alt='aave' width={150} height={150} />
        </div>
        <div>
          <Image src={"/coinbase.png"} alt='aave' width={150} height={150} />
        </div>
        <div>
          <Image src={"/aave.png"} alt='aave' width={150} height={150} />
        </div>
        <div>
          <Image src={"/metamask.png"} alt='aave' width={150} height={150} />
        </div>
        <div>
          <Image src={"/coinbase.png"} alt='aave' width={150} height={150} />
        </div>
        <div>
          <Image src={"/aave.png"} alt='aave' width={150} height={150} />
        </div>
        <div>
          <Image src={"/metamask.png"} alt='aave' width={150} height={150} />
        </div>
      </Slider>
    </div>
  );
};

export default PartnersSection;
