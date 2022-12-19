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
    <div className=" pt-12 px-10 pb-8 2xl:px-56 mx-auto mt-32 relative">
      <div className="flex flex-col sm:flex-row gap-32">
        <div className="my-auto flex flex-col basis-full lg:basis-3/6 mt-20">
          <h1 className="font-bold text-4xl sm:text-5xl bg-gradient-600 bg-clip-text text-transparent-active">
            The Future Of Healthcare, Delivered Today
          </h1>
          {HeroData.map((data) => (
            <div
              key={data.id}
              className="flex flex-row gap-5 mt-8 border-b w-full lg:w-[60%] border-secondary-400"
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
                <h3 className="font-medium text-2xl text-[#2C3131]">
                  {data.header}
                </h3>
                <p className="font-normal text-lg text-[#626262] mb-10">
                  {data.body}
                </p>
              </div>
            </div>
          ))}
          <div className="flex flex-row gap-10 mt-5">
            <Button className="">
              <Image
                src="/img/telehealth/apple-store.svg"
                alt="apple app store"
                width={200}
                height={200}
              />
            </Button>
            <Button className="">
              <Image
                src="/img/telehealth/play-store.svg"
                alt="Play store"
                width={200}
                height={200}
              />
            </Button>
          </div>
        </div>
        <div className="bg-secondary-700 pl-20 py-36 absolute right-0 -z-10">
          <Image
            src="/img/telehealth/telehealth-hero.png"
            alt="services offered"
            width={900}
            height={900}
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
