import Image from "next/image";
import { FC } from "react";
import Form from "../general/Form";

const Contact: FC = () => {
  return (
    <div className="container pt-12 px-10 pb-8 2xl:px-0 mx-auto mt-5 sm:mt-10">
      <h3 className="bg-gradient-600 bg-clip-text text-transparent-active font-medium text-2xl lg:text-5xl text-center mb-10">
        Contact Us
      </h3>
      <div className="bg-gradient-600 flex flex-col lg:flex-row justify-between pb-8 sm:pb-14 pt-20 px-2 sm:px-14 gap-10 rounded-[10px] sm:rounded-3xl">
        <Image
          src="/img/partners/contact.png"
          alt="contact"
          width={600}
          height={600}
        />
        <Form />
      </div>
    </div>
  );
};
export default Contact;
