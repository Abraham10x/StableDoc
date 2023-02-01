import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { IoChevronDown } from "react-icons/io5";
import { LinkButton } from "../Button";

const Solutions: FC = () => {
  const BorderData = [
    {
      id: 1,
      image: "/img/general/nav/doctor-kit.png",
      header: "Abroad Referral & Medical Tourism",
      link: "/solution/#Abroad-Referral-&-Medical-Tourism",
    },
    {
      id: 2,
      image: "/img/general/nav/report.png",
      header: "Annual Physical",
      link: "/solution/#Annual-Physical",
    },
    {
      id: 3,
      image: "/img/general/nav/pod.png",
      header: "StablePods",
      link: "/solution/#StablePods",
    },
    {
      id: 4,
      image: "/img/general/nav/doctor.png",
      header: "Diaspora Sponsored Health",
      link: "/solution/#Diaspora-Sponsored-Health",
    },
  ];
  const BlockchainData = [
    {
      id: 1,
      image: "/img/general/nav/chart.png",
      header: "Mov2Earn",
      link: "/M2E",
    },
    {
      id: 2,
      image: "/img/general/nav/VR.png",
      header: "Virtual Reality – And The Metaverse",
      link: "/solution/#Virtual-Reality-–-And-The-Metaverse-",
    },
    {
      id: 3,
      image: "/img/general/nav/robot.png",
      header: "AI-Enabled Apps, Tools And Devices",
      link: "/solution/#AI-Enabled-Apps,-Tools-And-Devices",
    },
    {
      id: 4,
      image: "/img/general/nav/nft-token.png",
      header: "StableDoc Health NFT",
      link: "/solution/#StableDoc-Health-NFT",
    },
  ];
  return (
    <div>
      <div className="hs-dropdown [--strategy:static] lg:[--strategy:absolute] [--adaptive:none] lg:[--trigger:hover] overflow-y-auto">
        <p className="md:px-6 lg:px-3 hover:bg-gradient-600 hover:bg-clip-text text-transparent text-text-600 text-base cursor-pointer">
          Solution
          <IoChevronDown className="hover:bg-gradient-600 hover:bg-clip-text hover:font-semibold inline mb-1 ml-1" />
        </p>

        <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-full hidden z-10 top-full left-0 min-w-[15rem] bg-none before:absolute before:-top-5 before:left-0 before:w-full before:h-5">
          <div className="w-full sm:pl-6 lg:pl-0 lg:w-3/4 mx-auto bg-white lg:shadow-md py-5">
            <p className="text-lg text-text-600 my-10 text-center hidden lg:block">
              StableDoc offers many solutions to better the healthcare and
              crypto space in Africa.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-between px-0 lg:px-16">
              <div className="flex flex-col mb-4 lg:mb-0">
                <Link legacyBehavior href="#">
                  <Link
                    href="/solution"
                    className="text-text-600 font-medium text-base sm:text-lg lg:text-xl border-b pb-3 mb-6 w-fit sm:hover:text-[1.4rem] hover:text-primary transition-all"
                  >
                    Premium Health Services
                  </Link>
                </Link>
                <div className="flex flex-col gap-1 sm:gap-2 lg:gap-4">
                  <LinkButton link="/solution/#Home-Health">
                    <div className="flex gap-4">
                      <Image
                        src="/img/general/nav/home.png"
                        alt="home health care"
                        width={50}
                        height={50}
                      />
                      <p className="text-sm lg:text-base text-text-600 font-medium my-auto">
                        Home Health
                      </p>
                    </div>
                  </LinkButton>
                  <LinkButton link="/solution/#Men-and-women’s-health">
                    <div className="flex gap-4">
                      <Image
                        src="/img/general/nav/health-care.png"
                        alt="healthcare worker"
                        width={50}
                        height={50}
                      />
                      <p className="text-sm lg:text-base text-text-600 font-medium my-auto">
                        Men and women’s health
                      </p>
                    </div>
                  </LinkButton>
                </div>
              </div>
              <div className="flex flex-col mb-4 lg:mb-0">
                <Link legacyBehavior href="/solution">
                  <a
                    href="#"
                    className="text-text-600 font-medium text-base sm:text-lg lg:text-xl border-b pb-3 mb-6 w-fit sm:hover:text-[1.4rem] hover:text-primary transition-all"
                  >
                    Cross Border Health
                  </a>
                </Link>
                <div className="flex flex-col gap-1 sm:gap-2 lg:gap-4">
                  {BorderData.map((data) => (
                    <LinkButton key={data.id} link={data.link}>
                      <div className="flex gap-4">
                        <Image
                          src={data.image}
                          alt="home health care"
                          width={data.id === 4 ? 25 : 40}
                          height={data.id === 4 ? 25 : 40}
                        />
                        <p className="text-sm lg:text-base text-text-600 font-medium my-auto">
                          {data.header}
                        </p>
                      </div>
                    </LinkButton>
                  ))}
                </div>
              </div>
              <div className="flex flex-col mb-4 lg:mb-0">
                <Link legacyBehavior href="/solution">
                  <a
                    href="#"
                    className="text-text-600 font-medium text-base sm:text-lg lg:text-xl border-b pb-3 mb-6 w-fit sm:hover:text-[1.4rem] hover:text-primary transition-all"
                  >
                    Your health on a blockchain
                  </a>
                </Link>
                <div className="flex flex-col gap-1 sm:gap-2 lg:gap-4">
                  {BlockchainData.map((data) => (
                    <LinkButton key={data.id} link={data.link}>
                      <div className="flex gap-4">
                        <Image
                          src={data.image}
                          alt="home health care"
                          width={40}
                          height={40}
                        />
                        <p className="text-sm lg:text-base text-text-600 font-medium my-auto">
                          {data.header}
                        </p>
                      </div>
                    </LinkButton>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Solutions;
