import Image from "next/image";
import { FC } from "react";
import { Button } from "../general/Button";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Blog: FC = () => {
  return (
    <div className="container pt-8 px-10 pb-8 2xl:px-0 mx-auto mt-36 mb-56">
      <div className="flex flex-col gap-10">
        <h2 className="bg-gradient-600 bg-clip-text text-transparent-active font-bold text-5xl text-center">
          News Flash/Blog Snippets
        </h2>
        <p className="text-text-500 text-2xl text-center">
          Neque, pulvinar vestibulum non aliquam.
        </p>

        <div className="grid sm:grid-rows-3 sm:grid-flow-col gap-10">
          <div className="md:row-span-3 md:col-span-2 bg-[url('/img/company/main-news.png')] h-[50rem] bg-cover relative">
            <div className="absolute bottom-5 bg-gradient-700 border border-primary rounded backdrop-blur-md px-8 w-[80%] sm:w-[60%] ml-10">
              <h3 className="font-bold text-4xl text-gray-500 mt-10">
                Doctor of the week
              </h3>
              <p className="mt-5 mb-10 font-medium text-2xl text-gray-500">
                Dr Anita tells us about her journey combining medecine and
                motherhood in a third class country
              </p>
              <Button className="bg-primary text-white text-base font-bold rounded-none px-11 mb-10">
                Read her story
                <BsFillArrowRightCircleFill className="inline ml-4" />
              </Button>
            </div>
          </div>
          <div className="bg-[url('/img/company/post-1.png')] relative bg-cover h-60">
            <div className="absolute bottom-0 border-t border-primary bg-gradient-700 backdrop-blur-sm px-8">
              <h3 className="text-gray-500 font-bold text-xl mb-5 mt-3">
                StableDoc Plans Launch Of Blockchain-Based Telehealth And Health
                Data NFTs
              </h3>
              <Button className="border-2 border-gray-500 text-white text-base font-bold rounded-none mb-5">
                Read
                <BsFillArrowRightCircleFill className="inline ml-4" />
              </Button>
            </div>
          </div>
          <div className="bg-[url('/img/company/post-2.png')] relative bg-cover h-60">
            <div className="absolute bottom-0 border-t border-primary bg-gradient-700 backdrop-blur-sm px-8">
              <h3 className="text-gray-500 font-bold text-xl mb-5 mt-3">
                StableDoc Announces Platform Partnership With PayTalk
              </h3>
              <Button className="border-2 border-gray-500 text-white text-base font-bold rounded-none mb-5">
                Read
                <BsFillArrowRightCircleFill className="inline ml-4" />
              </Button>
            </div>
          </div>
          <div className="bg-[url('/img/company/post-3.png')] relative bg-cover h-60">
            <div className="absolute bottom-0 border-t border-primary bg-gradient-700 backdrop-blur-sm px-8">
              <h3 className="text-gray-500 font-bold text-xl mb-5 mt-3">
                StableDoc Announces Platform Partnership With PayTalk
              </h3>
              <Button className="border-2 border-gray-500 text-white text-base font-bold rounded-none mb-5">
                Read
                <BsFillArrowRightCircleFill className="inline ml-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blog;
