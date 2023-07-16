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
  // const path = useRef();
  // const coin = useRef();
  // // const wrapper = useRef();
  // useLayoutEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

  //   var myAnim = gsap.timeline({
  //     defaults: { duration: 2 },
  //     scrollTrigger: {
  //       trigger: path.current,
  //       scrub: 2,
  //       start: "top 15%",
  //       end: "bottom bottom",
  //       // markers: true,
  //     },
  //   });
  //   myAnim.to(coin.current, {
  //     ease: "none",
  //     motionPath: {
  //       path: path.current,
  //       align: path.current,
  //       alignOrigin: [0.5, 0.5],
  //       end: 0.99,
  //       start: -0.025,
  //     },
  //   });
  // }, []);
  return (
    <>
      {/* <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 3000"
        preserveAspectRatio="none"
        height="6500px"
        width="700px"
        className="absolute left-1/2 -translate-x-1/2 top-0 z-20"
      >
        <path
          stroke="#B3B3B3"
          strokeWidth="2px"
          strokeMiterlimit={10}
          className="st0"
          points="886,357 660,784 822,1162 1086,1421 737,1760 625,2293 772,2560 "
        />
        <path
          ref={path}
          stroke="#B3B3B3"
          strokeWidth="2px"
          strokeMiterlimit={10}
          strokeDasharray={3}
          className="st1"
          points="887,361 680,788 810,1180 1098.98,1455.83 749.98,1794.83 628,2328 769,2560 "
        />
      </svg>
      <img
        ref={coin}
        src="/nft.svg"
        alt=""
        className="w-[100px] object-contain"
      /> */}
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
