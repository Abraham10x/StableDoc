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
      body: `AAdd multiple links in Instagram instead of just one.`,
    },
    {
      id: 2,
      image: "/img/sdt/files-icon.svg",
      header: `Instant cross-border payment settlement`,
      body: `Add multiple links in Instagram instead of just one.`,
    },
    {
      id: 3,
      image: "/img/sdt/files-icon.svg",
      header: `View and manage medical bills`,
      body: `Add multiple links in Instagram instead of just one. `,
    },
  ];
  return (
    <div className="container pt-20 px-10 pb-8 2xl:px-0 mx-auto">
      <div className="flex flex-col gap-5">
        <p className="font-medium text-lg text-primary text-center">
          SDT Utility
        </p>
        <h3 className="font-medium text-text-700 text-[44px] leading-7 text-center mx-auto">
          What’s possible with StableDoc Token?
        </h3>
      </div>
      <div className="grid grid-cols-3 grid-rows-3 mt-20">
        <div className="px-10 py-12 flex flex-col gap-3">
          <Image
            src="/img/sdt/files-icon.svg"
            alt="squares icon"
            width={30}
            height={30}
          />
          <h3 className="font-medium text-2xl text-text-700">
            Payment between healthcare providers and consumers
          </h3>
          <p className="text-lg text-text-600">
            Add multiple links in Instagram instead of just one.
          </p>
        </div>
        <div className="row-span-3 mt-36">
          <Image
            src="/img/sdt/desktop-hand.png"
            alt="squares icon"
            width={1000}
            height={1000}
          />
        </div>
        {TokenData.map((data) => (
          <div key={data.id} className="px-10 py-12 flex flex-col gap-3">
            <Image src={data.image} alt="squares icon" width={30} height={30} />
            <h3 className="font-medium text-2xl text-text-700">
              {data.header}
            </h3>
            <p className="text-lg text-text-600">{data.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Utility;
