const Dilema = () => {
  return (
    <div className="wrapper mt-[60px] xl:mt-[150px]">
      <div className="contain xl:flex-row flex-col justify-between items-stretch gap-10">
        <div className="flex justify-start items-start flex-col gap-5">
          <h3 className="text-white font-bold leading-[1.2] text-3xl sm:text-[40px] 2xl:text-[50px]">
            Don Pepe’s Dilemma
          </h3>
          <p className="text-white">
            Don Pepe, our capo, has a table to fill. He aspires to be the number
            one syndicate in crypto, just like how his mafia ancestors grew
            their family territories. He works tirelessly every day, managing
            his "family business" efficiently, growing the family name and
            holdings.
          </p>
          <p className="text-white">
            But his empire needs more soldiers. His offer is enticing,
            promising, and rewarding. But there are still seats vacant at his
            table. Where is everybody?
          </p>
          <p className="text-white">
            Don Pepe knows how to get people's attention, and he’s making the
            crypto community an offer they can’t refuse.
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

export default Dilema;
