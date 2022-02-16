import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-red-100 to-tranparent bottom-0 z-10" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        swipeable={true}
      >
        <div>
          <img src="https://links.papareact.com/gi1" alt="" loading="lazy" />
        </div>
        <div>
          <img src="https://links.papareact.com/6ff" alt="" loading="lazy" />
        </div>
        <div>
          <img src="https://links.papareact.com/7ma" alt="" loading="lazy" />
        </div>
      </Carousel>
    </div>
  );
}
