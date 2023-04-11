/* eslint-disable no-irregular-whitespace */
import Image from "next/image";
import { FC } from "react";

const Beneficts: FC = () => {
  const chooseData = [
    {
      id: 1,
      image: "/img/home/square-icon.svg",
      header: "Flexibility",
      body: `Our suits of apps are user friendly and scalable on 
      different devices. And our telehealth platform can be accessed 
      from anywhere at anytime.`,
    },
    {
      id: 2,
      image: "/img/home/calendar-icon.svg",
      header: "Inclusiveness",
      body: `Equal experiences for eveyone regardless 
      of location, or language. Our doctors are drawn 
      from all over the globe.`,
    },
    {
      id: 3,
      image: "/img/home/ticket-icon.svg",
      header: "Security",
      body: `Patient confidentiality and seurity of patient 
      medical record is top in our priority.`,
    },
  ];
  return (
    <div className="bg-mobile-benefit sm:bg-beneficts-bg bg-no-repeat bg-cover bg-top pb-40 pt-24 sm:pt-36 lg:pt-44 xl:pt-80 bottom-40 sm:bottom-32 lg:bottom-72 relative">
      <div className="container 2xl:px-0 mx-auto px-5 sm:px-10 lg:px=20 xl:px-28 pt-10 sm:pt-20 lg:pt-36 pb-48 sm:pb-20 lg:pb-64">
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="flex flex-col gap-5">
            {/* <p className="font-medium text-[#1A4187] text-sm sm:text-lg">
              Beneficts
            </p> */}
            <h3 className="font-medium text-text-700 text-2xl sm:text-3xl lg:text-[44px] leading-7">
              Why choose us?
            </h3>
          </div>
          <p className="text-base sm:text-lg lg:text-lg text-text-600 w-full mt-3 sm:mt-0 sm:w-2/4 lg:w-2/6">
            Our patients choose us because we are unique in our service
            offerings. Our suites of healthcare services are vast and expansive
            yet with very easy to use virtual platforms.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-7 mt-16">
          {chooseData.map((data) => (
            <div
              key={data.id}
              className="bg-white px-10 py-12 flex flex-col gap-5"
            >
              <Image
                src={data.image}
                alt="squares icon"
                width={60}
                height={60}
              />
              <h3 className="font-medium text-lg sm:text-xl lg:text-2xl text-text-700">
                {data.header}
              </h3>
              <p className="text-base sm:text-lg text-text-600">{data.body}</p>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-xl border border-secondary-400 px-3 sm:px-8 lg:px-14 py-6 sm:py-12 grid grid-cols-1 gap-y-6 sm:grid-cols-3 mt-14 justify-evenly relative top-0 sm:top-8 lg:top-20 z-30">
          <div className=" flex flex-col text-center gap-3 py-0 xl:py-3">
            <h5 className="text-primary text-xl sm:text-lg lg:text-xl">
              Web App
            </h5>
            <h4 className="text-primary text-xl sm:text-3xl lg:text-5xl">
              3k+
            </h4>
            <p className="text-xs sm:text-base lg:text-lg text-text-500">
              People have joined
            </p>
          </div>
          <div className=" flex flex-col text-center mt-2 px-0 gap-3 xl:px-36 border-r border-l border-[#CACACA]">
            <h5 className="text-primary text-xl sm:text-lg lg:text-xl">
              Apple Store
            </h5>
            <h4 className="text-primary text-xl sm:text-3xl lg:text-5xl">
              1k+
            </h4>
            <p className="text-xs sm:text-base lg:text-lg text-text-500">
              People have joined
            </p>
          </div>
          <div className=" flex flex-col text-center gap-3 py-0 xl:py-3">
            <h5 className="text-primary text-xl sm:text-lg lg:text-xl">
              Google Play Store
            </h5>
            <h4 className="text-primary text-xl sm:text-3xl lg:text-5xl">
              1k+
            </h4>
            <p className="text-xs sm:text-base lg:text-lg text-text-500">
              People have joined
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beneficts;
