const Other = () => {
  return (
    <div className="wrapper mt-[60px] xl:mt-[150px]">
      <div className="contain xl:flex-row-reverse flex-col justify-between items-stretch gap-10">
        <div className="flex justify-start items-start flex-col gap-5">
          <h3 className="text-white font-bold leading-[1.2] text-3xl sm:text-[40px] 2xl:text-[50px]">
            A "Famiglia" Like No Other
          </h3>
          <p className="text-white">
            By joining Don Pepe, you're becoming part of the family, capiche? A
            family that values boldness, wit, and a dash of danger. Don Pepe is
            more than just a meme coin.
          </p>
          <p className="text-white">
            It's a bold statement about the power and independence of crypto.
          </p>
          <p className="text-white">
            It’s a shared secret handshake between those in the know and those
            stuck in the old ways of doing things.
          </p>
          <p className="text-white">
            Most of all, it's a way to connect with and join a family of
            like-minded hustlers and achievers.
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

export default Other;
