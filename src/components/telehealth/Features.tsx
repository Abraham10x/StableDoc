import { FC } from "react";
import AppStore from "../general/AppStore";
import Image from "next/image";

const Features: FC = () => {
  const FeatureData = [
    {
      id: 1,
      image: "/img/telehealth/feature-1.png",
      class: "sm:flex-row-reverse",
      header: `Find Doctors Immediately`,
      body: `Find  healthcare providers by specialty, 
      ratings and experience and book them seamlessly.`,
    },
    {
      id: 2,
      image: "/img/telehealth/feature-2.png",
      class: "",
      header: `View your appointment schedule`,
      body: `View your upcoming appointments as well as 
      previous consultations and reports.`,
    },
    {
      id: 3,
      image: "/img/telehealth/feature-3.png",
      class: "sm:flex-row-reverse",
      header: `Track your vitals`,
      body: `Keep a track of your Blood Pressure, Weight, 
      BMI, Blood Sugar, Heart Rate and other vitals.`,
    },
  ];
  return (
    <div className="bg-secondary-700">
      <div className="container pt-14 px-5 sm:px-10 pb-8 2xl:px-0 mx-auto mt-40 mb-24 lg-mb-0">
        <h3 className="bg-gradient-600 bg-clip-text text-transparent-active font-medium text-2xl sm:text-3xl lg:text-4xl text-center mb-6 sm:mb-10">
          The Telehealth app
        </h3>
        <AppStore
          applestore="https://apps.apple.com/ng/app/stabledoc/id1602960544"
          playstore="https://play.google.com/store/apps/details?id=com.sdtapp.customer"
        />
        <div className="lg:container pt-6 sm:pt-12 lg:px-10 pb-8 2xl:px-0 mx-auto mt-10 mb-10">
          {FeatureData.map((data) => (
            <div
              key={data.id}
              className={`flex flex-col sm:flex-row gap-20 ${data.class} justify-between my-auto py-16`}
            >
              <div className="flex-col basis-full sm:basis-[40%] my-auto">
                <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold text-center sm:text-left sm:font-medium bg-gradient-600 bg-clip-text text-transparent-active">
                  {data.header}
                </h3>
                <p className="mt-8 text-text-600 text-center sm:text-left text-base sm:text-xl lg:text-2xl">
                  {data.body}
                </p>
              </div>

              <div className="bg-primary rounded-3xl relative basis-full sm:basis-[45%] lg:basis-[40%] pt-20">
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
