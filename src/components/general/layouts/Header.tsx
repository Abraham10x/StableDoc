import { FC, useEffect, useState } from "react";
import Link from "next/link";
import { IoClose, IoMenu, IoChevronDown } from "react-icons/io5";
import Image from "next/image";
import { Button, LinkButton } from "../Button";
import Solutions from "./Solutions";
import Token from "./Token";
import Company from "./Company";
import Support from "./Support";
import SubHeader from "./SubHeader";

const navLinks = [
  {
    id: 1,
    url: <SubHeader />,
  },
  {
    id: 2,
    url: <Solutions />,
  },
  {
    id: 3,
    url: <Token />,
  },
  {
    id: 4,
    url: <Company />,
  },
  {
    id: 5,
    url: <Support />,
  },
];

const Header: FC = () => {
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
          {/* <div className="mt-6 lg:hidden">
            <Button className="border-stroke-500 hover:bg-primary/20 transition-all border text-base py-3 px-4 w-40 rounded-full">
              <div className="flex justify-center">
                <p className="inline">EN</p>
                <IoChevronDown size={20} className="inline mb-1 ml-1" />
              </div>
            </Button>
          </div> */}
          <ul
            className={`flex flex-col lg:flex-row justify-center align-middle`}
          >
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
              link="https://telehealth.stabledoc.com/"
              target="_blank"
              className=" bg-primary hover:bg-secondary-900 transition-all font-semibold text-white w-full px-8 py-3 leading-7 text-base rounded-full"
            >
              Get Started
            </LinkButton>
          </div>
        </div>
        <div className="lg:flex gap-5 hidden">
          <LinkButton
            link="https://telehealth.stabledoc.com/"
            target="_blank"
            className="bg-primary hover:bg-secondary-900 transition-all font-semibold text-white px-8  py-3 leading-7 text-base rounded-full"
          >
            Get Started
          </LinkButton>
          {/* <div className="my-auto relative inline-flex">
            <Button
              id="google_translate_element"
              type="button"
              className="border-stroke-500 hover:bg-primary/20 transition-all border text-base py-2 px-4 rounded-full"
            >
              <div className="flex justify-center">
                <p className="inline">EN</p>
                <IoChevronDown size={20} className="inline mb-1 ml-1" />
              </div>
            </Button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
