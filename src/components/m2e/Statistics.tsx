import { FC } from "react";
import { Button } from "../general/Button";
import Image from "next/image";

const Statistics: FC = () => {
  const StatsData = [
    {
      id: 1,
      color: "bg-[#9972F1] border border-white",
      text: "Airdrop to SDT holders: 50,000,000 – 5%",
    },
    {
      id: 2,
      color: "bg-[#FFD600]",
      text: "Public Sale :  200,000,000 – 20%",
    },
    {
      id: 3,
      color: "bg-[#F5FAFF]",
      text: "Liquidity: 150,000,000 (75% of generated fund)",
    },
    {
      id: 4,
      color: "bg-[#F72585]",
      text: "LReserve: 30,000,000 – 3%",
    },
    {
      id: 5,
      color: "bg-[#C4BCF3]",
      text: "Marketing: 50,000,000 – 5%",
    },
    {
      id: 6,
      color: "bg-[#CEDFC1]",
      text: "Development: 20,000,000 – 2%",
    },
    {
      id: 7,
      color: "bg-[#FEB169]",
      text: "Immediate CEx Listing: (25% of generated fund)",
    },
    {
      id: 8,
      color: "bg-[#A9FCFC]",
      text: "Core Team",
    },
    {
      id: 9,
      color: "bg-[#ACC3FD]",
      text: "Core Partners, Advisors & Consultants",
    },
  ];
  return (
    <div className="container pt-12 px-5 sm:px-10 pb-8 2xl:px-0 mx-auto bg-[#F5FAFF] mt-20">
      <p className="font-medium text-[#333333] text-sm sm:text-base lg:text-lg text-center">
        SFT Token Information
      </p>
      <h4 className="bg-gradient-600 bg-clip-text text-transparent-active font-bold sm:font-medium text-xl sm:text-3xl lg:text-5xl text-center mb-5 sm:mb-8 lg:mb-20 mt-2 lg:mt-6">
        Token supply, distribution and management
      </h4>
      <div className="bg-[#D3E5FE] sm:bg-[#F5FAFF] px-2 sm:px-0 py-3 sm:py-0 mb-5 sm:mb-10 lg:mb-20 mt-8">
        <h3 className="bg-gradient-600 bg-clip-text text-transparent-active font-extrabold text-3xl sm:text-4xl lg:text-5xl text-center">
          1,000,000,000 SFT
        </h3>
      </div>
      <div className="bg-gradient-600 flex flex-col sm:flex-row justify-between gap-8 px-4 sm:px-8 lg:px-28 py-24 rounded-3xl">
        <div className="basis-5/12">
          <Image
            src="/img/m2e/chart-graphic.svg"
            alt="Token Statistics"
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col basis-5/12">
          {StatsData.map((data) => (
            <div key={data.id} className="flex gap-5 mb-6">
              <div
                className={`w-7 h-7 sm:w-7 sm:h-7 lg:h-10 lg:w-10 ${data.color} my-auto rounded-md`}
              ></div>
              <p className="text-base sm:text-xl lg:text-2xl text-white">
                {data.text}
              </p>
            </div>
          ))}
          <div className="flex flex-row mt-8 gap-10">
            <Button className="bg-primary hover:bg-secondary-900 transition-colors font-semibold text-white w-44 sm:w-36 lg:w-44 py-2 sm:py-4 leading-7 text-sm sm:text-base lg:text-xl rounded-full">
              Buy SFT
            </Button>
            <Button className="border border-white hover:bg-primary/20 transition-colors w-44 sm:w-36 lg:w-44  py-2 sm:py-4 text-white font-semibold leading-7 text-sm sm:text-base lg:text-xl rounded-full">
              Litepaper
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
