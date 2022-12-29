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
      <div className="mt-20 text-center container pb-16 px-10 2xl:px-0 mx-auto">
        <div className="flex flex-wrap gap-28 justify-center">
          {parnterData.map((data, index) => (
            <Image
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
