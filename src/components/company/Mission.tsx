import Image from "next/image";
import { FC } from "react";

const Mission: FC = () => {
  return (
    <div className="container pt-12 px-10 pb-8 2xl:px-0 mx-auto mt-32">
      <div className="flex flex-col sm:flex-row justify-between">
        <div className="flex flex-col basis-[40%]">
          <p className="font-bold text-lg text-text-500">Our Mission</p>
          <h2 className="bg-gradient-600 bg-clip-text text-transparent-active text-[42px] leading-tight mt-8 font-bold">
            Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing
            elit.
          </h2>
          <div className="flex flex-row justify-between mt-10">
            <div className="flex flex-col">
              <h2 className="bg-gradient-600 bg-clip-text text-transparent-active font-bold text-4xl">
                20+
              </h2>
              <p className="text-lg text-text-300 mt-2">Years Experience</p>
            </div>
            <div className="flex flex-col">
              <h2 className="bg-gradient-600 bg-clip-text text-transparent-active font-bold text-4xl">
                483
              </h2>
              <p className="text-lg text-text-300 mt-2">Happy Csutomers</p>
            </div>
            <div className="flex flex-col">
              <h2 className="bg-gradient-600 bg-clip-text text-transparent-active font-bold text-4xl">
                10+
              </h2>
              <p className="text-lg text-text-300 mt-2">Projects Finished</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col basis-[42%]">
          <div className="flex flex-row">
            <Image
              src="/img/company/phone.svg"
              alt="phone-icon"
              className="mt-0 h-16"
              width={60}
              height={60}
            />
            <div className="flex flex-col ml-5">
              <h3 className="font-bold text-[26px] leading-tight text-text-300">
                24/7 Support
              </h3>
              <p className="font-normal text-xl text-text-500 mt-3">
                Lorem ipsum dolor sit amet doloroli sitiol conse ctetur
                adipiscing conse ctetur adipiscing elitdolor{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-row my-8">
            <Image
              src="/img/company/message.svg"
              alt="phone-icon"
              className="mt-0 h-16"
              width={60}
              height={60}
            />
            <div className="flex flex-col ml-5">
              <h3 className="font-bold text-[26px] leading-tight text-text-300">
                Lorem Ipsum
              </h3>
              <p className="font-normal text-xl text-text-500 mt-3">
                Lorem ipsum dolor sit amet doloroli sitiol conse ctetur
                adipiscing conse ctetur adipiscing elitdolor{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-row">
            <Image
              src="/img/company/badge.svg"
              alt="phone-icon"
              className="mt-0 h-16"
              width={60}
              height={60}
            />
            <div className="flex flex-col ml-5">
              <h3 className="font-bold text-[26px] leading-tight text-text-300">
                Lorem Ipsum
              </h3>
              <p className="font-normal text-xl text-text-500 mt-3">
                Lorem ipsum dolor sit amet doloroli sitiol conse ctetur
                adipiscing conse ctetur adipiscing elitdolor{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
