import Image from "next/image";
import { FC } from "react";

const parnterData = [
  "/img/home/partner/binance.svg",
  "/img/home/partner/coinbase.svg",
  "/img/home/partner/bitcoin.svg",
  "/img/home/partner/tether.svg",
  "/img/home/partner/bitmex.svg",
];

const Parnters: FC = () => {
  return (
    <div className="bg-white">
      <div className="lg:mt-0 text-center container lg:pb-0 px-5 sm:px-10 2xl:px-0 mx-auto">
        <div className="flex w-full overflow-x-auto gap-12 sm:gap-20 lg:gap-28 justify-center my-5 lg:my-0">
          {parnterData.map((data, index) => (
            <Image
              className="w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40"
              data-aos="flip-down"
              src={data}
              alt="parnters lcon"
              width={150}
              height={150}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Parnters;
