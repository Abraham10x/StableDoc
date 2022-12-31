import { FC } from "react";
import { SubmitButton } from "./Button";
import Image from "next/image";

const CTA: FC = () => {
  return (
    <div className="container pt-12 px-10 pb-8 2xl:px-14 mx-auto mt-4 sm:mt-10 mb-28">
      <div className="px-5 sm:pr-0 sm:pl-10 lg:px-20 py-8 sm:py-20 flex flex-col sm:flex-row gap-10 bg-primary rounded-xl sm:rounded-3xl relative h-96 sm:h-auto">
        <div className="flex flex-col pt-4 pb-9 z-20 sm:basis-[60%] lg:basis-auto">
          <h3 className="text-white font-bold font-sans text-xl sm:text-4xl">
            Subscribe to our newsletter
          </h3>
          <p className="text-base sm:text-lg text-white font-normal mt-2 sm:mt-4">
            Receive the latest news, and updates about stabledoc and our
            products
          </p>
          <div className="mt-8">
            <form>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Your email here"
                  className="bg-gray-50 border border-[#A9C5DE] text-[#7889B2] shadow-sm text-sm sm:text-base rounded-full focus:ring-secondary-600 focus:border-primary block w-full pl-5 pr-2.5 py-3.5"
                />
                <SubmitButton
                  type="summit"
                  className="text-sm sm:text-lg font-medium bg-primary hover:bg-secondary-900 px-4 sm:px-8 py-2.5 sm:py-2 text-white absolute top-1.5 right-2 rounded-full"
                >
                  Join Now
                </SubmitButton>
              </div>
            </form>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 sm:relative sm:basis-[40%] lg:absolute">
          <Image
            src="/img/general/cta.svg"
            alt="newsletter image"
            width={540}
            height={540}
          />
        </div>
      </div>
    </div>
  );
};
export default CTA;
