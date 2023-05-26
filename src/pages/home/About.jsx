const About = () => {
  return (
    <div className="wrapper mt-[60px] xl:mt-[150px]">
      <div className="contain xl:flex-row flex-col justify-between items-stretch gap-10">
        <div className="flex justify-start items-start flex-col gap-5">
          <h3 className="text-white font-bold leading-[1.2] text-3xl sm:text-[40px] 2xl:text-[50px]">
            Don Pepe: Capo Dei Capi
          </h3>
          <p className="text-white">
            We're committed to crafting a coin that's not just fun and games,
            but knows how to do the dirty work. Don Pepe isn’t stopping until
            he’s transformed the family’s territory into the biggest in crypto.
          </p>
          <p className="text-white">
            Whether you're a crypto boss who ran these streets for years or just
            stepping into the world of crypto like a young cugine, Don Pepe Coin
            is your ticket to success. Become an associate of the "famiglia"
            today, and let's build something that would make old Capone proud!
          </p>
        </div>
        <img
          src="/test.webp"
          className="w-full max-w-[700px] xl:max-w-none xl:w-1/2 self-center object-cover rounded-xl"
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
