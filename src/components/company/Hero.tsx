import Image from "next/image";
import { FC } from "react";

const Hero: FC = () => {
  return (
    <div className="container pt-12 px-5 sm:px-10 pb-8 2xl:px-0 mx-auto mt-32">
      <div className="flex flex-col lg:flex-row justify-between bg-secondary-600 bg-opacity-10 gap-y-24 gap-x-14 px-5 sm:px-16 py-12 rounded-3xl">
        <div className="flex flex-col justify-between h-full basis-[54%] my-auto">
          <div className="flex flex-row justify-start gap-5">
            <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl bg-gradient-600 bg-clip-text text-transparent-active">
              About StableDoc
            </h1>
            <Image
              className="block lg:hidden"
              src="/img/company/hero-mobile.svg"
              alt="crypto-currency"
              width={30}
              height={30}
            />
          </div>
          <p className="text-base sm:text-xl lg::text-2xl text-text-300 mt-8">
            StableDoc combine cutting-edge, Blockchain-based and AI-driven
            telemedicine, in-home health and standard hospital services to
            deliver evidence-based, cross-boundary healthcare to patients all
            around the world. StableDoc telehealth platform virtually connects
            patients and doctors for the purpose of health consultations,
            medical advice and prescriptions.
          </p>
        </div>
        <Image
          className="basis-full w-full lg:basis-[20%] hidden lg:block"
          src="/img/company/company-hero.svg"
          alt="crypto-currency"
          width={50}
          height={50}
        />
      </div>
    </div>
  );
};

export default Hero;
