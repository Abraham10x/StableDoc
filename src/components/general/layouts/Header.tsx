import { FC, useEffect, useState } from "react";
import Link from "next/link";
import { IoClose, IoMenu, IoChevronDown } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";
import Image from "next/image";
import { Button, LinkButton } from "../Button";
import Solutions from "./Solutions";
import Token from "./Token";
import Company from "./Company";
import Support from "./Support";

const navLinks = [
  {
    id: 1,
    url: <Solutions />,
  },
  {
    id: 2,
    url: <Token />,
  },
  {
    id: 3,
    url: <Company />,
  },
  {
    id: 4,
    url: <Support />,
  },
];

const languages = [
  {
    code: "fr",
    name: "Français",
    country_code: "fr",
  },
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "ar",
    name: "العربية",
    dir: "rtl",
    country_code: "sa",
  },
];

const Header: FC = () => {
  const currentLanguageCode = Boolean(cookies.get("i18next")) || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();

  // useEffect(() => {
  //   console.log("Setting page stuff");
  //   document.body.dir = (currentLanguage.dir != null) || "ltr";
  // }, [currentLanguage]);

  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="w-full fixed top-0 left-0 bg-secondary-700 sm:px-10 z-40 bg-opacity-100 lg:bg-opacity-[0.93]">
      <div className="md:flex items-center justify-between container mx-auto py-7 lg:py-1 px-7 sm:px-0 2xl:px-0">
        <figure className="w-2/4 sm:w-full lg:h-full lg:hidden">
          <Link href="/" className="cursor-pointer">
            <Image
              className=" z-[999]"
              alt="logo"
              src="/img/brand-identity.svg"
              width={150}
              height={150}
            />
          </Link>
        </figure>
        <Link href="/" className="cursor-pointer hidden lg:block my-auto">
          <figure className="w-2/4 sm:w-full lg:h-full">
            <Image
              className=" z-[999]"
              alt="logo"
              src="/img/brand-identity.svg"
              width={150}
              height={150}
            />
          </figure>
        </Link>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer lg:hidden"
        >
          {open ? (
            <Image
              className="mt-2"
              src="/img/general/nav/close-nav.svg"
              alt="close icon"
              width={25}
              height={25}
            />
          ) : (
            <Image
              className="mt-3"
              src="/img/general/nav/open-nav.svg"
              alt="menu icon"
              width={25}
              height={25}
            />
          )}
        </div>
        <div
          className={`lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static lg:z-auto z-[2] left-0 w-full bg-white bg-opacity-100 lg:bg-opacity-[0.0] lg:w-auto lg:pl-0 px-9 overflow-y-auto transition-all duration-500 ease-in ${
            open ? "top-[4.8rem] sm:top-[4.7rem] max-h-[90vh]" : "top-[-1000px]"
          }`}
        >
          <div className="mt-6 lg:hidden">
            <Button className="border-stroke-500 hover:bg-primary/20 transition-all border text-base py-3 px-4 w-40 rounded-full">
              <div className="flex justify-center">
                <svg
                  className="w-5 h-5 mr-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 3900 3900"
                >
                  <path fill="#b22234" d="M0 0h7410v3900H0z" />
                  <path
                    d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
                    stroke="#fff"
                    strokeWidth="300"
                  />
                  <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
                  <g fill="#fff">
                    <g id="d">
                      <g id="c">
                        <g id="e">
                          <g id="b">
                            <path
                              id="a"
                              d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"
                            />
                            <use xlinkHref="#a" y="420" />
                            <use xlinkHref="#a" y="840" />
                            <use xlinkHref="#a" y="1260" />
                          </g>
                          <use xlinkHref="#a" y="1680" />
                        </g>
                        <use xlinkHref="#b" x="247" y="210" />
                      </g>
                      <use xlinkHref="#c" x="494" />
                    </g>
                    <use xlinkHref="#d" x="988" />
                    <use xlinkHref="#c" x="1976" />
                    <use xlinkHref="#e" x="2470" />
                  </g>
                </svg>
                <p className="inline">EN</p>
                <IoChevronDown size={20} className="inline mb-1 ml-1" />
              </div>
            </Button>
          </div>
          <ul className={`flex flex-col lg:flex-row`}>
            {navLinks.map((data) => (
              <li
                key={data.id}
                className="lg:mx-0 xl:mx-4 text-xl md:my-8 sm:my-0 my-7 font-semibold font-sans"
              >
                <div className="dropdown">{data.url}</div>
              </li>
            ))}
          </ul>
          <div className="flex gap-5 lg:hidden">
            <LinkButton
              link="/telehealth"
              className=" bg-primary hover:bg-secondary-900 transition-all font-semibold text-white w-full px-8 py-3 leading-7 text-base rounded-full"
            >
              Get Started
            </LinkButton>
          </div>
        </div>
        <div className="lg:flex gap-5 hidden">
          <LinkButton
            link="/telehealth"
            className="bg-primary hover:bg-secondary-900 transition-all font-semibold text-white px-8  py-3 leading-7 text-base rounded-full"
          >
            Get Started
          </LinkButton>
          <div className="my-auto hs-dropdown relative inline-flex">
            <button
              id="hs-dropdown-with-icons"
              type="button"
              className="border-stroke-500 hover:bg-primary/20 transition-all border text-base py-2 px-4 rounded-full"
            >
              <div className="flex">
                <div></div>
                <p className="inline">EN</p>
                <IoChevronDown size={20} className="inline mb-1 ml-1" />
              </div>
            </button>
            <div
              className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-md rounded-lg p-2 mt-2 divide-y divide-gray-200 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700"
              aria-labelledby="hs-dropdown-with-icons"
            >
              <div className="py-2 first:pt-0 last:pb-0">
                {languages.map(({ code, name, country_code }) => (
                  <div
                    key={country_code}
                    className="flex"
                    onClick={() => {
                      i18next.changeLanguage(code);
                    }}
                  >
                    <div
                      className={`flag-icon flag-icon-${country_code} mx-2`}
                      style={{
                        opacity: currentLanguageCode === code ? 0.5 : 1,
                      }}
                    ></div>
                    <p className="inline">{name}</p>
                    <IoChevronDown size={20} className="inline mb-1 ml-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
