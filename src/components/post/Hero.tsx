import Image from "next/image";
import { FC } from "react";
import { LinkButton } from "../general/Button";
import { BsStopwatch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";

interface IProps {
  title: string;
  datePosted: string;
  author: string;
}

const Hero: FC<IProps> = ({ title, datePosted, author }: IProps) => {
  return (
    <div className="container pt-12 px-5 sm:px-10 sm:pb-8 2xl:px-0 mx-auto">
      <div className="flex flex-col lg:flex-row justify-between bg-secondary-600 bg-opacity-10 gap-y-24 gap-x-14 px-5 sm:px-16 py-12 rounded-3xl">
        <div className="flex flex-col justify-between h-full basis-full my-auto">
          <div className="flex flex-row justify-start gap-5">
            <h1 className="font-bold text-2xl sm:text-4xl lg:text-5xl bg-gradient-600 bg-clip-text text-transparent-active">
              {title}
            </h1>
          </div>
          <div className="flex flex-row gap-4 sm:gap-12 mt-9">
            <div className="flex flex-row gap-2 sm:gap-3 lg:gap-5">
              <BsStopwatch className="text-text-500 text-base sm:text-xl lg:text-2xl" />
              <p className="text-sm sm:text-lg lg:text-2xl text-text-500">
                {datePosted}
              </p>
            </div>
            <div className="flex flex-row gap-2 sm:gap-3 lg:gap-5">
              <BiUser className="text-text-500 text-base sm:text-xl lg:text-2xl" />
              <p className="text-sm sm:text-lg lg:text-2xl text-text-500">
                {author}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
