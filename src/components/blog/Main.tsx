import Image from "next/image";
import { FC } from "react";
import { FiSearch } from "react-icons/fi";
import { BsFillArrowRightCircleFill, BsStopwatch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { FaRegCommentDots } from "react-icons/fa";
import { Button } from "../general/Button";

const Main: FC = () => {
  const CategoriesData = [
    {
      id: 1,
      title: "Health",
      number: "05",
    },
    {
      id: 2,
      title: "Wellness",
      number: "15",
    },
    {
      id: 3,
      title: "Mental Health",
      number: "65",
    },
    {
      id: 4,
      title: "StableDoc news",
      number: "08",
    },
    {
      id: 5,
      title: "Fitness",
      number: "16",
    },
    {
      id: 6,
      title: "Lifestyle",
      number: "16",
    },
  ];
  return (
    <div className="container pt-12 px-10 pb-8 2xl:px-0 mx-auto mt-10">
      <div className="flex flex-col sm:flex-row justify-between gap-16">
        <div className="basis-1/4">
          <div className="relative mt-1">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <FiSearch color="#94A3B8" size={25} />
            </div>
            <input
              type="text"
              className={`block w-full rounded-md border-[1px] border-primary px-3 py-4 pl-12 text-2xl text-[#94A3B8] font-normal`}
              placeholder="Search"
            />
          </div>
          <div className="mt-8 border border-[#A9C5DE] py-8 px-5 rounded-xl">
            <h3 className="bg-gradient-600 bg-clip-text text-transparent-active font-medium text-3xl">
              Latest posts
            </h3>
            <div className="flex flex-row gap-6 mt-8">
              <Image
                src="/img/blog/latest-posts.png"
                className="object-cover rounded-[100%]"
                alt="post image"
                width={50}
                height={50}
              />
              <p className="text-xl text-[#547196]">
                StableDoc Plans Launch Of Blockchain-Based Telehealth{" "}
              </p>
            </div>
            <div className="flex flex-row gap-6 mt-5">
              <Image
                src="/img/blog/latest-posts.png"
                className="object-cover rounded-[100%]"
                alt="post image"
                width={50}
                height={50}
              />
              <p className="text-xl text-stroke-500">
                StableDoc Plans Launch Of Blockchain-Based Telehealth{" "}
              </p>
            </div>
          </div>
          <div className="mt-8 border border-stroke-500 py-8 px-5 rounded-xl">
            <h3 className="bg-gradient-600 bg-clip-text text-transparent-active font-medium text-3xl mb-6">
              Categories
            </h3>
            {CategoriesData.map((data) => (
              <div key={data.id} className="flex flex-row justify-between mt-4">
                <p className="text-2xl text-text-500">{data.title}</p>
                <div className="border border-stroke-500 pt-1 w-10 flex justify-center">
                  <p className="text-xl text-text-500">{data.number}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="basis-9/12">
          <div className="border-stroke-500 border rounded-3xl">
            <Image
              className="rounded-t-3xl"
              src="/img/blog/blog-post.png"
              alt="checking BP"
              width={1200}
              height={1200}
            />
            <div className="px-5 py-8">
              <h3 className="text-4xl text-text-600">
                16 Natural Remedies and Supplements that Lower Blood Sugar
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-20 mt-5">
                <div className="flex flex-row gap-5">
                  <BsStopwatch className="text-text-500" size={25} />
                  <p className="text-2xl text-text-500">January 25, 2021</p>
                </div>
                <div className="flex flex-row gap-5">
                  <BiUser className="text-text-500" size={25} />
                  <p className="text-2xl text-text-500">Queen Dare</p>
                </div>
              </div>
              <div className="flex flex-row gap-5 my-4">
                <FaRegCommentDots className="text-text-500" size={25} />
                <p className="text-2xl text-text-500">10 Comment</p>
              </div>
              <p className="my-7 text-2xl text-text-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ultrices facilisi sed tincidunt mauris duis pulvinar convallis
                eu. Lobortis scelerisque aliquam massa arcu, eget. Sociis odio
                quis eget lacus
              </p>
              <Button className="bg-primary font-semibold text-white px-11 py-3 leading-7 text-base rounded-full">
                Read More
                <BsFillArrowRightCircleFill className="inline ml-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 mt-28 mb-36">
        {CategoriesData.map((data) => (
          <div key={data.id} className="border-stroke-500 border rounded-3xl">
            <Image
              className="rounded-t-3xl"
              src="/img/blog/blog-post.png"
              alt="checking BP"
              width={1200}
              height={1200}
            />
            <div className="px-5 py-8">
              <h3 className="text-4xl text-text-600">
                16 Natural Remedies and Supplements that Lower Blood Sugar
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-20 mt-5">
                <div className="flex flex-row gap-5">
                  <BsStopwatch className="text-text-500" size={25} />
                  <p className="text-2xl text-text-500">January 25, 2021</p>
                </div>
                <div className="flex flex-row gap-5">
                  <BiUser className="text-text-500" size={25} />
                  <p className="text-2xl text-text-500">Queen Dare</p>
                </div>
              </div>
              <div className="flex flex-row gap-5 my-4">
                <FaRegCommentDots className="text-text-500" size={25} />
                <p className="text-2xl text-text-500">10 Comment</p>
              </div>
              <p className="my-7 text-2xl text-text-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ultrices facilisi sed tincidunt mauris duis pulvinar convallis
                eu. Lobortis scelerisque aliquam massa arcu, eget. Sociis odio
                quis eget lacus
              </p>
              <Button className="bg-primary font-semibold text-white px-11 py-3 leading-7 text-base rounded-full">
                Read More
                <BsFillArrowRightCircleFill className="inline ml-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
