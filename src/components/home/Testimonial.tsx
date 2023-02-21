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
      username: "Casi Henry",
      company: "Forbes",
      text: `Nisl nisi pulvinar dui justo, lorem. Sed quam eu cras at. Sed
        quis id mauris massa. Eros, nec egestas vestibulum augue aenean
        arcu leo vulputate. Magna feugiat ac adipiscing mattis velit
        facilisi metus. Dolor urna, mi at tincidunt. Nulla.`,
    },
    {
      id: 2,
      image: "/img/home/client/user-2.svg",
      username: "Queen Dare",
      company: "StableDoc User",
      text: `Nisl nisi pulvinar dui justo, lorem. Sed quam eu cras at. Sed
        quis id mauris massa. Eros, nec egestas vestibulum augue aenean
        arcu leo vulputate. Magna feugiat ac adipiscing mattis velit
        facilisi metus. Dolor urna, mi at tincidunt. Nulla.`,
    },
    {
      id: 3,
      image: "/img/home/client/user-1.svg",
      username: "Casi Henry",
      company: "Forbes",
      text: `Nisl nisi pulvinar dui justo, lorem. Sed quam eu cras at. Sed
        quis id mauris massa. Eros, nec egestas vestibulum augue aenean
        arcu leo vulputate. Magna feugiat ac adipiscing mattis velit
        facilisi metus. Dolor urna, mi at tincidunt. Nulla.`,
    },
    {
      id: 4,
      image: "/img/home/client/user-2.svg",
      username: "Queen Dare",
      company: "StableDoc User",
      text: `Nisl nisi pulvinar dui justo, lorem. Sed quam eu cras at. Sed
        quis id mauris massa. Eros, nec egestas vestibulum augue aenean
        arcu leo vulputate. Magna feugiat ac adipiscing mattis velit
        facilisi metus. Dolor urna, mi at tincidunt. Nulla.`,
    },
  ];
  return (
    <div className="bg-client-bg bg-no-repeat bg-cover -mt-64">
      <div className="container 2xl:px-0 mx-auto py-40 sm::py-80">
        <h3 className="text-white capitalize text-center font-medium text-2xl lg:3xl lg:text-5xl">
          what our Users say
        </h3>
        <p className="text-white capitalize text-base sm:text-xl mt-4 text-center">
          Neque, pulvinar vestibulum non aliquam.
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
              <div className="p-8 border border-white rounded-xl flex flex-col gap-6 mt-20 mx-12">
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
                <p className="text-xs sm:text-sm lg:text-base capitalize text-white">
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
