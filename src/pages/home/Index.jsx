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
      <Hero />
      <Dilema />
      <Other />
      <About />
      <div className="contain mx-auto my-10 sm:my-[200px]">
        <video
          src="/video.mp4"
          className="w-full object-contain aspect-video"
          autoPlay
          controls
          muted
          playsInline
          loop
        ></video>
      </div>
      <Distribution />
      <Tax />
      <Roadmap />
    </>
  );
};

export default Home;
