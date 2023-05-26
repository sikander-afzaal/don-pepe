import { PieChart } from "../../components/PieChart";

const Distribution = () => {
  return (
    <div id="distribution" className="wrapper  mt-[60px] xl:mt-[150px]">
      <div className="contain lg:flex-row flex-col  justify-between items-center gap-5">
        <div className="flex justify-start max-w-[700px] items-center text-center lg:text-left lg:items-start flex-col gap-4">
          <h3 className="text-white font-bold leading-[1.2] text-3xl sm:text-[40px] 2xl:text-[50px]">
            Token Distribution
          </h3>
          <p className="text-white">
            At Don Pepe Coin, we keep the family first, ensuring our token
            distribution model protects investors, creators, and community
            members. After all, the strongest family rewards loyalty and honor,
            and Don Pepe stands at the top.
          </p>
          <div className="flex justify-start items-center lg:items-start  flex-col gap-3">
            <p className="text-white text-lg">
              <strong>Total Supply:</strong> 1 trillion Don Pepe tokens
            </p>
            <p className="text-white text-lg">
              <strong>Team:</strong> 5% (50 billion)
            </p>
            <p className="text-white text-lg">
              <strong>CEX listings and LPs:</strong> 10% (100 billion)
            </p>
            <p className="text-white text-lg">
              <strong>Presale and first LP:</strong> 85% (850 billion)
            </p>
          </div>
        </div>
        <div className="w-full max-w-[400px]">
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default Distribution;
