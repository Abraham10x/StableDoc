import { FC } from "react";
import { Button } from "../general/Button";
import Image from "next/image";

const Statistics: FC = () => {
  const StatsData = [
    {
      id: 1,
      color: "bg-[#9972F1] border border-white",
      text: "Presale – 50%",
    },
    {
      id: 2,
      color: "bg-[#FFD600]",
      text: "Liquidity pool – 22%",
    },
    {
      id: 3,
      color: "bg-[#4CC9F0]",
      text: "Team vesting -13%",
    },
    {
      id: 4,
      color: "bg-[#F72585]",
      text: "Locked – 15%",
    },
  ];
  return (
    <div className="bg-secondary-700 pb-20">
      <div className="container pt-12 px-10 pb-8 2xl:px-0 mx-auto mt-20">
        <h3 className="bg-gradient-600 bg-clip-text text-transparent-active font-medium text-4xl text-center mb-20 mt-8">
          Token Metrics on launch
        </h3>
        <div className="bg-gradient-600 flex flex-col sm:flex-row justify-between gap-8 px-28 py-24 rounded-3xl">
          <div className="basis-5/12">
            <Image
              src="/img/m2e/chart-graphic.svg"
              alt="Token Statistics"
              width={500}
              height={500}
            />
          </div>
          <div className="flex flex-col basis-5/12 my-auto">
            {StatsData.map((data) => (
              <div key={data.id} className="flex gap-5 mb-6">
                <div
                  className={`h-10 w-10 ${data.color} my-auto rounded-md`}
                ></div>
                <p className="text-4xl text-white">{data.text}</p>
              </div>
            ))}
            <div className="flex flex-row mt-8 gap-10">
              <Button className="bg-primary font-semibold text-white w-44 py-4 leading-7 text-xl rounded-full">
                Buy SFT
              </Button>
              <Button className="border border-white w-44 py-4 text-white font-semibold leading-7 text-xl rounded-full">
                Litepaper
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
