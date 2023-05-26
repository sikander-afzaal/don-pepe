const Dilema = () => {
  return (
    <div
      id="dilemma"
      className="wrapper mt-[60px] xl:mt-[150px] relative isolate"
    >
      <div className="absolute top-1/2  -translate-x-1/2  left-0 w-full max-w-[400px] aspect-square rounded-full blur-[200px] bg-shadow  opacity-60 -z-10"></div>
      <div className="absolute bottom-0  translate-x-1/2  right-0 w-full max-w-[400px] aspect-square rounded-full blur-[200px] bg-shadow  opacity-80 -z-10"></div>
      <div className="contain xl:flex-row flex-col justify-between items-stretch gap-10">
        <div className="flex justify-start items-start flex-col gap-5">
          <h3 className="title">Don Pepe’s Dilemma</h3>
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
