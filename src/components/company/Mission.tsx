import Image from "next/image";
import { FC } from "react";

const Mission: FC = () => {
  return (
    <div className="container pt-12 px-5 sm:px-10 pb-8 2xl:px-0 mx-auto mt-0 sm:mt-7 lg:mt-32">
      <div className="flex flex-col sm:flex-row justify-between">
        <div className="flex flex-col basis-[40%]">
          <p className="text-sm font-medium sm:font-bold sm:text-base lg:text-lg xl:text-4xl bg-gradient-600 bg-clip-text text-transparent-active">
            Our Mission
          </p>
          <h2 className="text-text-300 text-base sm:text-xl lg:text-2xl sm:leading-tight mt-3 sm:mt-5">
            To democratize healthcare delivery system, ensuring standard care
            for our patients anywhere, anytime at an affordable fee.
          </h2>
          <div className="flex flex-row justify-between mt-4 sm:mt-7 lg::mt-10">
            <div className="flex flex-col">
              <h2 className="bg-gradient-600 bg-clip-text text-transparent-active font-bold text-xl sm:text-2xl lg:text-3xl">
                2+
              </h2>
              <p className="text-xs sm:text-sm lg:text-lg font-medium sm:font-normal text-text-300 mt-1 sm:mt-2">
                Years Experience
              </p>
            </div>
            <div className="flex flex-col">
              <h2 className="bg-gradient-600 bg-clip-text text-transparent-active font-bold text-xl sm:text-2xl lg:text-3xl">
                2K+
              </h2>
              <p className="text-xs sm:text-sm lg:text-lg font-medium sm:font-normal text-text-300 mt-1 sm:mt-2">
                Happy Customers
              </p>
            </div>
            <div className="flex flex-col">
              <h2 className="bg-gradient-600 bg-clip-text text-transparent-active font-bold text-xl sm:text-2xl lg:text-3xl">
                2K+
              </h2>
              <p className="text-xs sm:text-sm lg:text-lg font-medium sm:font-normal text-text-300 mt-1 sm:mt-2">
                Successful Consultation
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:basis-2/4 xl:basis-[42%] mt-10">
          <div className="flex flex-row">
            <Image
              src="/img/support/phone-icon.svg"
              alt="phone-icon"
              className="mt-0 lg:h-16 lg:w-auto h-11 w-11 sm:w-14 sm:h-14"
              width={60}
              height={60}
            />
            <div className="flex flex-col ml-5">
              <h3 className="font-bold text-base sm:text-xl lg:text-[26px] sm:leading-tight bg-gradient-600 bg-clip-text text-transparent-active">
                24/7 Support
              </h3>
              <div className="font-normal text-[15px] sm:text-lg lg:text-xl text-text-500 mt-3">
                <p>
                  Proactive customer care service, anticipating customers' needs
                  and reaching out with soluctions even before customers demand
                  for them
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row my-8">
            <Image
              src="/img/company/message.svg"
              alt="phone-icon"
              className="mt-0 lg:h-16 lg:w-auto h-11 w-11 sm:w-14 sm:h-14"
              width={60}
              height={60}
            />
            <div className="flex flex-col ml-5">
              <h3 className="capitalize font-bold text-base sm:text-xl lg:text-[26px] sm:leading-tight bg-gradient-600 bg-clip-text text-transparent-active">
                Video Conferencing
              </h3>
              <div className="font-normal text-[15px] sm:text-lg lg:text-xl text-text-500 mt-3">
                <p>
                  Get instant or scheduled face-to-face medical advise,
                  prescription, tests and referrals.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            <Image
              src="/img/company/badge.svg"
              alt="phone-icon"
              className="mt-0 lg:h-16 lg:w-auto h-11 w-11 sm:w-14 sm:h-14"
              width={60}
              height={60}
            />
            <div className="flex flex-col ml-5">
              <h3 className="capitalize font-bold text-base sm:text-xl lg:text-[26px] sm:leading-tight bg-gradient-600 bg-clip-text text-transparent-active">
                AI diagnostics
              </h3>
              <div className="font-normal text-[15px] sm:text-lg lg:text-xl text-text-500 mt-3">
                <p>
                  Perform symptom assessments with our physician-trained
                  artificial intelligence health assessor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
