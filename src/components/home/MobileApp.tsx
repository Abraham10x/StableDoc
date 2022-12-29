import { FC } from "react";
import { Button } from "../general/Button";
import Image from "next/image";

const MobileApp: FC = () => {
  return (
    <div className="bg-secondary-900">
      <div className="container 2xl:px-0 mx-auto flex flex-col sm:flex-row justify-between gap-8 px-28 py-36">
        <div className="basis-5/12">
          <Image
            src="/img/home/mobile-app.png"
            alt="Token Statistics"
            width={600}
            height={600}
          />
        </div>
        <div className="flex flex-col basis-5/12 gap-8 my-auto">
          <h3 className="font-extrabold text-4xl text-[#689CFD]">
            The best care for you – anywhere, anytime.
          </h3>
          <p className="text-2xl text-white font-normal">
            Skip the waiting room and talk to a doctor right away, when you need
            to. We provide instant, quality and affordable healthcare delivery
            24/7.
          </p>
          <div className="grid grid-cols-2 w-4/5 gap-y-11 mt-5">
            <Button className="bg-primary font-semibold text-white w-52 py-3 leading-7 text-base rounded-full">
              Get Started
            </Button>
            <Button className="border border-primary w-52 py-3 text-primary font-semibold leading-7 text-base rounded-full">
              Litepaper
            </Button>
            <Button className="bg-white font-semibold text-primary w-52 py-3 leading-7 text-base rounded-full">
              <div className="flex justify-center gap-3">
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

export default MobileApp;
