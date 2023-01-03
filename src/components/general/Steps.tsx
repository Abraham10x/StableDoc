import Image from "next/image";
import { FC } from "react";
import { Button } from "./Button";
import AppStore from "./AppStore";

const Steps: FC = () => {
  const StepsData = [
    {
      id: 1,
      image: "/img/partners/process-1.svg",
      header: "Download and register",
      body: "Download The IOS Or Android Versions Of Our App And Sign Up as a doctor",
    },
    {
      id: 2,
      image: "/img/partners/process-2.svg",
      header: "Get booked",
      body: "Get booked by a paatient and provide medical care solutions",
    },
    {
      id: 3,
      image: "/img/partners/process-3.svg",
      header: "Earn SDT/Cash",
      body: "Earn cash or SDT for your services rendereds",
    },
  ];
  return (
    <>
      <div className="bg-secondary-700 sm:bg-white pt-10 sm:pt-0">
        <div className="container px-5 sm:px-10 pb-8 2xl:px-0 mx-auto sm:mt-16 lg:mt-32">
          <div className="text-center mx-auto">
            <h3 className="text-xl font-bold sm:font-normal sm:text-4xl lg:text-6xl text-text-700">
              Get Started in Just Three Steps{" "}
            </h3>
            <p className="mt-5 font-normal text-base sm:text-lg lg:text-xl">
              You don’t need any prior Crypto knowledge to begin to earn Crypto
              on StableFit app. All you need to do is to download, register and
              start earning
            </p>
          </div>
        </div>
        <div className="bg-secondary-700 mt-24 pb-8 ">
          <div className="container px-5 sm:px-10 2xl:px-0 mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-10 relative sm:bottom-12">
              {StepsData.map((data) => (
                <div
                  key={data.id}
                  className="flex flex-col bg-white pt-4 px-3 sm:px-1 border border-secondary-400 rounded-[20px] mx-auto justify-between"
                >
                  <Image
                    className="mx-auto"
                    src={data.image}
                    alt="read and register"
                    width={200}
                    height={200}
                  />
                  <div className="">
                    <h4 className="text-text-700 font-medium mt-4 text-xl sm:text-2xl text-center">
                      {data.header}
                    </h4>
                    <p className="mt-4 mb-10 text-text-500 text-base text-center w-full sm:w-3/4 mx-auto">
                      {data.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <AppStore />
        </div>
      </div>
    </>
  );
};
export default Steps;
