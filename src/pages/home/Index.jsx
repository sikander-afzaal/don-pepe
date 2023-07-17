import About from "./About";
import Dilema from "./Dilema";
import Distribution from "./Distribution";
import Hero from "./Hero";
import Other from "./Other";
import Roadmap from "./Roadmap";
import Tax from "./Tax";

import { gsap, ScrollTrigger, MotionPathPlugin } from "gsap/all";
import { useLayoutEffect, useRef } from "react";

const Home = () => {
  const path = useRef();
  const coin = useRef();
  // const wrapper = useRef();
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

    var myAnim = gsap.timeline({
      defaults: { duration: 2 },
      scrollTrigger: {
        trigger: path.current,
        scrub: 2,
        start: "top 5%%",
        end: "bottom bottom",
        // markers: true,
      },
    });
    myAnim.to(coin.current, {
      ease: "none",
      motionPath: {
        path: path.current,
        align: path.current,
        alignOrigin: [0.5, 0.5],
        end: 0.99,
        start: -0.025,
      },
    });
  }, []);
  return (
    <>
      {window.innerWidth > 640 ? (
        <svg
          preserveAspectRatio="none"
          className="absolute lg:h-[5200px] h-[6000px] sm:w-[604px] w-[300px]  left-1/2 -translate-x-1/2 top-[100px] -z-30"
          viewBox="0 0 604 5200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M594 0.333333C590.318 0.333333 587.333 3.3181 587.333 7C587.333 10.6819 590.318 13.6667 594 13.6667C597.682 13.6667 600.667 10.6819 600.667 7C600.667 3.3181 597.682 0.333333 594 0.333333ZM11 7000.33C7.31815 7000.33 4.33338 7003.32 4.33338 7007C4.33338 7010.68 7.31815 7013.67 11 7013.67C14.6819 7013.67 17.6667 7010.68 17.6667 7007C17.6667 7003.32 14.6819 7000.33 11 7000.33ZM520.462 972.837L521.564 973.426L521.688 973.194L521.708 972.932L520.462 972.837ZM280.135 1423.25L279.033 1422.66L278.715 1423.26L279.038 1423.85L280.135 1423.25ZM594 1999.04L594.878 1999.93L595.548 1999.27L595.097 1998.44L594 1999.04ZM11.0002 2574.83L10.1219 2573.94L9.57214 2574.48L9.81197 2575.22L11.0002 2574.83ZM247.536 3299.21L248.712 3299.63L248.857 3299.22L248.724 3298.82L247.536 3299.21ZM11.0002 3958.58L9.82357 3958.15L9.53116 3958.97L10.1916 3959.53L11.0002 3958.58ZM593.999 4453.1L595.249 4453.1L595.249 4452.52L594.807 4452.15L593.999 4453.1ZM594 5474.66L594.68 5475.71L595.25 5475.34L595.25 5474.66L594 5474.66ZM11.0001 5853.1L10.3195 5852.05L9.75011 5852.42L9.75011 5853.1L11.0001 5853.1ZM592.754 6.9051L519.215 972.743L521.708 972.932L595.246 7.0949L592.754 6.9051ZM519.359 972.249L279.033 1422.66L281.238 1423.84L521.564 973.426L519.359 972.249ZM279.038 1423.85L592.902 1999.64L595.097 1998.44L281.233 1422.65L279.038 1423.85ZM593.121 1998.15L10.1219 2573.94L11.8786 2575.72L594.878 1999.93L593.121 1998.15ZM9.81197 2575.22L246.347 3299.59L248.724 3298.82L12.1885 2574.44L9.81197 2575.22ZM246.359 3298.78L9.82357 3958.15L12.1767 3959L248.712 3299.63L246.359 3298.78ZM10.1916 3959.53L593.19 4454.06L594.807 4452.15L11.8087 3957.62L10.1916 3959.53ZM592.749 4453.1L592.75 5474.66L595.25 5474.66L595.249 4453.1L592.749 4453.1ZM593.319 5473.61L10.3195 5852.05L11.6807 5854.15L594.68 5475.71L593.319 5473.61ZM9.75011 5853.1L9.75005 7007L12.25 7007L12.2501 5853.1L9.75011 5853.1Z"
            fill="#A1B86C"
          />
          <path
            ref={path}
            d="M591.453 28L511.766 916.074L278.983 1365.58L602 1941.43L2.00004 2517.29L245.433 3241.76L2.00002 3901.21L601.999 4395.79L602 5417.48L2.00007 5795.96L2.00005 6950"
            stroke="#A1B86C"
            strokeWidth="2.5"
            strokeDasharray="5 10 15 20"
          />
        </svg>
      ) : (
        <svg
          className="absolute h-[6000px] w-[300px]  left-1/2 -translate-x-1/2 top-[100px] -z-30"
          preserveAspectRatio="none"
          viewBox="0 0 304 6923"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            ref={path}
            d="M296.727 0.999999L256.883 889.074L140.492 1338.58L302 1914.43L2.00005 2490.29L123.717 3214.76L2.00004 3874.21L302 4368.79L302 5390.48L2.00006 5768.96L2.00005 6923"
            stroke="#A1B86C"
            strokeWidth="2.5"
            strokeDasharray="5 10 15 20"
          />
        </svg>
      )}

      <img
        ref={coin}
        src="/nft.svg"
        alt=""
        className="w-[100px] object-contain -z-20"
      />
      <div className="contain mx-auto mt-[125px] xl:mt-[175px]">
        <video
          src="/trailer.mp4"
          className="w-full object-contain aspect-video"
          autoPlay
          controls
          muted
          playsInline
          loop
        ></video>
      </div>
      <Hero />
      <Dilema />
      <Other />
      <About />

      <Distribution />
      <Tax />
      <Roadmap />
    </>
  );
};

export default Home;
