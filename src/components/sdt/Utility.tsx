import { FC } from "react";
import { Button } from "../general/Button";
import Image from "next/image";

const Utility: FC = () => {
  const TokenData = [
    {
      id: 1,
      image: "/img/sdt/files-icon.svg",
      header: `Convenient hospital eVisits 
          via video call, voice call or text`,
      body: ``,
    },
    {
      id: 2,
      image: "/img/sdt/files-icon.svg",
      header: `Instant cross-border payment settlement`,
      body: ``,
    },
    {
      id: 3,
      image: "/img/sdt/files-icon.svg",
      header: `SDT will be used to auction NFT of patient health data in the future.`,
      body: ` `,
    },
  ];
  return (
    <div className="container pt-20 px-5 sm:px-10 pb-8 2xl:px-0 mx-auto">
      <div className="flex flex-col gap-2 sm:gap-4 lg:gap-5">
        {/* <p className="font-medium text-sm sm:text-base lg:text-lg text-text-700 sm:text-primary text-center">
          SDT Utility
        </p> */}
        <h3 className="font-medium bg-gradient-600 bg-clip-text text-transparent-active text-transparent-remove sm:text-text-700 text-xl sm:text-3xl lg:text-[44px] leading-7 text-center mx-auto">
          What more can you do with with StableDoc token?
        </h3>
      </div>
      <div className="grid grid-rows-1 grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-3 lg:grid-rows-2 sm:gap-x-10 lg:gap-x-0 mt-0 sm:mt-10 lg:mt-20">
        <div className="mt-16 sm:hidden">
          <Image
            src="/img/sdt/mobile-hand.png"
            alt="squares icon"
            width={500}
            height={500}
          />
        </div>
        <div className="mt-16 hidden sm:block lg:hidden mx-auto">
          <Image
            src="/img/sdt/desktop-hand.png"
            alt="squares icon"
            width={180}
            height={180}
          />
        </div>
        <div className="lg:px-10 py-12 flex flex-col gap-3">
          <Image
            src="/img/sdt/files-icon.svg"
            alt="squares icon"
            width={30}
            height={30}
          />
          <h3 className="font-medium text-2xl text-text-700">
            View and manage medical bills
          </h3>
          {/* <p className="text-lg text-text-600"></p> */}
        </div>
        <div className="row-span-3 mt-36 hidden lg:block">
          <Image
            src="/img/sdt/desktop-hand.png"
            alt="squares icon"
            width={1000}
            height={1000}
          />
        </div>
        {TokenData.map((data) => (
          <div key={data.id} className="lg:px-10 py-12 flex flex-col gap-3">
            <Image src={data.image} alt="squares icon" width={30} height={30} />
            <h3 className="font-medium text-2xl text-text-700">
              {data.header}
            </h3>
            {/* <p className="text-lg text-text-600">{data.body}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Utility;
