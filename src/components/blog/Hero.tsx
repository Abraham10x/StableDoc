import Image from "next/image";
import { FC } from "react";

const Hero: FC = () => {
  return (
    <div className="container pt-12 px-5 sm:px-10 pb-8 2xl:px-0 mx-auto">
      <div className="flex flex-col lg:flex-row justify-between bg-secondary-600 bg-opacity-10 gap-y-24 gap-x-14 px-5 sm:px-16 py-12 rounded-3xl">
        <div className="flex flex-col justify-between h-full basis-[54%] my-auto">
          <div className="flex flex-row justify-start">
            <h1 className="font-bold text-2xl sm:text-3xl lg:text-5xl bg-gradient-600 bg-clip-text text-transparent-active">
              StableDoc Blog
            </h1>
            <Image
              className="lg:hidden"
              src="/img/blog/hero-mobile.svg"
              alt="Blog image"
              width={35}
              height={35}
            />
          </div>
          <p className="text-base sm:text-lg lg:text-2xl text-text-300 mt-8">
            Check out this space for news, your general health tips, all round
            wellness and mental health, fitness and lifestyle.
          </p>
        </div>
        <Image
          className="basis-full w-full lg:basis-[20%] hidden lg:block"
          src="/img/blog/blog-hero.png"
          alt="Blog image"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};

export default Hero;
