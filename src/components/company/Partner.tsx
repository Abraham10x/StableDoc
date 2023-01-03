import Image from "next/image";
import { FC } from "react";

const parnters = [
  "/img/company/partner/open.svg",
  "/img/company/partner/oracle.svg",
  "/img/company/partner/morpheus.svg",
  "/img/company/partner/samsung.svg",
  "/img/company/partner/monday.svg",
  "/img/company/partner/segment.svg",
  "/img/company/partner/protonet.svg",
];

const Parnter: FC = () => {
  return (
    <div className="bg-secondary-700">
      <div className="my-16 sm:my-24 text-center container py-14 px-5 sm:px-10 2xl:px-0 mx-auto">
        <h3 className="bg-gradient-600 bg-clip-text text-transparent-active text-center font-bold text-xl sm:text-3xl lg:text-4xl">
          We have partnered with over 10 companies
        </h3>
        <div className="flex w-full overflow-x-auto gap-12 sm:gap-10 lg:gap-28 justify-start xl:justify-center py-5 my-5 lg:my-0">
          {parnters.map((data, index) => (
            <Image
              src={data}
              alt="parnters lcon"
              width={300}
              height={300}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Parnter;
