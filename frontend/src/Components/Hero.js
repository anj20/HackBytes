import React from "react";
import { useEffect } from "react";
import img from "../assets/Heroimg.svg";
// data aos
import AOS from "aos";
import "aos/dist/aos.css";
const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="hero">
      <div className="container mx-auto sm:px-4">
        <div className="flex flex-wrap ">
          <div className="md:w-1/2 pr-4 pl-4">
            <div className="copy" data-aos="fade-up" data-aos-duration="3000">
              <div className="text-label">
                Change your buisness with DollarSense
              </div>
              <div className="text-hero-bold">
                Grow up your buisness with DollarSense
              </div>
              <div className="text-hero-regular">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              </div>
              <div className="cta">
                <a
                  href="#"
                  className="inline-block rounded py-1 px-3  btn btn-primary"
                >
                  Explore Now
                </a>
                <a
                  href="#"
                  className="inline-block rounded py-1 px-3 mx-2 btn btn-secondary"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div
            className="md:w-1/2 pr-4 pl-4"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="image">
              <img src={img} className=" w-full" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
