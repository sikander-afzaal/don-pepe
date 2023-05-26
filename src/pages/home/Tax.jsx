import React from "react";

const Tax = () => {
  return (
    <div id="tax" className="wrapper  lg:mt-0 mt-10">
      <div className="contain justify-start items-start  flex-col gap-5">
        <h3 className="text-white font-bold leading-[1.2] text-3xl sm:text-[40px] 2xl:text-[50px]">
          Tax
        </h3>
        <p className="text-white">
          Don Pepe Coin is designed to reward the "famiglia" first and foremost,
          helping to grow the community and secure a foothold in the crypto
          scene. Every time someone buys or sells Don Pepe tokens, a portion of
          the transaction goes towards marketing and rewarding holders!
        </p>
        <div className="flex justify-start items-start flex-col">
          <p className="text-white font-bold text-xl">Buy tax: 3%</p>
          <p className=" text-white">1% to marketing, 2% to holders</p>
        </div>
        <div className="flex justify-start items-start flex-col">
          <p className="text-white font-bold text-xl">Sale tax: 5%</p>
          <p className=" text-white">2% to marketing, 3% to holders</p>
        </div>
      </div>
    </div>
  );
};

export default Tax;
