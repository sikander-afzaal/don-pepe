const Other = () => {
  return (
    <div
      id="famiglia"
      className="wrapper mt-[60px] xl:mt-[150px] isolate relative"
    >
      <div className="absolute top-full  opacity-70  translate-x-1/2  right-0 w-full max-w-[400px] aspect-square rounded-full blur-[200px] bg-shadow -z-10"></div>
      <div className="contain xl:flex-row-reverse flex-col justify-between items-stretch gap-10">
        <div className="flex justify-start items-start flex-col gap-5">
          <h3 className="title">A "Famiglia" Like No Other</h3>
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
