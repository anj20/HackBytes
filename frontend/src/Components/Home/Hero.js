import React from "react";
import { useEffect } from "react";
// data aos
import AOS from "aos";
import "aos/dist/aos.css";
import img from "../../img/Heroimg.svg";
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
                Navigate Your Finances, Find Balance, and Flourish Financially!
              </div>
              <div className="text-hero-bold">
                Empower Your Financial Journey with Dollar Sense.
              </div>
              <div className="text-hero-regular">
                The Key to Your Financial Success - Track, Budget, and Prosper!
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
