import Image from "next/image";
import { FC } from "react";

const Main: FC = () => {
  return (
    <div className="container pt-12 px-5 sm:px-10 pb-8 2xl:px-0 mx-auto mt-0 sm:mt-5 lg:mt-10">
      <div className="border-2 p-6 mt-8 border-[#A9C5DE] mx-auto">
        <Image
          className="mx-auto my-9"
          src={"/img/contact/rocket-launch.svg"}
          alt="rocket icon"
          width={100}
          height={100}
        />
        <h3 className="font-bold text-xl sm:text-2xl lg:text-4xl bg-gradient-600 bg-clip-text text-transparent-active text-center">
          Global Operations
        </h3>
        <div className="text-center text-[#7889B2] text-base sm:text-lg lg:text-2xl">
          <p className="mt-4">
            3379 Peachtree Road NE (Buckhead), Suite 555 Atlanta, GA 30326,
            United States
          </p>
          <p className="mt-4">Office Phone: +1 (770) 464-6467</p>
          <p className="mt-4">Fax: +1 (770) 464-6467</p>
          <p className="mt-4">Cell Phone: +1 (470) 336-0611</p>
        </div>
      </div>
      <div className="border-2 p-6 mt-8 border-[#A9C5DE] mx-auto">
        <Image
          className="mx-auto my-9"
          src={"/img/contact/rocket-launch.svg"}
          alt="rocket icon"
          width={100}
          height={100}
        />
        <h3 className="font-bold text-xl sm:text-2xl lg:text-4xl bg-gradient-600 bg-clip-text text-transparent-active text-center">
          Africa Operations
        </h3>
        <div className="text-center text-[#7889B2] text-base sm:text-lg lg:text-2xl">
          <p className="mt-4">4 Olu Agabi Close Life Camp Abuja FCT Nigeria</p>
          <p className="mt-4">Cell Phone: Phone: +234 91 6262 7430</p>
        </div>
      </div>
      <div className="border-2 p-6 mt-8 border-[#A9C5DE] mx-auto">
        <Image
          className="mx-auto my-9"
          src={"/img/contact/rocket-launch.svg"}
          alt="rocket icon"
          width={100}
          height={100}
        />
        <h3 className="font-bold text-xl sm:text-2xl lg:text-4xl bg-gradient-600 bg-clip-text text-transparent-active text-center">
          Asia-Pacific Operations
        </h3>
        <div className="text-center text-[#7889B2] text-base sm:text-lg lg:text-2xl">
          <p className="mt-4">
            No 11, 6th Pillaiyar Koil Street, Ambal Nagar, Ekkatthuthangal,
            Chennai 600 032, India
          </p>
          <p className="mt-4">Office Phone: +91 222 50312</p>
          <p className="mt-4">Mobile Phone: +91 98408 00863</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-10 justify-center">
        <div className="border-2 p-6 mt-8 border-[#A9C5DE] w-full">
          <Image
            className="mx-auto my-9"
            src={"/img/contact/email-icon.svg"}
            alt="email icon"
            width={100}
            height={100}
          />
          <h3 className="font-semibold text-xl sm:text-2xl lg:text-4xl bg-gradient-600 bg-clip-text text-transparent-active text-center">
            Email here
          </h3>
          <p className="mt-4 text-center text-[#7889B2] text-base sm:text-lg lg:text-2xl">
            contact@stabledoc.com
          </p>
        </div>
        <div className="border-2 p-6 mt-8 border-[#A9C5DE] w-full">
          <Image
            className="mx-auto my-9"
            src={"/img/contact/phone-icon.svg"}
            alt="email icon"
            width={100}
            height={100}
          />
          <h3 className="font-semibold text-xl sm:text-2xl lg:text-4xl bg-gradient-600 bg-clip-text text-transparent-active text-center">
            Call Here
          </h3>
          <p className="mt-4 text-center text-[#7889B2] text-base sm:text-lg lg:text-2xl">
            +1 470-3360-611
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
