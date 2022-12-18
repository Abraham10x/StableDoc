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
      <div className="my-24 text-center container pt-12 px-10 pb-8 2xl:px-0 mx-auto py-10">
        <h3 className="bg-gradient-600 bg-clip-text text-transparent-active text-center font-bold text-4xl">
          We have partnered with over 10 companies
        </h3>
        <div className="flex flex-wrap gap-8 mt-10 justify-center">
          {parnters.map((data, index) => (
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

export default Parnter;
