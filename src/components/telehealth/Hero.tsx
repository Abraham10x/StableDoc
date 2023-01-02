import Image from "next/image";
import { FC } from "react";
import { Button } from "../general/Button";

const Hero: FC = () => {
  const HeroData = [
    {
      id: 1,
      header: "Sync between platforms",
      body: `No matter if you're using our web interface or 
        mobile app — your data is always synced. Just one 
        account for all our services.`,
    },
    {
      id: 2,
      header: "Track your vitals",
      body: `Keep track of your Blood Pressure, Weight, 
      BMI, Blood Sugar, Heart Rate and other vitals.`,
    },
    {
      id: 3,
      header: "Secure by default",
      body: `Enable privacy mode and app locking to 
      protect your data.`,
    },
  ];
  return (
    <div className="pl-auto sm:container lg:max-w-none mx-auto xl:pl-[3rem] lg:pl-10 px-5 sm:px-10 lg:px-0 flex flex-col-reverse lg:flex-row justify-between my-36">
      <div className="my-auto flex flex-col basis-full lg:basis-[45%] mt-20">
        <h1 className="font-extrabold sm:font-bold text-3xl sm:text-4xl lg:text-5xl bg-gradient-600 bg-clip-text text-transparent-active">
          The Future Of Healthcare, Delivered Today
        </h1>
        {HeroData.map((data) => (
          <div
            key={data.id}
            className="flex flex-row gap-5 mt-8 border-b w-full 2xl:w-[60%] border-secondary-400"
          >
            <div className="mt-2">
              <Image
                className="max-w-none"
                src="/img/telehealth/check.svg"
                alt="check-icon"
                width={30}
                height={30}
              />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-medium text-base sm:text-2xl lg:text-2xl text-[#2C3131]">
                {data.header}
              </h3>
              <p className="font-normal text-sm sm:text-xl text-[#626262] mb-10">
                {data.body}
              </p>
            </div>
          </div>
        ))}
        <div className="flex flex-row gap-4 sm:gap-10 mt-10">
          <Button className="flex flex-row bg-secondary-700 hover:bg-primary/20 text-black rounded-lg px-6 py-3 gap-4">
            <Image
              src="/img/general/app-store-white.svg"
              alt="Play Store"
              width={200}
              height={200}
            />
          </Button>
          <Button className="flex flex-row bg-secondary-700 hover:bg-primary/20 text-black rounded-lg px-6 py-3 gap-4">
            <Image
              src="/img/general/play-store-white.svg"
              alt="Play Store"
              width={210}
              height={210}
            />
          </Button>
        </div>
      </div>
      <div className="bg-secondary-700 hidden lg:block basis-[50%] pl-6 xl:pl-20 py-36">
        <Image
          className="my-auto"
          src="/img/telehealth/telehealth-hero.png"
          alt="services offered"
          width={900}
          height={900}
        />
      </div>
      <div className="bg-secondary-700 basis-[50%] px-5 py-10 lg:hidden">
        <Image
          src="/img/telehealth/mobile-hero.png"
          alt="services offered"
          width={1500}
          height={1500}
        />
      </div>
    </div>
  );
};
export default Hero;
