import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const Beneficts: FC = () => {
  const chooseData = [
    {
      id: 1,
      image: "/img/home/square-icon.svg",
      header: "Flexibility",
      body: `Adaptable for any patient or device so you can 
      choose when, where, and how you get medical help..`,
    },
    {
      id: 2,
      image: "/img/home/calendar-icon.svg",
      header: "Inclusive",
      body: `Equal experiences for eveyone regardless 
      of where you are located, language, or communication style. `,
    },
    {
      id: 3,
      image: "/img/home/ticket-icon.svg",
      header: "Secure",
      body: `Thoughfull secure design and private by deafult, 
      we keep your meidcal data secure. `,
    },
    {
      id: 4,
      image: "/img/home/square-icon.svg",
      header: "Flexibility",
      body: `Adaptable for any patient or device so you can 
      choose when, where, and how you get medical help..`,
    },
    {
      id: 5,
      image: "/img/home/calendar-icon.svg",
      header: "Inclusive",
      body: `Equal experiences for eveyone regardless 
      of where you are located, language, or communication style. `,
    },
    {
      id: 6,
      image: "/img/home/ticket-icon.svg",
      header: "Secure",
      body: `Thoughfull secure design and private by deafult, 
      we keep your meidcal data secure. `,
    },
  ];
  return (
    <div className="bg-secondary-900">
      <div className="container px-5 sm:px-10 pb-8 2xl:px-0 mx-auto ">
        <div className="flex flex-col sm:flex-row justify-between pt-28">
          <div className="flex flex-col gap-3 sm:gap-5">
            <p className="font-medium text-xs sm:text-2xl lg:text-3xl text-[#9ABDFE]">
              Features
            </p>
            <h3 className="font-medium text-white text-2xl sm:text-3xl lg:text-[44px] leading-7">
              Why Invest in SDT
            </h3>
          </div>
          <p className="text-base sm:text-lg lg:text-lg text-white w-full mt-3 sm:mt-0 sm:w-2/4 lg:w-2/6">
            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
            dignissim placerat nisi, adipiscing mauris non purus parturient.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-7 mt-16">
          {chooseData.map((data) => (
            <div
              key={data.id}
              className="bg-white px-10 py-12 flex flex-col gap-5"
            >
              <Image
                src={data.image}
                alt="squares icon"
                width={60}
                height={60}
              />
              <h3 className="font-medium text-lg sm:text-xl lg:text-2xl text-text-700">
                {data.header}
              </h3>
              <p className="text-base sm:text-lg text-text-600">{data.body}</p>
            </div>
          ))}
        </div>
        <p className="text-white text-base sm:text-xl lg:text-3xl font-medium mt-16 text-center">
          Don’t know where to buy SDT?{" "}
          <Link
            href="https://pancakeswap.finance/swap?outputCurrency=0x543c7ebb52d56985f63f246a5b3558aff79037d7"
            legacyBehavior
          >
            <a
              target="_blank"
              rel="noopener noreferer"
              className="text-primary underline"
            >
              Click here{" "}
            </a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Beneficts;
