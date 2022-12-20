import Image from "next/image";
import { FC } from "react";

const Social: FC = () => {
  return (
    <div className="container pt-12 px-10 pb-8 2xl:px-0 mx-auto mt-10">
      <div className="bg-secondary-700 py-16">
        <h3 className="bg-gradient-600 bg-clip-text text-transparent-active font-medium text-5xl text-center">
          Connect with us on social media
        </h3>
      </div>
      <div className="h-[30rem] bg-social-bg bg-no-repeat bg-cover rounded-3xl relative">
        <div className="absolute top-24 left-[26rem]">
          <Image
            src="/img/support/instagram.svg"
            alt="instagram logo"
            width={120}
            height={120}
          />
        </div>
        <div className="absolute top-24 left-[50rem]">
          <Image
            src="/img/support/twitter.svg"
            alt="twitter logo"
            width={120}
            height={120}
          />
        </div>
        <div className="absolute top-24 right-44">
          <Image
            src="/img/support/facebook.svg"
            alt="facebook logo"
            width={120}
            height={120}
          />
        </div>
        <div className="absolute bottom-14 left-44">
          <Image
            src="/img/support/linkedin.svg"
            alt="linkedin logo"
            width={120}
            height={120}
          />
        </div>
        <div className="absolute bottom-14 left-[40rem]">
          <Image
            src="/img/support/whatsapp.svg"
            alt="whatsapp logo"
            width={120}
            height={120}
          />
        </div>
        <div className="absolute bottom-14 left-[62rem]">
          <Image
            src="/img/support/youtube.svg"
            alt="youtude logo"
            width={120}
            height={120}
          />
        </div>
      </div>
    </div>
  );
};
export default Social;
