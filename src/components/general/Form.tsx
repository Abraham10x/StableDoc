import Image from "next/image";
import { FC } from "react";
import { SubmitButton } from "./Button";

const Form: FC = () => {
  return (
    <div className="bg-white rounded-lg py-5 px-5 w-full lg:w-[40%]">
      <form>
        <div className="flex flex-row gap-5">
          <Image
            src="/img/general/check-icon.svg"
            alt="check-icon"
            width={50}
            height={50}
          />
          <h3 className="bg-gradient-600 bg-clip-text text-transparent-active font-medium text-2xl my-auto">
            Contact Form
          </h3>
        </div>
        <div className="mb-6 px-4 mt-6">
          <label
            htmlFor="name-input"
            className="block text-base font-medium text-text-600"
          >
            Name
          </label>
          <input
            type="text"
            id="name-input"
            placeholder="Queen"
            className="bg-gray-50 border border-[#A9C5DE] shadow-sm text-gray-900 text-base rounded-md focus:ring-secondary-600 focus:border-primary block w-full px-2.5 py-3"
          />
        </div>
        <div className="mb-6 px-4">
          <label
            htmlFor="email-input"
            className="block text-base font-medium text-text-600"
          >
            Email
          </label>
          <input
            type="email"
            id="email-input"
            placeholder="queen@gmail.com"
            className="bg-gray-50 border border-[#A9C5DE] text-[#7889B2] shadow-sm text-base rounded-md focus:ring-secondary-600 focus:border-primary block w-full px-2.5 py-3"
          />
        </div>
        <div className="mb-6 px-4">
          <label
            htmlFor="message-input"
            className="block text-base font-medium text-text-600"
          >
            Message
          </label>
          <textarea
            id="message-input"
            className="bg-gray-50 border h-64 border-[#A9C5DE] text-[#7889B2] shadow-sm text-base rounded-md focus:ring-secondary-600 focus:border-primary block w-full px-2.5 py-3"
          ></textarea>
        </div>
        <div className="px-4 mt-3">
          <SubmitButton
            type="submit"
            className="w-full bg-primary py-4 text-white font-semibold rounded text-base"
          >
            {" "}
            Send Message
          </SubmitButton>
        </div>
      </form>
    </div>
  );
};
export default Form;
