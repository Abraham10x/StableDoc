import Image from "next/image";
import { FC, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Button } from "../general/Button";
import Link from "next/link";

const Guides: FC = () => {
  const FilterData = [
    {
      id: 1,
      header: "Healthcare Guides",
      links: [
        {
          url: "solution/#Home-Health",
          target: "",
          linkText: "Home Health",
        },
        {
          url: "/solution/#Men-and-women’s-health",
          target: "",
          linkText: "Men and Women's Health",
        },
        {
          url: "/solution/#Abroad-Referral-&-Medical-Tourism",
          target: "",
          linkText: "Abroad Referral & Medical Tourism",
        },
        {
          url: "/solution/#Annual-Physical",
          target: "",
          linkText: "Annual Physical",
        },
        { url: "/solution/#StablePods", target: "", linkText: "Stablepods" },
        {
          url: "/solution/#Diaspora-Sponsored-Health",
          target: "",
          linkText: "Diaspora Sponsored Health",
        },
      ],
    },
    {
      id: 2,
      header: "Crypto Guides",
      links: [
        { url: "/SDT", linkText: "StableDoc Token" },
        {
          url: "/assets/documents/new-whitepaper.pdf",
          target: "_blank",
          linkText: "Whitepaper",
        },
        {
          url: "https://app.stabledoc.com/dashboard",
          target: "_blank",
          linkText: "Staking and Farming",
        },
        {
          url: "https://docs.stabledoc.com/",
          target: "_blank",
          linkText: "Docs",
        },
        { url: "/SDT/#road-map", target: "", linkText: "Road map" },
        {
          url: "https://docs.stabledoc.com/information/smart-comtract-audit",
          target: "_blank",
          linkText: "Smart Contracts",
        },
        {
          url: "/solution/#AI-Enabled-Apps,-Tools-And-Devices",
          target: "",
          linkText: "AI Diagnoistics",
        },
      ],
    },
    {
      id: 3,
      header: "FAQs",
      links: [
        { url: "/about", target: "", linkText: "About StableDoc" },
        {
          url: "/careers",
          target: "",
          linkText:
            "How do I book for appointment on the StableDoc telehealth app?",
        },
        {
          url: "/faqs",
          target: "",
          linkText: "Why should I see an online doctor?",
        },
        { url: "/faqs", target: "", linkText: "More FAQ..." },
      ],
    },
  ];

  const GuideData = [
    {
      id: 1,
      header: "Onboarding as a patient",
      body: `Are you tired of driving long distances to the hospital only 
      to go wait in long line to see your doctor? Download our app today 
      to consult a doctor from the comfort of your home or office.`,
    },
    {
      id: 2,
      header: "Onboarding as a doctor",
      body: `Visit Playstore or Applestore below and download the StableDoc 
      partner app and sign up, upload your documents to get approved, set 
      availability and get booked by patients and start earning`,
    },
    {
      id: 3,
      header: "Trackers & Health Plan",
      body: `Set daily, weekly, monthly goals – and reach them! Whatever your 
      goals are, StableDoc will help you to reach and stick to them: steps, 
      calories, water intake, etc. You can manually enter readings from fitness 
      trackers & wearables or via Bluetooth interface.`,
    },
    {
      id: 4,
      header: "Vitals",
      body: `Use your own device or the StableReality suite of gadgets to 
      record such health vitals as body temperature, pulse rate, respiration 
      rate and blood pressure. Making these vitals available to the physician 
      is critical to a successful virtual consultation.`,
    },
    {
      id: 5,
      header: "Health Symptom Checker",
      body: `Perform symptom assessments with our physician-trained artificial 
      intelligence health assessor. The health checker helps you navigate 
      through your symptoms and provides you with possible health conditions 
      and treatment options`,
    },
    {
      id: 6,
      header: "Virtual Consultation",
      body: `Our hassle-free, truly “doctor anywhere, anytime” virtual 
      consultation forms the flagship core of the StableDoc healthcare 
      delivery.`,
    },
    {
      id: 7,
      header: "Video Conferencing",
      body: `Get instant or scheduled face-to-face medical advise, 
      prescription, tests and referrals.`,
    },
    {
      id: 8,
      header: "Audio Conferencing",
      body: `Consult with a healthcare provider via audio calls when a 
      video call is infeasible.`,
    },
  ];

  const [categories, setCategories] = useState({
    title: "Healthcare guides",
    number: "20",
  });
  return (
    <div className="container pt-12 px-5 sm:px-10 pb-8 2xl:px-0 mx-auto mt-0 sm:mt-5 lg:mt-10">
      <div className="flex flex-col lg:flex-row justify-between gap-16">
        <div className="basis-full sm:basis-2/5 lg:basis-1/4">
          <div className="relative mt-1">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <FiSearch
                color="#94A3B8"
                className="text-lg sm:text-2xl lg:text-3xl"
              />
            </div>
            <input
              type="text"
              className={`block w-full rounded-md border-[1px] border-primary px-3 py-4 pl-10 sm:pl-12 lg:pl-14 text-sm sm:text-xl lg:text-2xl text-[#94A3B8] font-normal my-auto`}
              placeholder="Search"
            />
          </div>
          <div className="lg:hidden mt-8">
            <h3 className="text-xl font-medium bg-gradient-600 bg-clip-text text-transparent-active">
              Categories
            </h3>
            <div className="hs-dropdown relative inline-flex w-full">
              <button
                id="hs-dropdown-default"
                type="button"
                className="hs-dropdown-toggle py-3 px-4 gap-2 mt-4 rounded-sm border-none font-medium max-w-full w-full sm:max-w-screen-2xl text-gray-700 align-middle bg-[#F5FAFF] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:text-lg"
              >
                <div className="flex flex-row justify-between">
                  <p className="text-base sm:text-xl font-normal text-text-500">
                    {categories.title}
                  </p>
                  <div className="flex flex-row gap-4">
                    <p className="text-base sm:text-xl font-normal text-text-500">
                      {categories.number}
                    </p>
                    <svg
                      className="hs-dropdown-open:rotate-180 w-3.5 h-3.5 text-text-500 my-auto"
                      width="20"
                      height="20"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </button>

              <div
                className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] hs-dropdown-open:opacity-100 opacity-0 w-72 sm:w-[90%] hidden z-10 mt-2 min-w-[18rem] bg-white shadow-md rounded-[10px] p-2"
                aria-labelledby="hs-dropdown-default"
              >
                <Button
                  className=" gap-x-3.5 py-2 px-3 pr-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 w-full"
                  link=""
                  onClick={() =>
                    setCategories({ title: "Healthcare guides", number: "20" })
                  }
                >
                  <div className="flex flex-row justify-between">
                    <p className="bg-gradient-600 bg-clip-text text-transparent-active text-base sm:text-xl">
                      Healthcare guides
                    </p>
                    <p className="text-base sm:text-xl text-text-500">20</p>
                  </div>
                </Button>
                <Button
                  className="gap-x-3.5 py-2 px-3 pr-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 w-full"
                  link=""
                  onClick={() =>
                    setCategories({ title: "Crypto guides", number: "50" })
                  }
                >
                  <div className="flex flex-row justify-between">
                    <p className="bg-gradient-600 bg-clip-text text-transparent-active text-base sm:text-xl">
                      Crypto guides
                    </p>
                    <p className="text-base sm:text-xl text-text-500">50</p>
                  </div>
                </Button>
                <Button
                  className=" gap-x-3.5 py-2 px-3 pr-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 w-full"
                  link=""
                  onClick={() => setCategories({ title: "FAQs", number: "80" })}
                >
                  <div className="flex flex-row justify-between">
                    <p className="bg-gradient-600 bg-clip-text text-transparent-active text-base sm:text-xl">
                      FAQs
                    </p>
                    <p className="text-base sm:text-xl text-text-500">80</p>
                  </div>
                </Button>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            {FilterData.map((data) => (
              <div key={data.id} className="mt-14 ">
                <h3 className="bg-gradient-600 bg-clip-text text-transparent-active font-medium text-3xl text-start mb-8">
                  {data.header}
                </h3>
                {data.links.map((link, index) => (
                  <div
                    key={index}
                    className="flex flex-row gap-5 my-1 py-2 hover:bg-secondary-700 transition-colors cursor-pointer"
                  >
                    <Image
                      src="/img/support/rocket.svg"
                      alt="rocket icon"
                      width={25}
                      height={25}
                    />
                    <Link legacyBehavior href={link.url}>
                      <a
                        target={link.target}
                        rel="noreferer noopener"
                        className="text-[#547196] font-medium text-xl"
                      >
                        {link.linkText}
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="basis-full sm:basis-[55%] lg:basis-9/12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-9">
            {GuideData.map((data) => (
              <div
                key={data.id}
                className="border border-[#A9C5DE] px-5 py-8 sm:p-8 basis-5/12"
              >
                <Image
                  src="/img/support/outline-rocket.svg"
                  alt="outline rocket icon"
                  width={50}
                  height={50}
                />
                <h4 className="bg-gradient-600 bg-clip-text text-transparent-active font-medium text-base sm:text-2xl text-start my-5">
                  {data.header}
                </h4>
                <p className="text-[15px] sm:text-xl text-[#547196] font-normal">
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
