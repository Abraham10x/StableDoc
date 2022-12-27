import { FC } from "react";
import AppStore from "../general/AppStore";
import Image from "next/image";

const Features: FC = () => {
  const FeatureData = [
    {
      id: 1,
      image: "/img/m2e/feature-1.png",
      class: "",
      header: `Move to Earn StableFit Token`,
      body: `Get fit and earn crypto while at it. 
      Whether you are walking, running, jumping or dancing.`,
    },
    {
      id: 2,
      image: "/img/m2e/feature-2.png",
      class: "sm:flex-row-reverse",
      header: `Track your fitness progress`,
      body: `We do the hard work of tracking for you. We track 
      the time spent moving, calories and distance, and show you 
      changes over time.`,
    },
    {
      id: 3,
      image: "/img/m2e/feature-3.png",
      class: "",
      header: `Donate your earnings to causes you care about`,
      body: `You can be a part of creating change. Donate your 
      fitness earnings to causes that directly impacts millions of people.`,
    },
  ];
  return (
    <div className="bg-secondary-700">
      <div className="container pt-14 px-10 pb-8 2xl:px-0 mx-auto mt-40">
        <h3 className="bg-gradient-600 bg-clip-text text-transparent-active font-medium text-4xl text-center mb-10">
          The StableFit app
        </h3>
        <AppStore />
        <div className="container pt-12 px-10 pb-8 2xl:px-0 mx-auto mt-10">
          {FeatureData.map((data) => (
            <div
              key={data.id}
              className={`flex flex-col sm:flex-row gap-20 ${data.class} justify-between py-14`}
            >
              <div className="flex-col basis-[40%] my-auto">
                <h3 className="text-4xl font-medium bg-gradient-600 bg-clip-text text-transparent-active">
                  {data.header}
                </h3>
                <p className="mt-8 text-text-600 text-2xl">{data.body}</p>
              </div>

              <div className="bg-gradient-600 rounded-3xl relative basis-[40%] pt-20">
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
      </div>
    </div>
  );
};

export default Features;
