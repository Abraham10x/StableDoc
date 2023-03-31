import Image from "next/image";
import { FC } from "react";

const Features: FC = () => {
  const FeatureData = [
    {
      id: 1,
      image: "/img/partners/feature-1.png",
      class: "",
      header: `Complete control of your schedule`,
      body: `Whether you are seeing patients from home office or from your 
      hospital office, you have complete control of your schedules. StableDoc 
      partner app allows you to easily edit your availabilities based on your 
      time need to avoid interference with work period.`,
    },
    {
      id: 2,
      image: "/img/partners/feature-2.png",
      class: "sm:flex-row-reverse",
      header: `Easy to use platform`,
      body: `The StableDoc partner app is super user friendly with lots of 
      cool features ranging from fast and easy availability set up, 
      clinical note entry features, laboratory tests and drugs prescription 
      feature that mimick the in-hospital setting.`,
    },
    {
      id: 3,
      image: "/img/partners/feature-3.png",
      class: "",
      header: `Earn from the comfort of your home`,
      body: `With StableDoc partner app, you can earn passive income on the go. 
      Irrespective of your location per time- be it home or office,  your 
      patient is just a booking away.`,
    },
    {
      id: 4,
      image: "/img/partners/feature-4.png",
      class: "sm:flex-row-reverse",
      header: `Video and voice consultations`,
      body: `Our video call feature forms the core part of the StableDoc 
      healthcare delivery. Our high resolution video conferencing brings 
      you face to face with your patients for medical consultation, 
      prescription and referral advices.`,
    },
  ];
  return (
    <div className="container px-5 sm:px-10 pb-8 2xl:px-0 mx-auto mt-0 sm:mt-5">
      {FeatureData.map((data) => (
        <div
          key={data.id}
          className={`flex flex-col sm:flex-row gap-20 ${data.class} justify-between py-14`}
        >
          <div className="flex-col basis-[45%] my-auto">
            <h3 className="text-xl sm:text-3xl lg:text-4xl text-center sm:text-left font-bold sm:font-medium bg-gradient-600 bg-clip-text text-transparent-active">
              {data.header}
            </h3>
            <p
              className="mt-5 text-text-600 text-center sm:text-left text-base sm:text-lg
             lg:text-2xl"
            >
              {data.body}
            </p>
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
