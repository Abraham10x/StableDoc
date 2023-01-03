import { FC } from "react";
import ServiceCard from "./ServiceCard";

const Services: FC = () => {
  const ServicesData = [
    {
      id: 1,
      image: "/img/solution/service-1.png",
      class: "",
      header: `Home Health`,
      body: `We offer a suite of home consultation 
      services for our patients. Our Home Health services 
      are powered by StableReality, a next generation, 
      patent-pending telemed gadget with a full hospital 
      grade diagnostic tool kit. `,
    },
    {
      id: 2,
      image: "/img/solution/service-2.png",
      class: "",
      header: `Men and women’s health`,
      body: `We offer a suite of home consultation services for our 
      patients. Our Home Health services are powered by StableReality, 
      a next generation, patent-pending telemed gadget with a full 
      hospital grade diagnostic tool kit.`,
    },
  ];
  const BorderData = [
    {
      id: 1,
      image: "/img/solution/service-3.png",
      class: "sm:flex-row-reverse",
      header: `Abroad Referral & Medical Tourism`,
      body: `Facilitating pre-travel services & post-discharge care services. 
      We not only link you to our partner hospitals abroad but we also 
      help you to schedule the appointment and the visa processes – 
      and put you on a plane and arrange for comfortable accommodation 
      and ancillary services `,
    },
    {
      id: 2,
      image: "/img/solution/service-4.png",
      class: "sm:flex-row-reverse",
      header: `Annual Physical`,
      body: `Why take a 2-week trip to a foreign country costing 
      thousands of dollars for your Annual Physical Exam when 
      you can have all your testing done in your home country 
      – and get a second opinion on the results from qualified 
      doctors anywhere in the world? That’s where StableDoc comes 
      in. We take the complicated and expensive off your shoulders 
      and make them simple and affordable.`,
    },
    {
      id: 3,
      image: "/img/solution/service-5.png",
      class: "",
      header: `StablePods`,
      body: `Now you can pay for the healthcare of your relatives 
      in your home country through any of our choice plans 
      including using $SDT.`,
    },
    {
      id: 4,
      image: "/img/solution/service-6.png",
      class: "",
      header: `Diaspora Sponsored Health`,
      body: `We arrange for teams of cross-border specialists collaborating 
      virtually to provide the best healthcare to our patients around 
      the world, using tailored collaborative practice agreements.`,
    },
  ];

  const CrytoData = [
    {
      id: 1,
      image: "/img/solution/service-7.png",
      class: "",
      header: `AI-Enabled Apps, Tools And Devices`,
      body: `Cutting edge artificial intelligence and machine learning 
        (AI/ML) is utilized for diagnostics of diseases. This can be 
        utilized directly by patients as a first-level check and/or 
        used as diagnostic support for clinicians during telemedicine calls. `,
    },
    {
      id: 2,
      image: "/img/solution/service-8.png",
      class: "",
      header: `Virtual Reality – And The Metaverse `,
      body: `Cutting edge artificial intelligence and machine learning 
        (AI/ML) is utilized for diagnostics of diseases. This can be 
        utilized directly by patients as a first-level check and/or 
        used as diagnostic support for clinicians during telemedicine calls. `,
    },
    {
      id: 3,
      image: "/img/solution/service-9.png",
      class: "sm:flex-row-reverse",
      header: `StableDoc Health NFT`,
      body: `Cutting edge artificial intelligence and machine learning 
        (AI/ML) is utilized for diagnostics of diseases. This can be 
        utilized directly by patients as a first-level check and/or 
        used as diagnostic support for clinicians during telemedicine calls. `,
    },
  ];
  return (
    <div className="container pt-12 px-5 sm:px-10 pb-8 2xl:px-0 mx-auto mt-6 lg:mt-10">
      <h3 className="bg-gradient-600 bg-clip-text text-transparent-active sm:font-medium font-bold text-2xl sm:text-3xl lg:text-5xl text-center mt-8 sm:mt-0 lg:mb-10">
        Premium health services
      </h3>
      {ServicesData.map((data) => (
        <ServiceCard
          id={data.id}
          className={data.class}
          header={data.header}
          body={data.body}
          image={data.image}
        />
      ))}
      <h3 className="bg-gradient-600 bg-clip-text text-transparent-active sm:font-medium font-bold text-2xl sm:text-3xl lg:text-5xl text-center mt-8 sm:mt-0 lg:mb-10">
        Cross border Health
      </h3>
      {BorderData.map((data) => (
        <ServiceCard
          id={data.id}
          className={data.class}
          header={data.header}
          body={data.body}
          image={data.image}
        />
      ))}

      <h3 className="bg-gradient-600 bg-clip-text text-transparent-active sm:font-medium font-bold text-2xl sm:text-3xl lg:text-5xl text-center mt-8 sm:mt-0 mb-0 lg:mb-10">
        Your health on a blockchain
      </h3>
      {CrytoData.map((data) => (
        <ServiceCard
          id={data.id}
          className={data.class}
          header={data.header}
          body={data.body}
          image={data.image}
        />
      ))}
    </div>
  );
};
export default Services;
