import { FC } from "react";
import { Button } from "../general/Button";
import Image from "next/image";
import AppStore from "../general/AppStore";

const Crypto: FC = () => {
  return (
    <div className="pl-auto lg:pl-10 px-5 sm:px-10 lg:px-0 flex flex-col-reverse lg:flex-row justify-between my-8 sm:my-36">
      <div className="my-auto basis-[45%] xl:basis-[38%] mt-6 pt-0">
        <h3 className="font-medium text-2xl sm:text-3xl lg:text-4xl text-[#2C3131]">
          We make crypto easy. Here are 3 easy steps to buy SDT
        </h3>
        <div className="flex flex-col my-10 gap-6">
          <div className="flex flex-row gap-5 pb-5 border-b border-secondary-400">
            <p className="font-bold text-xl sm:text-2xl text-[#D0DBFF]">01</p>
            <div className="flex flex-col gap-2">
              <h4 className="font-medium text-xl sm:text-2xl text-[#2C3131]">
                Step 1
              </h4>
              <p className="text-base sm:text-lg font-normal text-[#626262] w-full sm:w-9/12 lg:w-full xl::w-3/4">
                Click on this link which takes you to pancake swap where our
                coin is listed
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-5 pb-5 border-b border-secondary-400">
            <p className="font-bold text-xl sm:text-2xl text-[#D0DBFF]">02</p>
            <div className="flex flex-col gap-2">
              <h4 className="font-medium text-xl sm:text-2xl text-[#2C3131]">
                Step 2
              </h4>
              <p className="text-base sm:text-lg font-normal text-[#626262] w-full sm:w-9/12 lg:w-full xl::w-3/4">
                Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
                dignissim placerat nisi, adipiscing mauris non purus
                parturient..
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-5 pb-5">
            <p className="font-bold text-xl sm:text-2xl text-[#D0DBFF]">03</p>
            <div className="flex flex-col gap-2">
              <h4 className="font-medium text-xl sm:text-2xl text-[#2C3131]">
                Step 3
              </h4>
              <p className="text-base sm:text-lg font-normal text-[#626262] w-full sm:w-9/12 lg:w-full xl::w-3/4">
                Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
                dignissim placerat nisi, adipiscing mauris non purus
                parturient..
              </p>
            </div>
          </div>
        </div>
        <div className="sm:hidden">
          <AppStore />
        </div>
        <div className="sm:flex flex-row gap-10 mt-10 hidden">
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
      <div className="bg-gradient-600 py-10 sm:py-20 basis-[50%] rounded sm:rounded-lg lg:rounded-none flex justify-center relative">
        <Image
          className="mx-auto absolute sm:right-0 xl:right-20 hidden lg:block"
          src="/img/sdt/mobile-app.png"
          alt="Play Store"
          width={500}
          height={500}
        />
        <Image
          className="mx-auto lg:hidden object-cover"
          src="/img/sdt/mobile-view.png"
          alt="Play Store"
          width={170}
          height={170}
        />
      </div>
    </div>
  );
};

export default Crypto;
