import Image from "next/image";
import { FC } from "react";

const Social: FC = () => {
  return (
    <div
      className="container pt-12 sm:px-10 pb-8 2xl:px-0 mx-auto mt-10"
      id="social-media"
    >
      <div className="bg-secondary-700 py-16 px-8 sm:px-0">
        <h3 className="bg-gradient-600 bg-clip-text text-transparent-active font-medium text-xl sm:text-2xl lg:text-5xl text-center">
          Connect with us on social media
        </h3>
        <div className="h-[8rem] sm:h-[16rem] lg:h-[30rem] bg-social-bg bg-no-repeat bg-contain lg:bg-cover rounded-sm lg:rounded-3xl relative mt-6 sm:mt-8 lg:mt-10">
          <div className="absolute top-6 sm:top-12 lg:top-24 left-24 sm:left-44 lg:left-[26rem]">
            <Image
              className="w-7 h-7 sm:w-14 sm:h-14 lg:w-28 lg:h-28"
              src="/img/support/instagram.svg"
              alt="instagram logo"
              width={120}
              height={120}
            />
          </div>
          <div className="absolute top-4 sm:top-9 lg:top-24 left-[11.5rem] sm:left-[22.5rem] lg:left-[50rem]">
            <Image
              className="w-7 h-7 sm:w-14 sm:h-14 lg:w-28 lg:h-28"
              src="/img/support/twitter.svg"
              alt="twitter logo"
              width={120}
              height={120}
            />
          </div>
          <div className="absolute top-6 sm:top-11 lg:top-24 right-[2.6rem] sm:right-20 lg:right-44">
            <Image
              className="w-7 h-7 sm:w-14 sm:h-14 lg:w-28 lg:h-28"
              src="/img/support/facebook.svg"
              alt="facebook logo"
              width={120}
              height={120}
            />
          </div>
          <div className="absolute bottom-9 sm:bottom-20 lg:bottom-14 left-10 sm:left-20 lg:left-44">
            <Image
              className="w-7 h-7 sm:w-14 sm:h-14 lg:w-28 lg:h-28"
              src="/img/support/linkedin.svg"
              alt="linkedin logo"
              width={120}
              height={120}
            />
          </div>
          <div className="absolute bottom-8 sm:bottom-20 lg:bottom-14 left-36 sm:left-72 lg:left-[40rem]">
            <Image
              className="w-7 h-7 sm:w-14 sm:h-14 lg:w-28 lg:h-28"
              src="/img/support/whatsapp.svg"
              alt="whatsapp logo"
              width={120}
              height={120}
            />
          </div>
          <div className="absolute bottom-9 sm:bottom-20 lg:bottom-14 left-56 sm:left-[28rem] lg:left-[62rem]">
            <Image
              className="w-7 h-7 sm:w-14 sm:h-14 lg:w-28 lg:h-28"
              src="/img/support/youtube.svg"
              alt="youtude logo"
              width={120}
              height={120}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Social;
