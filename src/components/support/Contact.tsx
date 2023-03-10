import Image from "next/image";
import { FC } from "react";
import Form from "../general/Form";

const Contact: FC = () => {
  return (
    <div
      className="container pt-12 px-5 sm:px-10 pb-8 2xl:px-0 mx-auto mt-0 sm:mt-10"
      id="contact-us"
    >
      <h3 className="bg-gradient-600 bg-clip-text text-transparent-active font-medium text-2xl sm:text-3xl lg:text-5xl text-center mb-10">
        Contact Us
      </h3>
      <div className="bg-gradient-600 flex flex-col lg:flex-row justify-between pb-7 lg:pb-14 pt-10 lg:pt-20 px-3 sm:px-14 lg:px-20 gap-10 rounded-[10px] sm:rounded-xl lg:rounded-3xl">
        <Form />
        <div className="flex flex-col lg:pr-10 my-auto basis-[45%]">
          <h3 className="text-white font-medium text-xl sm:text-3xl lg:text-4xl mb-2 sm:mb-4">
            Get in touch
          </h3>
          <p className="font-normal text-base sm:text-xl lg:text-2xl text-white">
            Have an enquiry? Fill out the form to contact our team
          </p>
          <div className="flex flex-row gap-5 sm:gap-8 lg:gap-10 mt-5 sm:mt-10 lg:mt-20">
            <Image
              className="w-8 h-8 sm:w-14 sm:h-14"
              src="/img/support/phone-icon.svg"
              alt="phone icon"
              width={60}
              height={60}
            />
            <p className="text-white text-sm sm:text-xl lg:text-2xl my-auto">
              +1 470-336-0611
            </p>
          </div>
          <div className="flex flex-row gap-5 sm:gap-8 lg:gap-10 mt-5 sm:mt-10 lg:mt-20">
            <Image
              className="w-8 h-8 sm:w-14 sm:h-14"
              src="/img/support/mail-icon.svg"
              alt="phone icon"
              width={60}
              height={60}
            />
            <p className="text-white text-sm sm:text-xl lg:text-2xl my-auto">
              Contact@stabledoc.com
            </p>
          </div>
          <div className="flex flex-row gap-5 sm:gap-8 lg:gap-10 mt-5 sm:mt-10 lg:mt-20">
            <Image
              className="w-8 h-8 sm:w-14 sm:h-14"
              src="/img/support/map-icon.svg"
              alt="phone icon"
              width={60}
              height={60}
            />
            <p className="text-white text-sm sm:text-xl lg:text-2xl my-auto">
              3379 Peachtree Road NE (Buckhead), Suite 555 Atlanta, GA 30326,
              USA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
