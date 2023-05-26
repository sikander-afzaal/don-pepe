import {
  faFacebookF,
  faInstagram,
  faSpotify,
  faTelegram,
  faTiktok,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowUp, faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="wrapper sm:p-0 pb-16  mt-[60px] lg:mt-[100px] relative">
      <div className="absolute group overflow-hidden  bottom-5 right-5 rounded-full isolate">
        <div className="absolute -z-10 bg-blueGr rounded-full left-0 top-0 h-[52px] w-[52px] transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
        <div className="absolute -z-10 bg-btnGr rounded-full left-0 top-0 h-[52px] w-[52px] transition-all duration-300 opacity-100 group-hover:opacity-0"></div>
        <FontAwesomeIcon
          onClick={() => window.scrollTo(0, 0)}
          icon={faArrowUp}
          className="hover:bg-transparent border-2 border-solid border-btn rounded-full h-7 w-7 box-border p-3 cursor-pointer bg-btn text-white "
        />
      </div>
      <div className="contain pt-[40px] sm:pt-[60px] pb-5 justify-start items-center flex-col">
        <footer className="w-full flex justify-center items-center">
          <img
            src="/logo.png"
            className="w-[260px] mb-3 object-contain"
            alt=""
          />
        </footer>
        <div className="flex flex-col w-full justify-center items-center gap-5 mt-14 sm:mt-5">
          <div className="flex justify-center items-center flex-wrap gap-5">
            {" "}
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
          <div className="justify-center flex  items-center w-full gap-5">
            <p className="text-sm text-white sm:text-base text-green font-normal">
              ©DonPepe2023
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
