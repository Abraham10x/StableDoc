import Image from "next/image";
import { FC } from "react";
import { LinkButton } from "../general/Button";
import AppStore from "../general/AppStore";

const Hero: FC = () => {
  return (
    <div className="sm:container pt-12 pb-8 2xl:px-0 mx-auto">
      <div className="flex flex-col lg:flex-row justify-between bg-secondary-600 bg-opacity-10 gap-y-24 gap-x-14 sm:px-16 lg:py-12 rounded-3xl relative lg:bg-hero-bg bg-right bg-no-repeat">
        <div className="flex flex-col justify-between h-full basis-[45%] my-auto px-8 pt-10 lg:pt-0">
          <p className="font-bold text-xs sm:text-base lg:text-xl uppercase text-text-300">
            StableDoc for health providers
          </p>
          <h1 className="font-bold text-2xl sm:text-4xl lg:text-5xl bg-gradient-600 bg-clip-text text-transparent-active mt-3 lg:mt-8">
            Partner with StableDoc
          </h1>
          <p className="text-base lg:text-2xl text-text-300 mt-4 lg:mt-8">
            With StableDoc 24/7 appointment management solution, you can reach
            new patients at the comfort of their homes, and gain full control of
            your schedule
          </p>
          <div className="flex sm:flex-row mt-8 gap-6">
            <LinkButton
              target="_blank"
              link="https://telehealth.stabledoc.com/"
              className="bg-primary hover:bg-secondary-900 transition-all font-semibold text-white px-8 sm:px-11 py-3 leading-7 text-sm sm:text-base rounded-full"
            >
              Get Started
            </LinkButton>
            <LinkButton
              link="/support/#contact-us"
              className="border border-primary hover:bg-primary/20 transition-all px-8 sm:px-11 py-3 text-primary font-semibold leading-7 text-sm sm:text-base rounded-full"
            >
              Contact Us
            </LinkButton>
          </div>
        </div>
        <div className="lg:hidden basis-full lg:basis-[20%]">
          <Image
            className="w-full"
            src="/img/partners/hero-mobile.png"
            alt="doctors-3d"
            width={400}
            height={400}
          />
        </div>
        <div className="absolute bottom-0 right-0 hidden lg:block">
          <Image
            className="basis-full lg:basis-[20%]"
            src="/img/partners/partners-hero.png"
            alt="doctors-3d"
            width={560}
            height={560}
          />
        </div>
      </div>
      <div className="flex flex-col mt-20">
        <h2 className=" bg-gradient-600 bg-clip-text text-transparent-active font-medium text-2xl sm:text-3xl lg:text-4xl text-center">
          Why providers choose StableDoc
        </h2>
        <AppStore
          applestore="https://apps.apple.com/ng/app/stabledoc-partner/id1602960789"
          playstore="https://play.google.com/store/apps/details?id=com.sdtapp.partnerapp"
        />
      </div>
    </div>
  );
};

export default Hero;
