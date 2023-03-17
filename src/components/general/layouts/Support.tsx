import Image from "next/image";
import { FC } from "react";
import { IoChevronDown } from "react-icons/io5";
import { LinkButton } from "../Button";

const Support: FC = () => {
  const SupportData = [
    {
      id: 1,
      image: "/img/general/nav/learn.png",
      text: "Support",
      link: "/support",
    },
    {
      id: 2,
      image: "/img/general/nav/question.png",
      text: "FAQs",
      link: "/#FAQs",
    },
    {
      id: 3,
      image: "/img/general/nav/social.png",
      text: "Social Media",
      link: "/support/#social-media",
    },
    {
      id: 4,
      image: "/img/general/nav/contact.png",
      text: "Get In Touch",
      link: "/support/#contact-us",
    },
  ];
  return (
    <div>
      <div className="hs-dropdown [--strategy:static] lg:[--strategy:absolute] [--adaptive:none] lg:[--trigger:hover]">
        <p className="md:px-6 lg:px-3 hover:bg-gradient-600 hover:bg-clip-text text-transparent text-text-600 text-base cursor-pointer">
          Contact Us
          {/* <IoChevronDown className="hover:bg-gradient-600 hover:bg-clip-text hover:font-semibold inline mb-1 ml-1" /> */}
        </p>

        <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-full hidden z-10 top-full left-0 min-w-[15rem] bg-none before:absolute before:-top-5 before:left-0 before:w-full before:h-5">
          <div className="w-full sm:pl-6 lg:pl-0 lg:w-3/4 mx-auto bg-white lg:shadow-md py-5">
            <p className="text-lg text-text-600 my-10 text-center hidden lg:block">
              StableDoc offers many solutions to better the healthcare and
              crypto space in Africa.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-between px-0 lg:px-16">
              {SupportData.map((data) => (
                <LinkButton key={data.id} link={data.link}>
                  <div className="flex gap-5">
                    <Image
                      src={data.image}
                      alt={data.text}
                      width={data.id == 4 ? 40 : 40}
                      height={data.id == 4 ? 40 : 40}
                    />
                    <p className="text-base text-text-600 font-medium my-auto">
                      {data.text}
                    </p>
                  </div>
                </LinkButton>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Support;
