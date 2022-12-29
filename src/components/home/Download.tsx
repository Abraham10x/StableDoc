import { FC } from "react";
import { Button } from "../general/Button";
import Image from "next/image";

const Download: FC = () => {
  return (
    <div className="bg-secondary-700 bg-download-bg bg-no-repeat bg-contain -mt-[32rem] relative pb-64">
      <div className="container px-10 pb-8 2xl:px-0 mx-auto pt-80">
        <div className="text-center flex flex-col gap-5">
          <h3 className="text-white font-bold w-1/2 text-[40px] leading-[3rem] mx-auto">
            Download our app and start your free trail to get started today!
          </h3>
          <p className="text-xl font-medium text-[#A9C5DE]">
            The best care for you – anywhere, anytime.
          </p>
          <div className="flex flex-row mt-5 gap-5 mx-auto">
            <Button className="bg-white font-semibold text-primary w-52 py-3 leading-7 text-base rounded-full">
              <div className="flex justify-center gap-3 mx-auto">
                <Image
                  src="/img/home/apple-logo.svg"
                  alt="Apple Store"
                  width={20}
                  height={20}
                />
                <p className="my-auto">App store</p>
              </div>
            </Button>
            <Button className="bg-primary font-semibold text-white w-52 py-3 leading-7 text-base rounded-full">
              <div className="flex justify-center gap-2">
                <Image
                  src="/img/home/google-play.svg"
                  alt="Google play store"
                  width={35}
                  height={35}
                />
                <p className="my-auto">Google Play</p>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
