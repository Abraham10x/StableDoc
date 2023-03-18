import { FC } from "react";
import Image from "next/image";
// Import Swiper styles
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const Testimonial: FC = () => {
  const TestimonialData = [
    {
      id: 1,
      image: "/img/home/client/user-1.svg",
      username: "Amanda Michael",
      company: "Consultant",
      text: `Using StableDoc telehealth app saves me from waiting 
      long hours to see a doctor`,
    },
    {
      id: 2,
      image: "/img/home/client/user-2.svg",
      username: "Musa Abdullahi",
      company: "Entrepreneur",
      text: `Consulting StableDoc doctors virtually on my mobile 
      phone was an interesting experience, the doctors were so 
      professional and friendly.`,
    },
    {
      id: 3,
      image: "/img/home/client/user-1.svg",
      username: "Toyin Alabi",
      company: "Banker",
      text: `I don't have to drive long hours to the hospital to 
      see my doctor for none emergency healthcare needs any more. 
      With StableDoc app I can now access doctors from the comfort 
      of my office. It's fast and easy`,
    },
  ];
  return (
    <div className="bg-client-bg bg-no-repeat bg-cover -mt-64">
      <div className="container 2xl:px-0 mx-auto py-40 sm::py-80">
        <h3 className="text-white capitalize text-center font-medium text-2xl lg:3xl lg:text-5xl">
          what our Users are saying
        </h3>
        <p className="text-white text-base sm:text-xl mt-4 text-center">
          Join the community of smart people using StableDoc telehealth app to
          access doctors anywhere anytime
        </p>

        <Swiper
          // slidesPerView={2}
          // spaceBetween={30}
          // slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {TestimonialData.map((data) => (
            <SwiperSlide key={data.id}>
              <div className="p-8 border border-white rounded-xl flex flex-col gap-6 mt-20 mx-12 h-56 sm:h-80 lg:h-60">
                <div className="flex flex-row">
                  <Image
                    className="hidden sm:block"
                    src={data.image}
                    alt="user"
                    width={80}
                    height={80}
                  />
                  <Image
                    className="sm:hidden"
                    src={data.image}
                    alt="user"
                    width={50}
                    height={50}
                  />
                  <div className="flex-col ml-4 my-auto">
                    <h4 className="text-white font-bold text-sm sm:text-base lg:text-lg">
                      {data.username}
                    </h4>
                    <p className="text-white font-normal text-xs sm:text-sm lg:text-base mt-2">
                      {data.company}
                    </p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm lg:text-base text-white">
                  {data.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
