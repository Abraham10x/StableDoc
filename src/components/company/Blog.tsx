import Image from "next/image";
import { FC } from "react";
import { Button, LinkButton } from "../general/Button";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Blog: FC = () => {
  return (
    <div className="container pt-8 px-5 sm:px-10 pb-8 2xl:px-0 mx-auto mt-10 sm:mt-20 lg:mt-36 mb-56">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2 sm:gap-6 lg:gap-10">
          <h2 className="bg-gradient-600 bg-clip-text text-transparent-active font-bold text-2xl sm:text-3xl lg:text-5xl text-center">
            News Flash/Blog Snippets
          </h2>
          {/* <p className="text-text-500 text-base sm:text-2xl text-center">
            Neque, pulvinar vestibulum non aliquam.
          </p> */}
        </div>

        <div className="grid grid-rows-4 sm:grid-rows-3 sm:grid-flow-col gap-10 sm:gap-5 xl:gap-10">
          <div className="md:row-span-3 md:col-span-2 bg-[url('/img/blog-images/diabeties.png')] sm:bg-center bg-no-repeat h-80 sm:h-[auto] lg:h-[50rem] bg-cover relative">
            <div className="absolute bottom-0 sm:bottom-5 bg-gradient-700 border border-primary rounded backdrop-blur-sm sm:backdrop-blur-md px-4 sm:px-8 w-full sm:w-[80%] lg:w-[60%] m-0 sm:ml-10">
              <h3 className="font-bold text-lg sm:text-2xl lg:text-4xl text-gray-500 mt-5 sm:mt-10 mb-5 sm:mb-10">
                Simple Facts You Must Know about Diabetes
              </h3>
              {/* <p className="mt-2 sm:mt-5 mb-5 sm:mb-10 font-medium text-sm sm:text-xl lg:text-2xl text-gray-500">
                Dr Anita tells us about her journey combining medecine and
                motherhood in a third class country
              </p> */}
              <LinkButton
                link="/blog/diabetes"
                target="_blank"
                className="bg-primary hover:bg-secondary-900 transition-all text-white text-xs sm:text-base font-bold rounded-full sm:rounded-none px-5 sm:px-10 py-4 mb-4 sm:mb-10"
              >
                Read More
                <BsFillArrowRightCircleFill className="inline ml-4" />
              </LinkButton>
            </div>
          </div>
          <div className="bg-[url('/img/blog/blog-post.png')] relative bg-cover h-80 sm:h-48 lg:h-60">
            <div className="absolute bottom-0 border-t border-primary bg-gradient-700 backdrop-blur-sm px-8">
              <h3 className="text-gray-500 font-bold text-base sm:text-sm lg:text-xl mb-5 mt-3">
                Key Things You Need to Know about the Silent Killer –
                Hypertension
              </h3>
              <LinkButton
                link="/blog/hypertension"
                target="_blank"
                className="border-2 border-gray-500 text-white hover:bg-secondary-400/20 transition-all text-xs sm:text-base font-bold rounded-full sm:rounded-none mb-5 px-5 py-2"
              >
                Read
                <BsFillArrowRightCircleFill className="inline ml-4" />
              </LinkButton>
            </div>
          </div>
          <div className="bg-[url('/img/blog-images/diabeties.png')] relative bg-cover h-80 sm:h-48 lg:h-60">
            <div className="absolute bottom-0 border-t border-primary bg-gradient-700 backdrop-blur-sm px-8">
              <h3 className="text-gray-500 font-bold text-base sm:text-sm lg:text-xl mb-5 mt-3">
                Simple Facts You Must Know about Diabetes
              </h3>
              <LinkButton
                link="/blog/diabetes"
                target="_blank"
                className="border-2 border-gray-500 text-white hover:bg-secondary-400/20 transition-all text-xs sm:text-base font-bold rounded-full sm:rounded-none mb-5 px-5 py-2"
              >
                Read
                <BsFillArrowRightCircleFill className="inline ml-4" />
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blog;
