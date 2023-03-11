import Image from "next/image";
import { FC } from "react";
import { BiCheck } from "react-icons/bi";

const Timeline: FC = () => {
  const Q1 = [
    "Research into problems",
    "Proof of concept",
    "Website v1.0",
    "Solution possibilities",
    "Assemble team",
    "Solutions design",
    "Development of StableDoc Tokens",
    "Airdrops",
    "Whitelisting",
    "Design, Develop and launch initial website",
    "Initial Campaigns",
    "Token Marketing",
    "Structure / Architecture",
    "Business requirements",
    "Presale",
    "Listing on DEX",
    "Develop Social Media & Community Platforms",
    "Trynos Token Audit",
    "Website v2.0",
    "Whitepaper v2.0",
    "Engage high-quality Crypto influencers",
    "Telehealth Maketing Strategy",
    "StableDoc App Pilot Testing",
    "Strategic Enrollment Plan",
  ];
  const Q2 = [
    "Staking",
    "Farming",
    "CertiK Audit",
    "StableDoc Mobile Apps Beta Testing",
    "StableDoc Telehealth Web App Development",
    "Main App Launch (Andriod/iOS)",
    "StableFit Move2Earn App Launch",
    "Forms Parnterships",
    "StableDoc Pilot Rollouts",
    "Funding Rounds",
    "Doctors Onboarding",
  ];
  const Q3 = [
    "Finalize Product Development",
    "StableDoc Pilot Rollout",
    "Integration of Payment Gateway",
    "Website v3.0",
    "Doctors Onboarding",
    "Telehealth Marketing",
    "StableDoc Token Marketing",
  ];
  const Q4 = [
    "Main App Launch (Android/iOS), Web App",
    "Integration of StableDoc AI Diagnositcs",
    "Forms Parnterships",
    "StableDoc Token Marketing",
    "CEX Listing",
    "Funding Rounds",
  ];
  const Q5 = [
    "StableDoc Token Marketing",
    "CEX Listing",
    "Onboarding of US, Indian, UK and Canadian Doctors",
  ];
  const Q6 = ["StableDoc Token Buy back and burn"];
  return (
    <div className="bg-secondary-700 pb-0 mt-14">
      <div className="container pt-12 px-5 sm:px-10 pb-0 2xl:px-0 mx-auto mt-20">
        <h3 className="bg-gradient-600 bg-clip-text text-transparent-active font-medium text-xl sm:text-3xl lg:text-6xl text-center mt-8">
          Our Updated Roadmap
        </h3>
        <p className="text-[#5A6FA0] font-medium text-base sm:text-xl lg:text-2xl mt-5 text-center">
          Complex healthcare challenges Simplified by StableDoc. Clear road map
          to achieve
        </p>
        <div className="relative mt-10 sm:mt-32">
          <div className="w-1 sm:w-2 lg:w-4 bg-secondary-600 opacity-25 left-0 sm:left-2/4 absolute mx-auto h-full"></div>
          <div className="w-full relative ml-4 sm:ml-0">
            <div className="w-full sm:w-2/4">
              <h4 className="bg-timeline-bg bg-clip-text text-transparent-active font-bold text-sm sm:text-xl lg:text-4xl">
                Q1 - Q4 2021
              </h4>
              <ul className="list-disc mt-2 sm:mt-4 pl-8 lg:pl-10">
                {Q1.map((data, index) => (
                  <li
                    key={index}
                    className="text-xs sm:text-base lg:text-xl mt-1"
                  >
                    <div className="flex gap-1">
                      <p>{data}</p>
                      <BiCheck className="text-primary text-xs sm:text-base lg:text-2xl hidden sm:block" />
                    </div>
                  </li>
                ))}
              </ul>
              <div className="hidden sm:block">
                <Image
                  className="relative sm:-right-5 lg:-right-8 xl:-right-9 2xl:-right-11 z-20"
                  src="/img/sdt/timeline-left.svg"
                  alt="line"
                  width={1500}
                  height={1000}
                />
              </div>
              <div className="sm:hidden relative">
                <Image
                  className="relative -left-7 z-20"
                  src="/img/sdt/mobile-timeline.svg"
                  alt="line"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
          {/* second quarter */}
          <div className="w-full relative ml-4 sm:ml-0">
            <div className="relative right-0 sm:-right-[0%] w-full text-left sm:text-right">
              <h4 className="bg-timeline-bg bg-clip-text text-transparent-active font-bold text-sm sm:text-xl lg:text-4xl sm:mr-48 lg:mr-52 2xl:mr-64">
                Q1 - Q4 2022
              </h4>
              <ul className="list-disc mt-2 sm:mt-4 pl-8 sm:pl-10 relative sm:left-[52%] lg:left-[55%] xl:left-[65%] 2xl:left-[69%]">
                {Q2.map((data, index) => (
                  <li
                    key={index}
                    className="text-xs sm:text-base lg:text-xl mt-1"
                  >
                    <div className="flex gap-1">
                      <p>{data}</p>
                      <BiCheck className="text-primary text-xs sm:text-base lg:text-2xl hidden sm:block" />
                    </div>
                  </li>
                ))}
              </ul>
              <div className="hidden sm:block sm:w-1/2 relative left-[42%] lg:left-[45.5%]">
                <Image
                  className="relative sm:-right-11 lg:-right-7 xl:-right-9 2xl:-right-11 z-20"
                  src="/img/sdt/timeline-right.svg"
                  alt="line"
                  width={1500}
                  height={1000}
                />
              </div>
              <div className="sm:hidden relative">
                <Image
                  className="relative -left-7 z-20"
                  src="/img/sdt/mobile-timeline.svg"
                  alt="line"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>

          {/* third quarter */}
          <div className="w-full relative ml-4 sm:ml-0">
            <div className="w-full sm:w-2/4">
              <h4 className="bg-timeline-bg bg-clip-text text-transparent-active font-bold text-sm sm:text-xl lg:text-4xl">
                Q1 2023
              </h4>
              <ul className="list-disc mt-2 sm:mt-4 pl-8 lg:pl-10">
                {Q3.map((data, index) => (
                  <li
                    key={index}
                    className="text-xs sm:text-base lg:text-xl mt-1"
                  >
                    <div className="flex gap-1">
                      <p>{data}</p>
                      {index < 5 && (
                        <BiCheck className="text-primary text-xs sm:text-base lg:text-2xl hidden sm:block" />
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              <div className="hidden sm:block">
                <Image
                  className="relative sm:-right-5 lg:-right-8 xl:-right-9 2xl:-right-11 z-20"
                  src="/img/sdt/timeline-left.svg"
                  alt="line"
                  width={1500}
                  height={1000}
                />
              </div>
              <div className="sm:hidden relative">
                <Image
                  className="relative -left-7 z-20"
                  src="/img/sdt/mobile-timeline.svg"
                  alt="line"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>

          {/* fourth quater */}
          <div className="w-full relative ml-4 sm:ml-0">
            <div className="relative right-0 sm:-right-[0%] w-full text-left sm:text-right">
              <h4 className="bg-timeline-bg bg-clip-text text-transparent-active font-bold text-sm sm:text-xl lg:text-4xl sm:mr-56 lg:mr-[17.2rem] 2xl:mr-[20.5rem]">
                Q2 2023
              </h4>
              <ul className="list-disc mt-2 sm:mt-4 pl-8 sm:pl-10 relative sm:left-[52%] lg:left-[55%] xl:left-[65%] 2xl:left-[69%]">
                {Q4.map((data, index) => (
                  <li
                    key={index}
                    className="text-xs sm:text-base lg:text-xl mt-1"
                  >
                    <div className="flex gap-1">
                      <p>{data}</p>
                      {/* <BiCheck className="text-primary text-xs sm:text-base lg:text-2xl hidden sm:block" /> */}
                    </div>
                  </li>
                ))}
              </ul>
              <div className="hidden sm:block sm:w-1/2 relative left-[42%] lg:left-[45.5%]">
                <Image
                  className="relative sm:-right-11 lg:-right-7 xl:-right-9 2xl:-right-11 z-20"
                  src="/img/sdt/timeline-right.svg"
                  alt="line"
                  width={1500}
                  height={1000}
                />
              </div>
              <div className="sm:hidden relative">
                <Image
                  className="relative -left-7 z-20"
                  src="/img/sdt/mobile-timeline.svg"
                  alt="line"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>

          {/* fifth Quarter */}
          <div className="w-full relative ml-4 sm:ml-0">
            <div className="w-full sm:w-2/4">
              <h4 className="bg-timeline-bg bg-clip-text text-transparent-active font-bold text-sm sm:text-xl lg:text-4xl">
                Q3 2023
              </h4>
              <ul className="list-disc mt-2 sm:mt-4 pl-8 lg:pl-10">
                {Q5.map((data, index) => (
                  <li
                    key={index}
                    className="text-xs sm:text-base lg:text-xl mt-1"
                  >
                    <div className="flex gap-1">
                      <p>{data}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="hidden sm:block">
                <Image
                  className="relative sm:-right-5 lg:-right-8 xl:-right-9 2xl:-right-11 z-20"
                  src="/img/sdt/timeline-left.svg"
                  alt="line"
                  width={1500}
                  height={1000}
                />
              </div>
              <div className="sm:hidden relative">
                <Image
                  className="relative -left-7 z-20"
                  src="/img/sdt/mobile-timeline.svg"
                  alt="line"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>

          {/* sixth quarter */}
          <div className="w-full relative ml-4 sm:ml-0 pb-10 sm:pb-32">
            <div className="relative right-0 sm:-right-[0%] w-full text-left sm:text-right">
              <h4 className="bg-timeline-bg bg-clip-text text-transparent-active font-bold text-sm sm:text-xl lg:text-4xl sm:mr-32 lg:mr-[17.2rem] 2xl:mr-[20.5rem]">
                Q4 2023
              </h4>
              <ul className="list-disc mt-2 sm:mt-4 pl-8 sm:pl-10 relative sm:left-[52%] lg:left-[55%] xl:left-[65%] 2xl:left-[69%]">
                {Q6.map((data, index) => (
                  <li
                    key={index}
                    className="text-xs sm:text-base lg:text-xl mt-1"
                  >
                    <div className="flex gap-1">
                      <p>{data}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="hidden sm:block sm:w-1/2 relative left-[42%] lg:left-[45.5%]">
                <Image
                  className="relative sm:-right-11 lg:-right-7 xl:-right-9 2xl:-right-11 z-20"
                  src="/img/sdt/timeline-right.svg"
                  alt="line"
                  width={1500}
                  height={1000}
                />
              </div>
              <div className="sm:hidden relative">
                <Image
                  className="relative -left-7 z-20"
                  src="/img/sdt/mobile-timeline.svg"
                  alt="line"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
