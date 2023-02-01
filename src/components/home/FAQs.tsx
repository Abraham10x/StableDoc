import { FC } from "react";

const FAQs: FC = () => {
  const FAQdata = [
    {
      id: 1,
      question: `How soon will my order ship?`,
      answer: `Venenatis, fames a a, in. Morbi pellentesque lacus, 
      purus in tristique justo, pretium egestas. Commodo leo nisl 
      consectetur nisi, tortor, erat sit at aliquet. Ultrices in 
      aliquam maecenas cursus. Sed enim cursus augue quis risus. 
      Ac donec quisque vitae feugiat dignissim diam. `,
      qustionId: `hs-basic-heading-one`,
      content: "",
      className: `hs-accordion active`,
      controlId: `hs-basic-collapse-one`,
    },
    {
      id: 2,
      question: `Is there any warranty exclusions?`,
      answer: `Venenatis, fames a a, in. Morbi pellentesque lacus, 
      purus in tristique justo, pretium egestas. Commodo leo nisl 
      consectetur nisi, tortor, erat sit at aliquet. Ultrices in 
      aliquam maecenas cursus. Sed enim cursus augue quis risus. 
      Ac donec quisque vitae feugiat dignissim diam. `,
      qustionId: `hs-basic-heading-two`,
      content: "hidden",
      className: `hs-accordion`,
      controlId: `hs-basic-collapse-two`,
    },
    {
      id: 3,
      question: `Are there any return exclusions?`,
      answer: `Venenatis, fames a a, in. Morbi pellentesque lacus, 
      purus in tristique justo, pretium egestas. Commodo leo nisl 
      consectetur nisi, tortor, erat sit at aliquet. Ultrices in 
      aliquam maecenas cursus. Sed enim cursus augue quis risus. 
      Ac donec quisque vitae feugiat dignissim diam. `,
      qustionId: `hs-basic-heading-three`,
      content: "hidden",
      className: `hs-accordion`,
      controlId: `hs-basic-collapse-three`,
    },
    {
      id: 4,
      question: `Will I be charged for a replacement item?`,
      answer: `Venenatis, fames a a, in. Morbi pellentesque lacus, 
      purus in tristique justo, pretium egestas. Commodo leo nisl 
      consectetur nisi, tortor, erat sit at aliquet. Ultrices in 
      aliquam maecenas cursus. Sed enim cursus augue quis risus. 
      Ac donec quisque vitae feugiat dignissim diam. `,
      qustionId: `hs-basic-heading-four`,
      content: "hidden",
      className: `hs-accordion`,
      controlId: `hs-basic-collapse-four`,
    },
    {
      id: 5,
      question: `How can I track my orders & payment?`,
      answer: `Venenatis, fames a a, in. Morbi pellentesque lacus, 
      purus in tristique justo, pretium egestas. Commodo leo nisl 
      consectetur nisi, tortor, erat sit at aliquet. Ultrices in 
      aliquam maecenas cursus. Sed enim cursus augue quis risus. 
      Ac donec quisque vitae feugiat dignissim diam. `,
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
        <p className="text-base sm:text-xl text-center capitalize text-[#757575] w-full sm:w-5/6 lg:w-6/12 mt-7 mx-auto">
          Pellentesque cras adipiscing tempus libero vel nullam mauris tellus.
          Aliquam ultrices tellus consequat amet, lectus aliquam est in neque.
        </p>
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
