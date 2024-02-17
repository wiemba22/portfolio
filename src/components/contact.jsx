import shape from "../assets/shape.png";
import fb from "../assets/fb.svg";
import insta from "../assets/insta.svg";
import link from "../assets/link.svg";
import git from "../assets/GitHub.svg";
import whats from "../assets/WhatsApp.svg";
import arrow from "../assets/Arrow.svg";
import { Link } from "react-router-dom";
import { React, useState, useEffect } from "react";
const Contact = () => {
    return (
        <section
            id="Contact"
            className="bg-black relative w-screen h-fit  flex flex-col items-center justify-start  p-20 gap-16"
        >
            <img
                src={shape}
                alt="shape"
                className="absolute bottom-[10px] left-[-70px]  w-1/2 phone:w-1/4"
            />

            <h1 className=" text-3xl phone:text-4xl md:text-7xl font-poppins bg-primary w-fit px-4 font-bold">
                Contact Me
            </h1>
            <div className="flex phone:flex-wrap items-center justify-center w-full gap-4 md:gap-12 lg:gap-24">
  <a href="https://www.facebook.com/wiem.benamor.56" target="_blank" rel="noreferrer">
    <img src={fb} alt="fb" className="w-full " />
  </a>
  <a href="https://www.instagram.com/wiembenamor/" target="_blank" rel="noreferrer">
    <img src={insta} alt="insta" className="w-full " />
  </a>
  <a href="https://www.linkedin.com/in/wiem-ben-amor/" target="_blank" rel="noreferrer">
    <img src={link} alt="link" className="w-full " />
  </a>
  <a href="https://wa.me/21690324260" target="_blank" rel="noreferrer">
    <img src={whats} alt="whats" className="w-full " />
  </a>
  <a href="https://github.com/wiemba22" target="_blank" rel="noreferrer">
    <img src={git} alt="link" className="w-full " />
  </a>
</div>


            <div className=" font-pops flex flex-col items-center">
                <a href="mailto:wiembenamor001@gmail.com">
                    <span className="text-white hover:text-primary">
                        wiembenamor001@gmail.com
                    </span>
                </a>
                <p className="text-white text-[13px] sm:l">Adress: Mourouj 5 Ben Arous,Tunisie</p>
                <Link
                    to="/"
                    onClick={() => {
                        window.scrollTo(0, 0);
                    }}
                >
                    <img src={arrow} alt="arrow" className="pt-10" />
                </Link>
                <p className="text-gray-400 text-[14px] sm:text-[16px] absolute bottom-0 left-0 pl-5 ">
                    © 2024 Wiem Ben Amor. All copyrights reserved{" "}
                </p>
            </div>
        </section>
    );
};
export default Contact;
