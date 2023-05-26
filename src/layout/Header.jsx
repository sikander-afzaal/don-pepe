import {
  faFacebookF,
  faInstagram,
  faSpotify,
  faTelegram,
  faTiktok,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faMusic, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useState } from "react";

const Header = () => {
  const [headerToggle, setHeaderToggle] = useState(false);
  const [bg, setBg] = useState(false);
  useEffect(() => {
    //header bg when you scroll
    const showBg = () => {
      if (window.scrollY > 60) {
        setBg(true);
      } else {
        setBg(false);
      }
    };
    window.addEventListener("scroll", showBg);
    return () => {
      window.removeEventListener("scroll", showBg);
    };
  }, []);
  //header movement depending on scroll
  useEffect(() => {
    const body = document.querySelector("html");
    if (headerToggle) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  }, [headerToggle]);
  return (
    <header
      className={`wrapper fixed top-0 left-0 z-50 transition-all duration-500 bg-[#07040b]`}
    >
      {headerToggle && (
        <div
          onClick={() => setHeaderToggle(false)}
          className="fixed top-0 left-0 w-full h-full z-[88] bg-black opacity-60"
        ></div>
      )}
      <div className="contain py-3 justify-between items-center gap-5">
        <img
          src="/logo.png"
          className={`${
            bg ? "w-[90px]" : "w-[100px] xl:w-[150px]"
          } object-contain transition-all duration-300`}
          alt=""
        />
        <nav
          className={` overflow-y-auto xl:border-none border-l-2 border-solid border-white  xl:overflow-visible  xl:static fixed top-0 transition-all duration-1000 ${
            headerToggle ? "right-0" : "-right-[900px]"
          } h-full xl:w-auto xl:max-w-none w-full max-w-full sm:max-w-[400px] flex justify-start xl:items-center gap-6 pb-8  pt-[7rem] sm:pt-[6rem] px-8 xl:p-0 z-[89] xl:gap-5  xl:flex-row flex-col items-center sm:items-start bg-black xl:bg-transparent`}
        >
          <a
            onClick={() => setHeaderToggle(false)}
            href="#dilemma"
            className="text-white font-semibold text-base"
          >
            Dilemma
          </a>
          <a
            onClick={() => setHeaderToggle(false)}
            href="#famiglia"
            className="text-white font-semibold text-base"
          >
            Famiglia
          </a>
          <a
            onClick={() => setHeaderToggle(false)}
            href="#about"
            className="text-white font-semibold text-base"
          >
            About
          </a>
          <a
            href="#distribution"
            className="text-white font-semibold text-base"
          >
            Distribution
          </a>
          <a
            onClick={() => setHeaderToggle(false)}
            href="#tax"
            className="text-white font-semibold text-base"
          >
            Tax
          </a>
          <a
            onClick={() => setHeaderToggle(false)}
            href="#roadmap"
            className="text-white font-semibold text-base"
          >
            Roadmap
          </a>
          <div className="flex justify-center items-center gap-3 flex-wrap">
            <a href="https://t.me/pepissimo" target={"blank"}>
              <FontAwesomeIcon
                className="text-white text-2xl hover:text-lightPink transition-all"
                icon={faTelegram}
              />
            </a>
            <a href="https://twitter.com/thepepissimo" target={"blank"}>
              <FontAwesomeIcon
                className="text-white text-2xl hover:text-lightPink transition-all"
                icon={faTwitter}
              />
            </a>
            <a href="https://www.tiktok.com/@thepepissimo" target={"blank"}>
              <FontAwesomeIcon
                className="text-white text-2xl hover:text-lightPink transition-all"
                icon={faTiktok}
              />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100093023433454"
              target={"blank"}
            >
              <FontAwesomeIcon
                className="text-white text-2xl hover:text-lightPink transition-all"
                icon={faFacebookF}
              />
            </a>
            <a href="https://www.instagram.com/thepepissimo" target={"blank"}>
              <FontAwesomeIcon
                className="text-white text-2xl hover:text-lightPink transition-all"
                icon={faInstagram}
              />
            </a>
            <a href="https://www.youtube.com/@PepissimoDance" target={"blank"}>
              <FontAwesomeIcon
                className="text-white text-2xl hover:text-lightPink transition-all"
                icon={faYoutube}
              />
            </a>
            <a
              href="https://open.spotify.com/track/1iCrmpTq8452K5X4UcAve2"
              target={"blank"}
            >
              <FontAwesomeIcon
                className="text-white text-2xl hover:text-lightPink transition-all"
                icon={faSpotify}
              />
            </a>
            <a
              href="https://music.apple.com/us/album/pepissimo-dance/1688552034?i=1688552035"
              target={"blank"}
            >
              <FontAwesomeIcon
                className="text-white text-2xl hover:text-lightPink transition-all"
                icon={faMusic}
              />
            </a>
          </div>
        </nav>
        <FontAwesomeIcon
          onClick={() => setHeaderToggle((prev) => !prev)}
          icon={headerToggle ? faXmark : faBars}
          className="relative z-[90] text-white xl:hidden block text-2xl cursor-pointer"
        />
      </div>
    </header>
  );
};

export default Header;
