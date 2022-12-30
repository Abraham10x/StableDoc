import { FC } from "react";
import { Button } from "../general/Button";
import Image from "next/image";

const Crypto: FC = () => {
  return (
    <div className="pl-52 flex flex-col sm:flex-row justify-between my-36">
      <div className="my-auto basis-[38%]">
        <h3 className="font-medium text-4xl text-[#2C3131]">
          We make crypto easy. Here are 3 easy steps to buy SDT
        </h3>
        <div className="flex flex-col my-10 gap-6">
          <div className="flex flex-row gap-5 pb-5 border-b border-secondary-400">
            <p className="font-bold text-2xl text-[#D0DBFF]">01</p>
            <div className="flex flex-col gap-2">
              <h4 className="font-medium text-2xl text-[#2C3131]">Step 1</h4>
              <p className="text-lg font-normal text-[#626262] w-3/4">
                Click on this link which takes you to pancake swap where our
                coin is listed
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-5 pb-5 border-b border-secondary-400">
            <p className="font-bold text-2xl text-[#D0DBFF]">02</p>
            <div className="flex flex-col gap-2">
              <h4 className="font-medium text-2xl text-[#2C3131]">Step 2</h4>
              <p className="text-lg font-normal text-[#626262] w-3/4">
                Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
                dignissim placerat nisi, adipiscing mauris non purus
                parturient..
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-5 pb-5">
            <p className="font-bold text-2xl text-[#D0DBFF]">03</p>
            <div className="flex flex-col gap-2">
              <h4 className="font-medium text-2xl text-[#2C3131]">Step 3</h4>
              <p className="text-lg font-normal text-[#626262] w-3/4">
                Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
                dignissim placerat nisi, adipiscing mauris non purus
                parturient..
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-10 mt-10">
          <Button className="flex flex-row bg-secondary-700 text-black rounded-lg px-6 py-3 gap-4">
            <Image
              src="/img/general/apple-store.svg"
              alt="Play Store"
              width={50}
              height={50}
            />
            <div className="flex flex-col text-left justify-center">
              <span className="text-base">Download on the</span>
              <span className="text-3xl font-semibold">App Store</span>
            </div>
          </Button>
          <Button className="flex flex-row bg-secondary-700 text-black rounded-lg px-6 py-3 gap-4">
            <Image
              src="/img/general/play-store.svg"
              alt="Play Store"
              width={50}
              height={50}
            />
            <div className="flex flex-col text-left justify-center">
              <span className="text-base">Download on the</span>
              <span className="text-3xl font-semibold">Google Play</span>
            </div>
          </Button>
        </div>
      </div>
      <div className="bg-gradient-600 py-20 basis-[50%] flex justify-center relative">
        <Image
          className="absolute right-20"
          src="/img/sdt/mobile-app.png"
          alt="Play Store"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default Crypto;
