import Image from "next/image";
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
    <div className="bg-beneficts-bg bg-no-repeat bg-cover bg-top pb-40 pt-80 bottom-72 relative">
      <div className="container px-10 pb-8 2xl:px-0 mx-auto mt-10">
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="flex flex-col gap-5">
            <p className="font-medium text-[#1A4187] text-lg">Beneficts</p>
            <h3 className="font-medium text-text-700 text-[44px] leading-7">
              Why choose us?
            </h3>
          </div>
          <p className="text-lg text-text-600 w-2/6">
            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
            dignissim placerat nisi, adipiscing mauris non purus parturient.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-y-10 gap-x-7 mt-16">
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
              <h3 className="font-medium text-2xl text-text-700">
                {data.header}
              </h3>
              <p className="text-lg text-text-600">{data.body}</p>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-xl border border-secondary-400 px-14 py-12 flex flex-row mt-14 justify-evenly relative top-20 z-30">
          <div className=" flex flex-col text-center py-3">
            <h4 className="text-primary text-5xl">99k</h4>
            <p className="text-lg text-text-500">People have joined</p>
          </div>
          <div className=" flex flex-col text-center px-36 border-r border-l border-[#CACACA]">
            <h4 className="text-primary text-5xl">99k</h4>
            <p className="text-lg text-text-500">People have joined</p>
          </div>
          <div className=" flex flex-col text-center">
            <h4 className="text-primary text-5xl">99k</h4>
            <p className="text-lg text-text-500">People have joined</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beneficts;
