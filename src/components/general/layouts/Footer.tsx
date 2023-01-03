import Image from "next/image";
import { FC } from "react";
import Link from "next/link";
import FooterLinks from "./FooterLinks";
import SocialIcons from "./SocialIcons";

const Footer: FC = () => {
  return (
    <footer className="bg-secondary-900">
      <div className="container pt-12 pb-8 px-5 sm:px-10 2xl:px-0 mx-auto">
        <div className="hidden lg:flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap justify-center sm:justify-start lg:justify-center pb-10 text-center sm:text-left gap-y-10 sm:gap-14 lg:gap-10">
          <div className="basis-full sm:basis-[25%] lg:basis-[20%]">
            <div className="flex flex-col justify-between h-full">
              <div>
                <SocialIcons />
              </div>
              <Link href="/">
                <figure>
                  <div className="relative mx-auto sm:mx-0 mb-5 w-full">
                    <Image
                      className="mx-auto sm:mx-0"
                      src="/img/brand-logo-white.svg"
                      alt="company logo"
                      width={150}
                      height={150}
                    />
                  </div>
                </figure>
              </Link>
            </div>
          </div>
          <FooterLinks
            header="Solutions"
            data={[
              { url: "/about", linkText: "Premium health" },
              { url: "/careers", linkText: "Cross border health" },
              { url: "/faqs", linkText: "Your health on a blockchain" },
            ]}
          />
          <FooterLinks
            header="SDT"
            data={[
              { url: "/about/#core-values", linkText: "Whitepaper" },
              { url: "/about/#core-team", linkText: "Token Utility" },
              { url: "/#our-products", linkText: "Smart contracts" },
              {
                url: "/careers/#open-postions",
                linkText: "Staking and farming",
              },
            ]}
          />
          <FooterLinks
            header="Support"
            data={[
              { url: "/product/school", linkText: "Tutorials and FAQs" },
              {
                url: "/product/corebanking",
                linkText: "Contact us",
              },
              { url: "/product/plux", linkText: "Social media links" },
            ]}
          />
          <FooterLinks
            header="Company"
            data={[
              { url: "/product/school", linkText: "About" },
              {
                url: "/product/corebanking",
                linkText: "Team",
              },
              { url: "/product/plux", linkText: "Partners" },
              { url: "/product/plux", linkText: "Blog" },
            ]}
          />
        </div>
        <div className="hs-dropdown relative inline-flex">
          <button
            id="hs-dropdown-default"
            type="button"
            className="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
          >
            Actions
            <svg
              className="hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-gray-600"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </button>

          <div
            className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] hs-dropdown-open:opacity-100 opacity-0 w-72 hidden z-10 mt-2 min-w-[15rem] bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700"
            aria-labelledby="hs-dropdown-default"
          >
            <a
              className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
              href="#"
            >
              Newsletter
            </a>
            <a
              className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
              href="#"
            >
              Purchases
            </a>
            <a
              className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
              href="#"
            >
              Downloads
            </a>
            <a
              className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
              href="#"
            >
              Team Account
            </a>
          </div>
        </div>
      </div>
      <div className="py-5 border-t border-gray-500 flex flex-row justify-center items-center container mx-auto">
        <hr className="bg-white" />
        <p className="font-normal mr-2 text-white text-center">
          Copyright © 2022 StableDoc. All Rights Reserved StableDoc
        </p>
      </div>
    </footer>
  );
};

export default Footer;
