import { FC } from "react";

interface IProps {
  body: string;
  summary: string;
  blogImage: string;
  title: string;
}

const MainBody: FC<IProps> = ({ body, summary, blogImage, title }: IProps) => {
  return (
    <div className="pt-12 px-5 sm:px-10 pb-8 mx-auto mt-0 sm:mt-5 lg:mt-10">
      <img
        src={blogImage}
        className="w-full h-96 lg:h-[34rem] object-cover"
        alt={title}
        width={4000}
        height={500}
      />
      <div className="my-4">
        <p className="text-[#7889B2] text-base sm:text-lg lg:text-2xl mt-4">
          {summary}
        </p>
      </div>
      <div
        className="mt-14 main-blog"
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </div>
  );
};

export default MainBody;
