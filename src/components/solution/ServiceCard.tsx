import Image from "next/image";
import { FC } from "react";
import { Button } from "../general/Button";

interface IProps {
  id: any;
  className: any;
  header: any;
  body: any;
  image: any;
}

const ServiceCard: FC<IProps> = ({ id, className, header, body, image }) => {
  return (
    <div
      key={id}
      className={`flex flex-col sm:flex-row gap-20 ${className} justify-between py-14`}
    >
      <div className="flex-col basis-[45%] my-auto">
        <h3 className="text-4xl font-medium bg-gradient-600 bg-clip-text text-transparent-active">
          {header}
        </h3>
        <p className="mt-5 text-text-600 text-2xl">{body}</p>
        <div className="mt-10">
          <Button className="bg-primary font-semibold text-white px-11 py-3 leading-7 text-base rounded-full">
            Contact Us
          </Button>
        </div>
      </div>

      <div className="bg-secondary-700 rounded-3xl h-[32.5rem] relative basis-[45%] pt-20">
        <Image
          src={image}
          className="mx-auto"
          alt="phone feature"
          height={450}
          width={450}
        />
      </div>
    </div>
  );
};
export default ServiceCard;
