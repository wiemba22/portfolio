import React from "react";
import shape from "../assets/shape.png"
import { Swiper, SwiperSlide } from "swiper/react";
import Project from "./project";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { prjs } from "../const";
import wave from '../assets/wavewhite.svg'; 

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const Projects = () => (
  <section id='Projects' className="relative pb-10 w-screen h-fit flex flex-col md:gap-8 gap-4 items-center pb-32 bg-black ">
    <div className='w-full'>
      <img src={wave} alt="wave" className='w-full' />
    </div>
    
    <h1 className="text-primary text-4xl  font-pops font-bold h-fit w-fit ">Projects</h1>
    
    <img src={shape} alt="shape" className=" absolute  top-48 left-[-100px] w-1/4" />
    <div className="w-full h-fit ">
      <Swiper
        centeredSlides={true}
        spaceBetween={30}
        slidesPerView={"auto"}
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        modules={[EffectCoverflow, Navigation, Pagination]}
      >
        {prjs.map((prj) => (
          <SwiperSlide>
            <Project
              title={prj.title}
              img={prj.img}
              description={prj.description}
              techs={prj.techs}
            ></Project>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    <div className="slider-controler h-fit">
      <div className="swiper-button-prev slider-arrow">
        <ion-icon name="arrow-back-outline"></ion-icon>
      </div>
      <div className="swiper-button-next slider-arrow ">
        <ion-icon name="arrow-forward-outline"></ion-icon>
      </div>
    </div>
  </section>
);

export default Projects;