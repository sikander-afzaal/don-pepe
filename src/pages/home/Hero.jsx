const Hero = () => {
  return (
    <div className="wrapper pt-[150px] xl:pt-[240px]">
      <div className="contain xl:flex-row flex-col justify-start items-center text-center xl:text-left xl:items-stretch gap-10">
        <div className="flex justify-start items-center xl:items-start flex-col max-w-[700px] gap-5">
          <h3 className="text-white font-bold leading-[1.2] text-3xl sm:text-[40px] 2xl:text-[60px]">
            Don Pepe Coin: Where Memes Meet Mobsters
          </h3>
          <p className="text-white">
            Welcome to Don Pepe – the meme coin that mingles the audacity of
            internet memes with the intricate charm and ruthless effectiveness
            of the Italian underground!
          </p>
          <p className="text-white">
            Don Pepe is a daring and imaginative leader. He’s worked hard to
            unite local families, using internet memes and a touch of Italian
            muscle to grow his empire. With the intriguing mystique of mob
            culture backing him up, Don Pepe is no cafone. Now, he’s taken his
            skills to crypto, growing his family and enticing gains for the
            community.
          </p>
          <button className="ctaBtn">PINKSALE</button>
        </div>
        <video
          src="/hero.mp4"
          playsInline
          autoPlay
          muted
          controls
          loop
          className="w-full max-w-[700px] xl:w-1/2 object-cover rounded-xl"
        ></video>
      </div>
    </div>
  );
};

export default Hero;
