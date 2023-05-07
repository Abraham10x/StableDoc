import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { BsFillArrowRightCircleFill, BsStopwatch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { Button, LinkButton } from "../general/Button";

const Main: FC = () => {
  const CategoriesData = [
    {
      id: 1,
      title: "Health",
      number: "02",
    },
    {
      id: 2,
      title: "Reproductive Health",
      number: "02",
    },
    {
      id: 3,
      title: "Mental Health",
      number: "01",
    },
    {
      id: 4,
      title: "StableDoc News",
      number: "02",
    },
    {
      id: 5,
      title: "Fitness",
      number: "00",
    },
    {
      id: 6,
      title: "Lifestyle",
      number: "01",
    },
  ];

  const healthData = [
    {
      id: 1,
      name: "Dr Msonter Anzaa",
      date: "March 29, 2023",
      image: "/img/blog/blog-post.png",
      header: `Key Things You Need to Know about the Silent Killer – Hypertension`,
      body: `A person is said to have hypertension when their blood pressure
      is higher than the normal range. The heart pumps blood round all
      parts of the body to supply them oxygen and nutrients, and to
      remove waste from where it is generated to where it is excreted
      from the body.`,
      link: "blog/hypertension",
    },
    {
      id: 2,
      name: "Dr Msonter Anzaa",
      date: "March 27, 2023",
      image: "/img/blog-images/diabeties.png",
      header: `Simple Facts You Must Know about Diabetes`,
      body: `Diabetes mellitus is the medical name for what is commonly known 
      as sugar disease. Medically, it is diagnosed when a person has a blood 
      sugar greater than the normal level. Blood sugar comes from a number of 
      sources, but the body of a healthy person has mechanisms to control the 
      sugar and keep it within the normal range. `,
      link: "blog/diabetes",
    },
    {
      id: 3,
      name: "Dr Isaac Agada",
      date: "April 11, 2023",
      image: "/img/blog-images/drinking-water.jpg",
      header: `Benefits Of Drinking Water: How Much Do You Need In A Day?`,
      body: `Water is essential for our survival, and staying hydrated is 
      crucial for maintaining good health. Our bodies are made up of about 
      60% water, and we need to constantly replenish our fluid levels to 
      function properly. `,
      link: "blog/hydration",
    },
    {
      id: 4,
      name: "Dr Benjamin Idoko",
      date: "April 11, 2023",
      image: "/img/blog-images/stress.jpg",
      header: "Dealing With Stress And Anxiety",
      body: `Stress is a common problem that many people face on a daily basis. Whether 
        it's due to work, family responsibilities, or personal issues, stress can have a 
        negative impact on our physical and mental health. If left unchecked, stress 
        can lead to anxiety and other health problems.`,
      link: "blog/stress",
    },
    {
      id: 5,
      name: "Dr Isaac Agada",
      date: "April 13, 2023",
      image: "/img/blog-images/starlink.jpg",
      header: `Connecting Nigeria: How Starlink Could Revolutionize Telehealth 
      for Startups like StableDoc`,
      body: `Nigeria, with over 200 million people, is the most populous 
        country in Africa. Unfortunately, millions still lack access to 
        reliable internet connectivity, and this has significant consequences 
        for individuals and businesses alike. The lack of connectivity is 
        particularly challenging for businesses in the healthcare sector, 
        such as telehealth startups like StableDoc.`,
      link: "blog/starlink",
    },
    {
      id: 6,
      name: "Dr Msonter Anzaa",
      date: "April 15, 2023",
      image: "/img/blog-images/infertility.jpg",
      header: `Five Facts You Never Knew About Infertility`,
      body: `Infertility is not a sweet word by any standard. Neither is its
      sister word, sterility. In fact, the only time I ever heard
      sterility used with something positive was where it was used in
      relation to mosquitoes.`,
      link: "blog/infertility",
    },
    {
      id: 7,
      name: "Dr Isaac Agada",
      date: "April 17, 2023",
      image: "/img/blog-images/telehealth.jpg",
      header: `How Remote Care Is Changing Healthcare For Doctors And 
      Patients - The Stabledoc Difference`,
      body: `Telehealth is revolutionizing the healthcare industry, 
      providing patients with remote access to medical care and offering 
      a range of benefits to healthcare providers, especially doctors. 
      At StableDoc, we recognize the transformative power of telehealth and 
      the positive impact it has on both patients and doctors.`,
      link: "blog/telehealth",
    },
    {
      id: 8,
      name: "Dr Msonter Anzaa",
      date: "May 08, 2023",
      image: "/img/blog-images/prostate.jpg",
      header: `2 Things That Can Happen to Your Prostate and How They Affect Your Life as a Man`,
      body: `If you are like most men, you probably haven't even heard 
      the word prostate, let alone knowing that you have one. And please, 
      note that the word is p-r-o-s-t-a-t-e and not p-r-o-s-t-R-a-t-e! 
      Sadly, with your prostate, the saying that what you don't know can't 
      hurt you does not apply.`,
      link: "blog/prostate",
    },
  ];

  const latestPost = [
    {
      id: 1,
      name: "Dr Isaac Agada",
      date: "April 17, 2023",
      image: "/img/blog-images/telehealth.jpg",
      header: `How Remote Care Is Changing Healthcare For Doctors And 
      Patients - The Stabledoc Difference`,
      body: `Telehealth is revolutionizing the healthcare industry, 
      providing patients with remote access to medical care and offering 
      a range of benefits to healthcare providers, especially doctors. 
      At StableDoc, we recognize the transformative power of telehealth and 
      the positive impact it has on both patients and doctors.`,
      link: "blog/telehealth",
    },
    {
      id: 2,
      name: "Dr Msonter Anzaa",
      date: "May 08, 2023",
      image: "/img/blog-images/prostate.jpg",
      header: `2 Things That Can Happen to Your Prostate and How They Affect Your Life as a Man`,
      body: `If you are like most men, you probably haven't even heard 
      the word prostate, let alone knowing that you have one. And please, 
      note that the word is p-r-o-s-t-a-t-e and not p-r-o-s-t-R-a-t-e! 
      Sadly, with your prostate, the saying that what you don't know can't 
      hurt you does not apply.`,
      link: "blog/prostate",
    },
  ];

  const blogPost = healthData.reverse();

  const latest = latestPost.reverse();

  const [categories, setCategories] = useState({
    title: "Health",
    number: "02",
  });
  return (
    <div className="container pt-12 px-5 sm:px-10 pb-8 2xl:px-0 mx-auto mt-0 sm:mt-5 lg:mt-10">
      <div className="flex flex-col lg:flex-row justify-between gap-10 sm:gap-12 lg:gap-16">
        <div className="basis-1/4">
          <div className="relative mt-1">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <FiSearch
                color="#94A3B8"
                className="text-lg sm:text-2xl lg:text-3xl"
              />
            </div>
            <input
              type="text"
              className={`block w-full rounded-md border-[1px] border-primary px-3 py-4 pl-10 sm:pl-12 lg:pl-14 text-sm sm:text-xl lg:text-2xl text-[#94A3B8] font-normal my-auto`}
              placeholder="Search"
            />
          </div>
          <div className="mt-8 border border-[#A9C5DE] py-4 sm:py-6 lg:py-8 px-5 rounded-xl">
            <h3 className="bg-gradient-600 bg-clip-text text-transparent-active font-medium text-xl sm:text-2xl lg:text-3xl">
              Latest posts
            </h3>
            {latest.map((post) => (
              <Link key={post.id} href={post.link} legacyBehavior>
                <a target="_blank" rel="noopener noreferrer">
                  <div className="flex flex-row gap-6 mt-4 sm:mt-7 lg:mt-8 hover:bg-secondary-700 transition-colors p-2 cursor-pointer">
                    <Image
                      src={post.image}
                      className="object-cover rounded-[100%] w-16 h-16 my-auto"
                      alt="post image"
                      width={50}
                      height={50}
                    />
                    <p className="text-base sm:text-lg lg:text-xl my-auto text-[#547196]">
                      {post.header}
                    </p>
                  </div>
                </a>
              </Link>
            ))}
          </div>

          <div className="lg:hidden mt-8">
            <h3 className="text-xl font-medium bg-gradient-600 bg-clip-text text-transparent-active">
              Categories
            </h3>
            <div className="hs-dropdown relative inline-flex w-full">
              <button
                id="hs-dropdown-default"
                type="button"
                className="hs-dropdown-toggle py-3 px-4 gap-2 mt-4 rounded-sm border-none font-medium max-w-full w-full sm:max-w-screen-2xl text-gray-700 align-middle bg-[#F5FAFF] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:text-lg"
              >
                <div className="flex flex-row justify-between">
                  <p className="text-base sm:text-xl font-normal text-text-500">
                    {categories.title}
                  </p>
                  <div className="flex flex-row gap-4">
                    <p className="text-base sm:text-xl font-normal text-text-500">
                      {categories.number}
                    </p>
                    <svg
                      className="hs-dropdown-open:rotate-180 w-3.5 h-3.5 text-text-500 my-auto"
                      width="20"
                      height="20"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </button>

              <div
                className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] hs-dropdown-open:opacity-100 opacity-0 w-72 sm:w-[90%] hidden z-10 mt-2 min-w-[18rem] bg-white shadow-md rounded-[10px] p-2"
                aria-labelledby="hs-dropdown-default"
              >
                {CategoriesData.map((data) => (
                  <Button
                    key={data.id}
                    className=" gap-x-3.5 py-2 px-3 pr-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 w-full"
                    onClick={() =>
                      setCategories({ title: data.title, number: data.number })
                    }
                  >
                    <div className="flex flex-row justify-between">
                      <p className="bg-gradient-600 bg-clip-text text-transparent-active text-base sm:text-xl">
                        {data.title}
                      </p>
                      <p className="text-base sm:text-xl text-text-500">
                        {data.number}
                      </p>
                    </div>
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 border border-stroke-500 py-8 px-5 rounded-xl hidden lg:block">
            <h3 className="bg-gradient-600 bg-clip-text text-transparent-active font-medium text-3xl mb-6">
              Categories
            </h3>
            {CategoriesData.map((data) => (
              <div
                key={data.id}
                className="flex flex-row justify-between mt-4 hover:bg-secondary-700 transition-colors p-2 cursor-pointer"
              >
                <p className="text-2xl text-text-500">{data.title}</p>
                <div className="border border-stroke-500 pt-1 w-10 flex justify-center">
                  <p className="text-xl text-text-500">{data.number}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="basis-9/12 hidden sm:block">
          <div className="border-stroke-500 border rounded-3xl">
            <Image
              className="rounded-t-3xl w-full h-48 sm:h-80 xl:h-96 object-cover"
              src="/img/blog-images/starlink.jpg"
              alt="checking BP"
              width={1200}
              height={1200}
            />
            <div className="px-5 py-8">
              <h3 className="text-base sm:text-2xl lg:text-4xl text-text-600">
                Connecting Nigeria: How Starlink Could Revolutionize Telehealth
                for Startups like StableDoc
              </h3>
              <div className="flex flex-row gap-4 sm:gap-20 mt-5">
                <div className="flex flex-row gap-2 sm:gap-3 lg:gap-5">
                  <BsStopwatch className="text-text-500 text-base sm:text-xl lg:text-2xl" />
                  <p className="text-sm sm:text-lg lg:text-2xl text-text-500">
                    April 13, 2023
                  </p>
                </div>
                <div className="flex flex-row gap-2 sm:gap-3 lg:gap-5">
                  <BiUser className="text-text-500 text-base sm:text-xl lg:text-2xl" />
                  <p className="text-sm sm:text-lg lg:text-2xl text-text-500">
                    Dr Isaac Agada
                  </p>
                </div>
              </div>
              {/* <div className="flex flex-row gap-2 sm:gap-3 lg:gap-5 my-4">
                <FaRegCommentDots className="text-text-500 text-base sm:text-xl lg:text-2xl" />
                <p className="text-sm sm:text-lg lg:text-2xl text-text-500">
                  10 Comment
                </p>
              </div> */}
              <p className="my-7 text-sm sm:text-lg lg:text-2xl text-text-500">
                Nigeria, with over 200 million people, is the most populous
                country in Africa. Unfortunately, millions still lack access to
                reliable internet connectivity, and this has significant
                consequences for individuals and businesses alike. The lack of
                connectivity is particularly challenging for businesses in the
                healthcare sector, such as telehealth startups like StableDoc.
              </p>
              <LinkButton
                link="/blog/starlink"
                target="_blank"
                className="bg-primary hover:bg-secondary-900 transition-colors font-semibold text-white px-7 sm:px-11 py-1.5 sm:py-3 leading-7 text-xs sm:text-base rounded-full"
              >
                Read More
                <BsFillArrowRightCircleFill className="inline ml-4" />
              </LinkButton>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 mb-36">
        {/* <h1 className="text-lg sm:text-2xl lg:text-5xl font-bold mb-8 bg-gradient-600 bg-clip-text text-transparent-active">
          Health
        </h1> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
          {blogPost.map((data) => (
            <div key={data.id} className="border-stroke-500 border rounded-3xl">
              <Image
                className="rounded-t-3xl object-cover w-full h-44 sm:h-72 lg:h-96"
                src={data.image}
                alt="checking BP"
                width={1200}
                height={1200}
              />
              <div className="px-5 py-8">
                <h3 className="text-base sm:text-2xl lg:text-4xl text-text-600">
                  {data.header}
                </h3>
                <div className="flex flex-row gap-4 sm:gap-20 mt-5">
                  <div className="flex flex-row gap-2 sm:gap-3 lg:gap-5">
                    <BsStopwatch className="text-text-500 text-base sm:text-xl lg:text-2xl" />
                    <p className="text-sm sm:text-lg lg:text-2xl text-text-500">
                      {data.date}
                    </p>
                  </div>
                  <div className="flex flex-row gap-2 sm:gap-3 lg:gap-5">
                    <BiUser className="text-text-500 text-base sm:text-xl lg:text-2xl" />
                    <p className="text-sm sm:text-lg lg:text-2xl text-text-500">
                      {data.name}
                    </p>
                  </div>
                </div>
                <p className="my-7 text-sm sm:text-lg lg:text-2xl text-text-500">
                  {data.body}
                </p>
                <LinkButton
                  link={data.link}
                  target="_blank"
                  className="bg-primary hover:bg-secondary-900 transition-colors font-semibold text-white px-7 sm:px-11 py-1.5 sm:py-3 leading-7 text-xs sm:text-base rounded-full"
                >
                  Read More
                  <BsFillArrowRightCircleFill className="inline ml-4" />
                </LinkButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
