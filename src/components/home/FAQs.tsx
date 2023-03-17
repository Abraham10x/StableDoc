import { FC } from "react";

const FAQs: FC = () => {
  const FAQdata = [
    {
      id: 1,
      question: `About StableDoc`,
      answer: `StableDoc combine cutting-edge, Blockchain-based and AI-driven 
      telemedicine, in-home health and standard hospital services to deliver 
      evidence-based, cross-boundary healthcare to our patients all around 
      the world. `,
      content: "",
      className: `hs-accordion active`,
      controlId: `hs-basic-collapse-one`,
    },
    {
      id: 2,
      question: `What is stableDoc telehealth mobile and web app all about?`,
      answer: `StableDoc  telehealth mobile and web app is a platform that 
      allow a patient consult doctors online from anywhere and receive 
      24/7/365 healthcare. `,
      qustionId: `hs-basic-heading-two`,
      content: "hidden",
      className: `hs-accordion`,
      controlId: `hs-basic-collapse-two`,
    },
    {
      id: 3,
      question: `Is my online visit to doctors private and secure?`,
      answer: `Absolutely, stableDoc telehealth platform is designed to 
      privately and securely enable patient to consult doctor online. 
      We attach great importance to maintaining patient’s privacy and 
      confidentiality, to this end, all information are kept safely and 
      securly.`,
      qustionId: `hs-basic-heading-three`,
      content: "hidden",
      className: `hs-accordion`,
      controlId: `hs-basic-collapse-three`,
    },
    {
      id: 4,
      question: `How do I book for appointment on the app?`,
      answer: (
        <ul className="list-disc ml-4">
          <li>
            Go to Play Store (Android) or App Store (iOS) and download the
            stableDoc app
          </li>
          <li>Open the app and follow the easy registration steps</li>
          <li>Authenticate registration from your email</li>
          <li>
            Login and select ”Find Doctors” then chose your preferred doctor
          </li>
          <li>Select book appointment and chose date and time</li>
          <li>Doctor confirm appointment</li>
          <li>
            Select consult, make your payment and consult doctor via video,
            audio and chat on the date and time of the appointment.
          </li>
        </ul>
      ),
      content: "hidden",
      className: `hs-accordion`,
      controlId: `hs-basic-collapse-four`,
    },
    {
      id: 5,
      question: `Why should I see an online doctor?`,
      answer: (
        <div>
          <p>
            There are various reasons why you may want to see an online doctor;
            reasons could range from symptoms, minor illnesses or injuries to
            general health concerns. The following are some of the reasons why
            people see doctors online.
          </p>
          <ul className="list-disc ml-4 mt-3">
            <li>
              I really need to see a doctor but my busy schedule wouldn’t allow
              me walk into the hospital and see a doctor.
            </li>
            <li>
              I can’t afford to spend days or hours waiting to see a doctor
            </li>
            <li>I am not sure if I should go to the hospital or not</li>
            <li>I just relocated to this area and I don’t know any doctor</li>
            <li>I need an advice about a loved one’s health</li>
          </ul>
        </div>
      ),
      qustionId: `hs-basic-heading-five`,
      content: "hidden",
      className: `hs-accordion`,
      controlId: `hs-basic-collapse-five`,
    },
    {
      id: 6,
      question: `Does stableDoc telehealth mobile app allow me to book for physical examination?`,
      answer: `No for now, our doctors may refer you for physical examination 
      after consultation if necessary. We are currently working on partnership 
      arrangement with some selected hospitals where our customers can go for 
      physical examination if the need arises.`,
      qustionId: `hs-basic-heading-six`,
      content: "hidden",
      className: `hs-accordion`,
      controlId: `hs-basic-collapse-six`,
    },
    {
      id: 7,
      question: `Can I see a doctor when I am travelling?`,
      answer: `Whether you are home or on the go, you can see a Doctor via the StableDoc telehealth app.`,
      qustionId: `hs-basic-heading-seven`,
      content: "hidden",
      className: `hs-accordion`,
      controlId: `hs-basic-collapse-seven`,
    },
    {
      id: 8,
      question: `How much should I pay for consultation?`,
      answer: `For pay as you go, each physician charges their 
      own consultation fee. For monthly subscriptions the rate varies, 
      please check the mobile app to explore monthly subscription options.`,
      qustionId: `hs-basic-heading-eight`,
      content: "hidden",
      className: `hs-accordion`,
      controlId: `hs-basic-collapse-eight`,
    },
    {
      id: 9,
      question: `How long does a consultation session with a doctor last on the StableDoc app?`,
      answer: `A typical consultation duration is 30minutes on stableDoc telehealth app, however
      a patient is free to add more time if there is need for more air time. `,
      qustionId: `hs-basic-heading-nine`,
      content: "hidden",
      className: `hs-accordion`,
      controlId: `hs-basic-collapse-nine`,
    },
    {
      id: 10,
      question: `What happens when I change or switch devices? `,
      answer: `It doesn’t matter which devices you switch to, all you need 
      to do is download the app and login your username and password associated 
      with your account and you would be able to access all your information.`,
      qustionId: `hs-basic-heading-ten`,
      content: "hidden",
      className: `hs-accordion`,
      controlId: `hs-basic-collapse-ten`,
    },
    {
      id: 11,
      question: `How do I fund my in-app wallet?`,
      answer: `We have various channels for funding your in-app wallet, which include 
      ATM cards, bank transfer and SDT etc. if for any reasons you are unable to fund your 
      wallet through these channels, please contact our customer service 
      via info@stabledoc.com `,
      qustionId: `hs-basic-heading-eleven`,
      content: "hidden",
      className: `hs-accordion`,
      controlId: `hs-basic-collapse-eleven`,
    },
    {
      id: 12,
      question: `I am a doctor; I would like to render my service on StableDoc Telehealth mobile platform`,
      answer: (
        <div>
          <ul className="list-disc ml-4 mb-3">
            <li>
              Go to Play Store (Android) or App Store (iOS) and download the
              StableDoc partners’ app
            </li>
            <li>Open the app and follow the easy steps to register</li>
            <li>
              Upload all required document and wait for authentication from the
              Stabledoc team
            </li>
          </ul>
          <p>
            Once all due diligence are completed and satisfactory, you would get
            a mail from the StableDoc team confirming completion of due
            diligence. Your stableDoc partners app would be activated and you
            would be able consult with patients. Please note that only certified
            doctors are engaged.
          </p>
        </div>
      ),
      qustionId: `hs-basic-heading-five`,
      content: "hidden",
      className: `hs-accordion`,
      controlId: `hs-basic-collapse-five`,
    },
  ];
  return (
    <div className="container pt-12 px-5 sm:px-10 pb-8 2xl:px-0 mx-auto mt-20">
      <div className="mb-8 sm:mb-20 lg:mb-28" id="FAQs">
        <h2 className="font-bold sm:bg-gradient-600 sm:bg-clip-text sm:text-transparent-active text-2xl sm:text-3xl lg:text-5xl text-center capitalize text-[#212121]">
          Frequently asked questions
        </h2>
        {/* <p className="text-base sm:text-xl text-center capitalize text-[#757575] w-full sm:w-5/6 lg:w-6/12 mt-7 mx-auto">
          Pellentesque cras adipiscing tempus libero vel nullam mauris tellus.
          Aliquam ultrices tellus consequat amet, lectus aliquam est in neque.
        </p> */}
      </div>

      <div className="hs-accordion-group w-full sm:w-5/6 lg:w-4/6 mx-auto">
        {FAQdata.map((data) => (
          <div
            key={data.id}
            className={`${data.className} border-b border-stroke-500 py-3`}
            id={data.qustionId}
          >
            <button
              className="hs-accordion-toggle hs-accordion-active:text-primary group py-3 inline-flex items-center gap-x-3 w-full font-medium text-left text-black text-base sm:text-xl transition hover:bg-secondary-600/25"
              aria-controls={data.controlId}
            >
              <svg
                className="hs-accordion-active:hidden hs-accordion-active:text-primary block w-3 h-3 sm:w-4 sm:h-4 text-primary"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.62421 7.86L13.6242 7.85999"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M8.12421 13.36V2.35999"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <svg
                className="hs-accordion-active:block hs-accordion-active:text-primary hidden w-4 h-4 text-gray-600"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.62421 7.86L13.6242 7.85999"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              {data.question}
            </button>
            <div
              id={data.controlId}
              className={`hs-accordion-content ${data.content} w-full overflow-hidden transition-[height] duration-300 border-l-2 border-primary pl-4 pr-6 sm:pr-8 ml-5 sm:ml-10`}
              aria-labelledby={data.qustionId}
            >
              <p className="text-text-700 text-sm sm:text-lg">{data.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
