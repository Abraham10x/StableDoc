import Image from "next/image";
import { FC } from "react";

const Features: FC = () => {
  const FeatureData = [
    {
      id: 1,
      image: "/img/partners/feature-1.png",
      class: "",
      header: `Complete control of your schedule`,
      body: `Lorem ipsum dolor sit amet doloroli sitiol conse ctetur 
    adipiscing elit. dolor sit amet doloroli sitiol conse ctetur 
    adipiscing elitdolor sit amet doloroli sitiol conse ctetur `,
    },
    {
      id: 2,
      image: "/img/partners/feature-2.png",
      class: "sm:flex-row-reverse",
      header: `Increased Visibility`,
      body: `Lorem ipsum dolor sit amet doloroli sitiol conse ctetur 
    adipiscing elit. dolor sit amet doloroli sitiol conse ctetur 
    adipiscing elitdolor sit amet doloroli sitiol conse ctetur `,
    },
    {
      id: 3,
      image: "/img/partners/feature-3.png",
      class: "",
      header: `Earn from the comfort of your home`,
      body: `Lorem ipsum dolor sit amet doloroli sitiol conse ctetur 
    adipiscing elit. dolor sit amet doloroli sitiol conse ctetur 
    adipiscing elitdolor sit amet doloroli sitiol conse ctetur `,
    },
    {
      id: 4,
      image: "/img/partners/feature-4.png",
      class: "sm:flex-row-reverse",
      header: `Video and voice consultations`,
      body: `Lorem ipsum dolor sit amet doloroli sitiol conse ctetur 
    adipiscing elit. dolor sit amet doloroli sitiol conse ctetur 
    adipiscing elitdolor sit amet doloroli sitiol conse ctetur `,
    },
  ];
  return (
    <div className="container pt-12 px-10 pb-8 2xl:px-0 mx-auto mt-10">
      {FeatureData.map((data) => (
        <div
          key={data.id}
          className={`flex flex-col sm:flex-row gap-20 ${data.class} justify-between py-14`}
        >
          <div className="flex-col basis-[45%] my-auto">
            <h3 className="text-4xl font-medium bg-gradient-600 bg-clip-text text-transparent-active">
              {data.header}
            </h3>
            <p className="mt-5 text-text-600 text-2xl">{data.body}</p>
          </div>

          <div className="bg-secondary-700 rounded-3xl relative basis-[45%] pt-20">
            <Image
              src={data.image}
              className="mx-auto"
              alt="phone feature"
              height={200}
              width={200}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default Features;
