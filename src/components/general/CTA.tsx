import { FC } from "react";
import { SubmitButton } from "./Button";
import Image from "next/image";

const CTA: FC = () => {
  return (
    <div className="container pt-12 px-10 pb-8 2xl:px-14 mx-auto mt-10 mb-28">
      <div className="px-20 py-20 flex flex-col sm:flex-row bg-primary rounded-3xl relative">
        <div className="flex flex-col pt-4 pb-9 z-20">
          <h3 className="text-white font-bold font-sans text-4xl">
            Subscribe to our newsletter
          </h3>
          <p className="text-lg text-white font-normal mt-4">
            Receive the latest news, and updates about stabledoc and our
            products
          </p>
          <div className="mt-8">
            <form>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Your email here"
                  className="bg-gray-50 border border-[#A9C5DE] text-[#7889B2] shadow-sm text-base rounded-md focus:ring-secondary-600 focus:border-primary block w-full pl-5 pr-2.5 py-3.5"
                />
                <SubmitButton
                  type="summit"
                  className="text-lg font-medium bg-primary px-8 py-2 text-white absolute top-1.5 right-2 rounded"
                >
                  Join Now
                </SubmitButton>
              </div>
            </form>
          </div>
        </div>
        <div className="absolute right-0 bottom-0">
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
