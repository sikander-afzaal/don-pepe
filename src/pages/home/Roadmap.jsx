const Roadmap = () => {
  return (
    <div id="roadmap" className="mt-[60px] xl:mt-[150px] wrapper">
      <div className="contain flex-col justify-center items-center gap-10">
        <div className="text-center">
          <h2 className="text-white font-bold leading-[1.2] text-3xl sm:text-[40px] 2xl:text-[50px]">
            Roadmap
          </h2>
          <p className="text-white max-w-[800px]">
            Are you ready to pledge your loyalty to the Don Pepe family? Join
            our "famiglia" today, and together, we'll have the world of crypto
            paying the family protection money for years to come!
          </p>
        </div>
        <div className="grid mt-6 md:mt-10 grid-cols-1 sm:grid-cols-[1fr__1fr] gap-y-14 w-full relative max-w-full">
          <div className="absolute left-0 sm:left-1/2 -translate-x-1/2 top-0 w-[1px] bg-white h-full"></div>
          <div className="gap-3 w-full   flex justify-start items-start sm:items-end flex-col relative pl-9 sm:pr-9 sm:text-right text-left">
            <div className="rounded-full bg-white w-6 aspect-square absolute -translate-x-1/2 top-0.5 left-0 sm:left-full"></div>
            <h3 className="text-white font-bold text-2xl">
              Establishing Territory (2Q ‘23)
            </h3>
            <p className="text-white text-base md:text-lg opacity-70">
              - Family Founded
            </p>
            <p className="text-white text-base md:text-lg opacity-70">
              - Website and Content
            </p>
            <p className="text-white text-base md:text-lg opacity-70">
              - Token Generation
            </p>
            <p className="text-white text-base md:text-lg opacity-70">
              - Team KYC
            </p>
            <p className="text-white text-base md:text-lg opacity-70">
              - Smart Contract Audit
            </p>
          </div>
          <div className="w-full h-full sm:block hidden"></div>
          <div className="w-full h-full sm:block hidden"></div>
          <div className="w-full gap-3  flex justify-start items-start flex-col relative pl-9 text-left">
            <div className="rounded-full bg-white w-6 aspect-square absolute translate-x-1/2 top-0.5 right-full"></div>
            <h3 className="text-white font-bold text-2xl">
              Taking Control (3Q ‘23)
            </h3>
            <p className="text-white text-base md:text-lg opacity-70">
              - Family Growth Stage
            </p>
            <p className="text-white text-base md:text-lg opacity-70">
              - Presale Marketing
            </p>
            <p className="text-white text-base md:text-lg opacity-70">
              - Strategic Partnership Announcements
            </p>
            <p className="text-white text-base md:text-lg opacity-70">
              - Strategic Marketing Initiatives
            </p>
            <p className="text-white text-base md:text-lg opacity-70">
              - Don Pepe Live
            </p>
          </div>
          <div className="w-full gap-3  flex justify-start items-start sm:items-end flex-col relative pl-9 sm:pr-9 sm:text-right text-left">
            <div className="rounded-full bg-white w-6 aspect-square absolute -translate-x-1/2 top-0.5 left-0 sm:left-full"></div>
            <h3 className="text-white font-bold text-2xl">
              Supreme Power (4Q ‘23 and beyond)
            </h3>
            <p className="text-white text-base md:text-lg opacity-70">
              - Exclusive Family Events
            </p>
            <p className="text-white text-base md:text-lg opacity-70">
              - CMC/CG Listing
            </p>
            <p className="text-white text-base md:text-lg opacity-70">
              - New LPs
            </p>
            <p className="text-white text-base md:text-lg opacity-70">
              - Don Pepe Achieves #1 Crypto Family
            </p>
          </div>
          <div className="w-full h-full sm:block hidden"></div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
