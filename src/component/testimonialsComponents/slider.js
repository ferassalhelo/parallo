import React, { useRef, useState } from "react";
import img1 from "../../imges/images.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination]);

export default function App() {
  return (
    <div className="container-flued mx-3 row">
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        freeMode={true}
        pagination={{
          clickable: true
        }}
        className="mySwiper"
      >
        <SwiperSlide className="col-12 col-md-6 col-xl-4">
          <div className="w-50 h-100 py-5 m-auto">
            <img className="w-100 " src={img1} />
          </div>
          <h2 className="text-white  text-uppercase font-weight-light my-0  ">
            praesent ornare
          </h2>
          <p className="text-white fn-20 mx-3 my-5 pb-5 ">
            vestibulum semper dolor sed elit mattis placerat cursus sed ac urna.
            mauris eget suscipit purus, id ullamcorper mi. mauris eu velit
            semper turpis semper.
          </p>
        </SwiperSlide>
        <SwiperSlide className="col-12 col-md-6 col-xl-4">Slide 2</SwiperSlide>
        <SwiperSlide className="col-12 col-md-6 col-xl-4">Slide 3</SwiperSlide>
        <SwiperSlide className="col-12 col-md-6 col-xl-4">Slide 4</SwiperSlide>
        <SwiperSlide className="col-12 col-md-6 col-xl-4">Slide 5</SwiperSlide>
      </Swiper>
    </div>
  );
}
