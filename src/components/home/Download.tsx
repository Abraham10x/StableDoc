import { FC } from "react";
import { LinkButton } from "../general/Button";
import Image from "next/image";

const Download: FC = () => {
  return (
    <div className="bg-secondary-700 bg-mobile-download sm:bg-download-bg bg-no-repeat bg-contain -mt-[24rem] sm:-mt-[20.6rem] lg:-mt-[30rem] 2xl:-mt-[32rem] relative pb-[3.8rem] sm:pb-16 xl:pb-40 2xl:pb-64">
      <div className="container px-5 sm:px-10 pb-8 2xl:px-0 mx-auto pt-10 sm:pt-10 lg:pt-36 xl:pt-40 2xl:pt-80">
        <div className="text-center flex flex-col gap-5 sm:gap-2 xl:gap-5">
          <h3 className="text-white font-bold w-full sm:w-4/6 xl:w-1/2 text-base sm:text-3xl lg:text-[40px] lg:leading-[3rem] mx-auto">
            Download our app and get started today!
          </h3>
          <p className="text-xl font-medium text-[#A9C5DE] hidden sm:block w-full sm:w-2/3 lg:w-2/5 mx-auto">
            Are you tired of driving long distances to the hospital only to go
            wait in long line to see your doctor? Download our app today to
            consult a doctor from the comfort of your home or office.
          </p>
          <div className="flex flex-row mt-1 sm:mt-5 gap-5 mx-auto">
            <LinkButton
              link="https://play.google.com/store/apps/details?id=com.sdtapp.customer"
              target="_blank"
              className="bg-white hover:bg-secondary-900 transition-colors font-semibold text-primary w-36 sm:w-44 lg:w-52 py-2 sm:py-3 leading-7 text-sm sm:text-base rounded-full"
            >
              <div className="flex justify-center gap-3 mx-auto">
                <Image
                  src="/img/home/apple-logo.svg"
                  alt="Apple Store"
                  width={20}
                  height={20}
                />
                <p className="my-auto">App store</p>
              </div>
            </LinkButton>
            <LinkButton
              link="https://apps.apple.com/ng/app/stabledoc/id1602960544"
              target="_blank"
              className="bg-primary hover:bg-secondary-900 transition-colors font-semibold text-white w-[9.8rem] sm:w-44 lg:w-52 py-2 sm:py-3 leading-7 text-sm sm:text-base rounded-full"
            >
              <div className="flex justify-center gap-1 sm:gap-2">
                <Image
                  src="/img/home/google-play.svg"
                  alt="Google play store"
                  width={35}
                  height={35}
                />
                <p className="my-auto">Google Play</p>
              </div>
            </LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
