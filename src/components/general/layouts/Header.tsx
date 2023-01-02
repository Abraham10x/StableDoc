import { FC, useState } from "react";
import Link from "next/link";
import { IoClose, IoMenu, IoChevronDown } from "react-icons/io5";
import Image from "next/image";
import { Button } from "../Button";
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

const Header: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="w-full fixed top-0 left-0 bg-secondary-700 sm:px-10 z-40 bg-opacity-100 lg:bg-opacity-[0.93]">
      <div className="md:flex items-center justify-between container mx-auto py-7 lg:py-1 px-7 sm:px-0 2xl:px-0">
        <Link href="/" className="cursor-pointer">
          <figure>
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
          {open ? <IoClose /> : <IoMenu />}
        </div>
        <div
          className={`lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static lg:z-auto z-[2] left-0 w-full bg-white bg-opacity-100 lg:bg-opacity-[0.0] lg:w-auto lg:pl-0 pl-9 overflow-y-auto transition-all duration-500 ease-in ${
            open ? "top-[4.8rem] sm:top-[4.7rem] max-h-screen" : "top-[-1000px]"
          }`}
        >
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
            <Button className=" bg-primary font-semibold text-white px-8 py-4 leading-7 text-base rounded-full">
              Get Started
            </Button>
            <div className="my-auto">
              <Button className="border-stroke-500 border text-base px-4 py-2 rounded-full">
                <div className="flex">
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
                      stroke-width="300"
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
          </div>
        </div>
        <div className="lg:flex gap-5 hidden">
          <Button className="bg-primary font-semibold text-white px-8  py-3 leading-7 text-base rounded-full">
            Get Started
          </Button>
          <div className="my-auto">
            <Button className="border-stroke-500 border text-base py-2 px-4 rounded-full">
              <div className="flex">
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
                    stroke-width="300"
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
        </div>
      </div>
    </div>
  );
};

export default Header;
