import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();
  const startTimer = () => {
    let end = new Date("6/24/2023 5:00 PM");
    interval = setInterval(() => {
      let _second = 1000;
      let _minute = _second * 60;
      let _hour = _minute * 60;
      let _day = _hour * 24;
      let now = new Date();
      let nowUTC = new Date(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        now.getUTCHours(),
        now.getUTCMinutes(),
        now.getUTCSeconds()
      );
      let distance = end - nowUTC;
      var days = Math.floor(distance / _day);
      var hours = Math.floor((distance % _day) / _hour);
      var minutes = Math.floor((distance % _hour) / _minute);
      var seconds = Math.floor((distance % _minute) / _second);
      if (distance < 0) {
        clearInterval(interval.current);
        return;
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });
  return (
    <div className="wrapper pt-[150px] xl:pt-[240px] relative isolate">
      <div className="absolute top-1/2  translate-x-1/2  right-0 w-full max-w-[400px] aspect-square rounded-full blur-[200px] bg-shadow  opacity-80 -z-10"></div>
      <div className="absolute top-0  opacity-70  -translate-x-1/2  left-0 w-full max-w-[400px] aspect-square rounded-full blur-[200px] bg-shadow -z-10"></div>
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
      <div className="contain flex-col gap-4 justify-start items-center mt-5">
        <div className="grid grid-cols-4 gap-8 mt-4">
          <div className="flex justify-start items-center flex-col gap-3">
            <h4 className="  rounded-xl text-title text-green grid place-items-center text-[34px] sm:text-[55px] xl:text-[63px] font-bold ">
              {timerDays}
            </h4>
            <p className="text-white font-bold">Days</p>
          </div>
          <div className="flex justify-start items-center flex-col gap-3">
            <h4 className="  rounded-xl text-title text-green grid place-items-center text-[34px] sm:text-[55px] xl:text-[63px] font-bold ">
              {timerHours}
            </h4>
            <p className="text-white font-bold">Hours</p>
          </div>
          <div className="flex justify-start items-center flex-col gap-3">
            <h4 className="  rounded-xl text-title text-green grid place-items-center text-[34px] sm:text-[55px] xl:text-[63px] font-bold ">
              {timerMinutes}
            </h4>
            <p className="text-white font-bold">Minutes</p>
          </div>
          <div className="flex justify-start items-center flex-col gap-3">
            <h4 className="  rounded-xl text-title text-green grid place-items-center text-[34px] sm:text-[55px] xl:text-[63px] font-bold ">
              {timerSeconds}
            </h4>
            <p className="text-white font-bold">Seconds</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-start items-center gap-5">
          <a href="#" target="blank">
            <img
              src="/bsc.webp"
              alt=""
              className="max-w-[150px] object-contain"
            />
          </a>
          <a href="#" target="blank">
            <img
              src="/smile.webp"
              alt=""
              className="max-w-[150px] object-contain"
            />
          </a>
          <a href="#" target="blank">
            <img
              src="/pancake.png"
              alt=""
              className="max-w-[250px] object-contain"
            />
          </a>
        </div>
        <div className="grid max-w-[700px] sm:mt-5 grid-cols-1 sm:grid-cols-3 w-full gap-5">
          <button className="ctaBtn">Audit</button>
          <button className="ctaBtn">KYC</button>
          <button className="ctaBtn">SAFU</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
