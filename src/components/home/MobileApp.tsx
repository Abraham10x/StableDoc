import { FC } from "react";
import { LinkButton } from "../general/Button";
import Image from "next/image";

const MobileApp: FC = () => {
  return (
    <div className="bg-secondary-900">
      <div className="container 2xl:px-0 mx-auto flex flex-col sm:flex-row justify-between gap-8 px-5 sm:px-10 lg:px=20 xl:px-28 pt-10 sm:pt-20 lg:pt-36 pb-48 sm:pb-20 lg:pb-64">
        <div className="basis-5/12">
          <Image
            src="/img/home/mobile-app.png"
            alt="Token Statistics"
            width={600}
            height={600}
          />
        </div>
        <div className="flex flex-col basis-5/12 gap-4 sm:gap-6 lg:gap-8 my-auto">
          <h3 className="font-extrabold text-xl sm:text-3xl lg:text-4xl text-center sm:text-left text-[#689CFD]">
            The best care for you – anywhere, anytime.
          </h3>
          <p className="text-base sm:text-xl lg:text-2xl text-white font-normal text-center sm:text-left">
            Skip the waiting room and talk to a doctor right away, when you need
            to. We provide instant, quality and affordable healthcare delivery
            24/7.
          </p>
          <div className="grid grid-cols-2 w-full 2xl:w-4/5 gap-y-11 mt-5 justify-center sm:justify-start">
            {/* <Button className="bg-primary hover:bg-secondary-900 transition-colors font-semibold text-white w-36 lg:w-44 xl:w-52 py-2 sm:py-3 leading-7 text-sm lg:text-base rounded-full">
              Get Started
            </Button>
            <LinkButton
              link="/assets/documents/new-whitepaper.pdf"
              target="_blank"
              className="border border-primary hover:bg-primary/20 w-36 lg:w-44 xl:w-52 py-2 sm:py-3 text-primary font-semibold leading-7 text-sm lg:text-base transition-all rounded-full"
            >
              Whitepaper
            </LinkButton> */}
            <div className="w-40 lg:w-44 xl:w-52">
              <h3 className="text-xl font-bold text-center text-[#689CFD] capitalize">
                Download StableDoc User App
              </h3>
            </div>
            <div className="w-40 lg:w-44 xl:w-52">
              <h3 className="text-xl font-bold text-[#689CFD] text-center capitalize">
                Download StableDoc Partner App
              </h3>
            </div>
            <LinkButton
              link="https://apps.apple.com/ng/app/stabledoc/id1602960544"
              target="_blank"
              className="bg-white font-semibold hover:bg-primary/20 transition-colors text-primary w-40 lg:w-44 xl:w-52 py-2 sm:py-3 leading-7 text-base rounded-full hidden lg:block"
            >
              <div className="flex justify-center gap-3">
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
              link="https://apps.apple.com/ng/app/stabledoc-partner/id1602960789"
              target="_blank"
              className="bg-white font-semibold hover:bg-primary/20 transition-colors text-primary w-40 lg:w-44 xl:w-52 py-2 sm:py-3 leading-7 text-base rounded-full hidden lg:block"
            >
              <div className="flex justify-center gap-3">
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
              link="https://play.google.com/store/apps/details?id=com.sdtapp.customer"
              target="_blank"
              className="bg-primary hover:bg-secondary-900 transition-colors font-semibold text-white w-40 lg:w-48 xl:w-52 py-3 leading-7 text-base rounded-full hidden lg:block"
            >
              <div className="flex justify-center gap-2">
                <Image
                  src="/img/home/google-play.svg"
                  alt="Google play store"
                  width={35}
                  height={35}
                />
                <p className="my-auto">Google Play</p>
              </div>
            </LinkButton>
            <LinkButton
              link="https://play.google.com/store/apps/details?id=com.sdtapp.partnerapp"
              target="_blank"
              className="bg-primary hover:bg-secondary-900 transition-colors font-semibold text-white w-40 lg:w-48 xl:w-52 py-3 leading-7 text-base rounded-full hidden lg:block"
            >
              <div className="flex justify-center gap-2">
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

export default MobileApp;
