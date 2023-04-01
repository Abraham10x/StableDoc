import Image from "next/image";
import { FC } from "react";

const Token: FC = () => {
  const StepsData = [
    {
      id: 1,
      image: "/img/m2e/money-exchange.png",
      imageSize: 270,
      class: "bg-[#F5FAFF]",
      header: "Swap SFT for SDT",
      body: `SDT converted can then be used to pay for 
      consultation on StableDoc telehealth platforms`,
    },
    {
      id: 2,
      image: "/img/m2e/cash-payment.png",
      imageSize: 200,
      class: "sm:flex-col-reverse bg-step-card",
      header: "Buy/Sell SFT",
      body: "SFT can be withdrawn and sold on exchanges",
    },
    {
      id: 3,
      image: "/img/m2e/money-savings.png",
      imageSize: 180,
      class: "bg-[#F5FAFF]",
      header: "Stake or Farm SFT",
      body: `SFT holders will be able to Stake and Farm 
      SFT or SDT on our Staking Platform: app.stabledoc.com`,
    },
  ];
  return (
    <div className="container pt-12 px-5 sm:px-10 pb-8 2xl:px-0 mx-auto mt-10">
      <p className="font-medium text-[#333333] text-sm sm:text-base lg:text-lg text-center">
        SFT Token
      </p>
      <h3 className="bg-gradient-600 bg-clip-text text-transparent-active font-bold sm:font-medium text-xl sm:text-3xl lg:text-5xl text-center mb-20 mt-2 lg:mt-6">
        What can I do with StableFit Token?
      </h3>
      <div className="flex flex-col sm:flex-row mx-auto gap-10">
        {StepsData.map((data) => (
          <div
            key={data.id}
            className={`flex flex-col ${data.class} pt-4 px-4 sm:px-1 rounded-[20px] basis-[30%] mx-auto justify-between gap-y-24`}
          >
            <Image
              className="mx-auto"
              src={data.image}
              alt="read and register"
              width={data.imageSize}
              height={data.imageSize}
            />
            <div className="">
              <h4 className="bg-gradient-600 bg-clip-text text-transparent-active font-medium mt-4 text-2xl lg:text-3xl text-center sm:text-left sm:w-3/4 mx-auto">
                {data.header}
              </h4>
              <p className="mt-4 mb-10 text-text-500 text-base text-center sm:text-left w-full sm:w-3/4 mx-auto">
                {data.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Token;
