import Image from "next/image";
import { FC } from "react";

interface IProps {
  blogData: any[];
  summary: string;
  blogImage: string;
}

const Main: FC<IProps> = ({ blogData, summary, blogImage }: IProps) => {
  return (
    <div className="container pt-12 px-5 sm:px-10 pb-8 2xl:px-0 mx-auto mt-0 sm:mt-5 lg:mt-10">
      <Image
        src={blogImage}
        className="w-full h-96 lg:h-[34rem] object-cover"
        alt="checking blood pressure"
        width={4000}
        height={500}
      />
      <div className="my-4">
        <p className="text-[#7889B2] text-base sm:text-lg lg:text-2xl mt-4">
          {summary}
        </p>
      </div>
      {blogData.map((data) => (
        <div key={data.id} className="mt-14">
          <h3 className="font-bold text-xl sm:text-2xl lg:text-4xl bg-gradient-600 bg-clip-text text-transparent-active">
            {data.header}
          </h3>
          <p className="text-[#7889B2] text-base sm:text-lg lg:text-2xl mt-4">
            {data.body}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Main;
