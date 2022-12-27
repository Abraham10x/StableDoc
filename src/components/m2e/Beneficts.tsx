import Image from "next/image";
import { FC } from "react";

const Beneficts: FC = () => {
  return (
    <div className="container pt-12 px-10 pb-8 2xl:px-0 mx-auto mt-10">
      <div className="flex flex-col sm:flex-row justify-between">
        <div className="basis-2/4">
          <Image
            src="/img/m2e/iphone-app.png"
            alt="crypto-currency"
            width={700}
            height={700}
          />
        </div>
        <div className="flex flex-col gap-6 basis-[40%]">
          <p className="font-medium text-[#333333] text-lg">Move2Earn App</p>
          <h3 className="font-bold text-4xl bg-gradient-600 bg-clip-text text-transparent-active">
            Move your way to fitness with StableFit app
          </h3>
          <p className="text-[#465371] font-normal text-2xl">
            You don’t need any prior Crypto knowledge to begin to earn Crypto on
            StableFit app. All you need to do is to download, register and start
            earning.{" "}
          </p>
          <div className="grid grid-cols-2 justify-between mt-7 gap-x-24 gap-y-16">
            <div className="flex flex-col gap-3">
              <Image
                src="/img/m2e/database.svg"
                alt="data-base"
                width={30}
                height={30}
              />
              <p className="text-[#111827] font-medium text-xl">
                Receive StableFit token for moving.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Image
                src="/img/m2e/badge.svg"
                alt="badge"
                width={30}
                height={30}
              />
              <p className="text-[#111827] font-medium text-xl">
                Gamification features like badges to keep you motivated
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Image
                src="/img/m2e/trophy.svg"
                alt="badge"
                width={30}
                height={30}
              />
              <p className="text-[#111827] font-medium text-xl">
                Invite your friends to fitness challenges to keep each other
                motivated.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Image
                src="/img/m2e/badge.svg"
                alt="badge"
                width={30}
                height={30}
              />
              <p className="text-[#111827] font-medium text-xl">
                Gamification features like badges to keep you motivated
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beneficts;
