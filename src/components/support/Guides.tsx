import Image from "next/image";
import { FC } from "react";
import { FiSearch } from "react-icons/fi";

const Guides: FC = () => {
  const FilterData = [
    {
      id: 1,
      header: "Healthcare Guides",
      links: [
        "Getting Started ",
        "Booking a doctor",
        "Core features",
        "Ordering your drugs",
      ],
    },
    {
      id: 2,
      header: "Crypto Guides",
      links: [
        "Staking and farming",
        "Buying our tokens",
        "Swapping our tokens",
        "Swapping our tokens",
        "Swapping our tokens",
      ],
    },
    {
      id: 3,
      header: "FAQs",
      links: ["Subscription plans", "Billings", "Privacy and security"],
    },
  ];

  const GuideData = [
    {
      id: 1,
      header: "Getting started overview",
      body: `Get started quickly with the usual spreadsheet basics as 
      well as some special features that you won't find anywhere else.`,
    },
    {
      id: 2,
      header: "Signing up ",
      body: `Get started quickly with the usual spreadsheet basics as 
      well as some special features that you won't find anywhere else.`,
    },
    {
      id: 3,
      header: "Getting started overview",
      body: `Get started quickly with the usual spreadsheet basics as 
      well as some special features that you won't find anywhere else.`,
    },
    {
      id: 4,
      header: "Signing up ",
      body: `Get started quickly with the usual spreadsheet basics as 
      well as some special features that you won't find anywhere else.`,
    },
    {
      id: 5,
      header: "Getting started overview",
      body: `Get started quickly with the usual spreadsheet basics as 
      well as some special features that you won't find anywhere else.`,
    },
    {
      id: 6,
      header: "Signing up ",
      body: `Get started quickly with the usual spreadsheet basics as 
      well as some special features that you won't find anywhere else.`,
    },
    {
      id: 7,
      header: "Getting started overview",
      body: `Get started quickly with the usual spreadsheet basics as 
      well as some special features that you won't find anywhere else.`,
    },
    {
      id: 8,
      header: "Signing up ",
      body: `Get started quickly with the usual spreadsheet basics as 
      well as some special features that you won't find anywhere else.`,
    },
  ];
  return (
    <div className="container pt-12 px-10 pb-8 2xl:px-0 mx-auto mt-10">
      <div className="flex flex-col sm:flex-row justify-between gap-16">
        <div className="basis-1/4">
          <div className="relative mt-1">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <FiSearch color="#94A3B8" size={25} />
            </div>
            <input
              type="text"
              className={`block w-full rounded-md border-[1px] border-primary px-3 py-4 pl-12 text-2xl text-[#94A3B8] font-normal`}
              placeholder="Search"
            />
          </div>
          {FilterData.map((data) => (
            <div key={data.id} className="mt-14 ">
              <h3 className="bg-gradient-600 bg-clip-text text-transparent-active font-medium text-3xl text-start mb-8">
                {data.header}
              </h3>
              {data.links.map((link, index) => (
                <div className="flex flex-row gap-5 my-4 ">
                  <Image
                    src="/img/support/rocket.svg"
                    alt="rocket icon"
                    width={25}
                    height={25}
                  />
                  <p key={index} className="text-[#547196] font-medium text-xl">
                    {link}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="basis-9/12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
            {GuideData.map((data) => (
              <div
                key={data.id}
                className="border border-[#A9C5DE] p-8 basis-5/12"
              >
                <Image
                  src="/img/support/outline-rocket.svg"
                  alt="outline rocket icon"
                  width={50}
                  height={50}
                />
                <h4 className="bg-gradient-600 bg-clip-text text-transparent-active font-medium text-2xl text-start my-5">
                  {data.header}
                </h4>
                <p className="text-xl text-[#547196] font-normal">
                  {data.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Guides;
