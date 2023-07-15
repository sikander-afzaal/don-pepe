import About from "./About";
import Dilema from "./Dilema";
import Distribution from "./Distribution";
import Hero from "./Hero";
import Other from "./Other";
import Roadmap from "./Roadmap";
import Tax from "./Tax";

const Home = () => {
  return (
    <>
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
