import { FC } from "react";
import ServiceCard from "./ServiceCard";

const Services: FC = () => {
  const ServicesData = [
    {
      id: 1,
      image: "/img/solution/service-1.png",
      class: "",
      header: `Home Health`,
      body: `We offer home consultation services for our patients. 
      In this era of highly infectious diseases, you may not want 
      to visit the busy hospitals for non-emergency cases. Through 
      a network of partnerships leveraging our technology platforms, 
      StableDoc is able to deliver a range of complementary healthcare 
      services – and send the appropriate doctor to your home if you 
      need one. `,
    },
    {
      id: 2,
      image: "/img/solution/service-2.png",
      class: "",
      header: `Men and women’s health`,
      body: `What you get – focused attention to your health problems 
      as a woman or a man As part of annual physical – or anytime you 
      wish – you have the option to choose a gender-specific version 
      which includes everything in the StableDoc Comprehensive Health 
      Assessment (CHA) test plus additional testing for men’s and 
      women’s test.`,
    },
  ];
  const BorderData = [
    {
      id: 1,
      image: "/img/solution/service-3.png",
      class: "sm:flex-row-reverse",
      header: `Abroad Referral & Medical Tourism`,
      body: `StableDoc’s fit-for-situation medical tourism package gives you 
      the best medial treatment abroad from qualified healthcare professionals 
      and specialists in reputable, well-vetted hospitals. We provide effective, 
      hassle-free, cost-effective concierge services for those seeking medical 
      care abroad, and access to quality hospitals that have been vetted by 
      StableDoc.`,
    },
    {
      id: 2,
      image: "/img/solution/service-4.png",
      class: "sm:flex-row-reverse",
      header: `Annual Physical`,
      body: `Our StableDoc Comprehensive Health Assessment (CHA) is a premium 
      annual physical and exam provides you with a complete analysis and 
      review of your health picture and overall wellness. It includes tests 
      for heart health, kidney health, liver health, bone health, diabetes 
      risk, and other health factors. Included in this package is a one-on-one 
      discussion with a doctor to review your results – including the ability 
      to obtain a second opinion from any doctor of your choice from anywhere 
      in the world on our platform.`,
    },
    {
      id: 3,
      image: "/img/solution/service-5.png",
      class: "",
      header: `StablePods`,
      body: `We have a mission to break down physical boundaries and deliver 
      quality health care from anywhere it is available to anywhere itis 
      needed: StablePods. With this service, we arrange for teams of cross-border 
      specialists collaborating virtually to provide the best healthcare to 
      our patients, using tailored collaborative practice agreements.`,
    },
    {
      id: 4,
      image: "/img/solution/service-6.png",
      class: "",
      header: `Diaspora Sponsored Health`,
      body: `Makes it easy and simple to care for a loved one in Africa from 
      abroad and pay for their medical needs; provides you peace of mind that 
      your money is used for quality healthcare as intended.`,
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
      body: `One other key feature in our road map is the development 
      of StableReality, a virtual reality telemed that will further 
      support patient-doctor interaction and build trust. We are putting 
      resources into our futuristic foray into the Metaverse, where our 
      suite of StableReality gadgets, VR and supporting processes will 
      be used to deliver healthcare in the Metaverse. Your StableDoc 
      Digital Twin will be configured to mimic activities and 
      physiological changes in the Metaverse, which will be used to 
      inform your real-world healthcare delivery and services.

`,
    },
    {
      id: 3,
      image: "/img/solution/service-9.png",
      class: "sm:flex-row-reverse",
      header: `StableDoc Health NFT`,
      body: `Patients are now aware that their data exist but they typically do not have access to it or control over where the data is used. StableDoc NFT aims at solving this problem by allowing patients to track how their data is being used and opportunity to earn from the use of their data. An NFT of a patient's data would not only identify the data as belonging to that individual but would also confer ownership, allowing the patient to access it and track it wherever it is being used, and provide revenue to the data owner. Patient-control of data and robust ethical and jurisdiction-specific regulatory considerations underpin our design of this product and service offering.`,
    },
  ];
  return (
    <div className="container pt-12 px-5 sm:px-10 pb-8 2xl:px-0 mx-auto mt-6 lg:mt-10">
      <div id="premium-health-services">
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
      </div>
      <div id="cross-border-health">
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
      </div>

      <div id="health-blockchain">
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
    </div>
  );
};
export default Services;
