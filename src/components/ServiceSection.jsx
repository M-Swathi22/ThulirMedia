import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import s1 from "../assets/images/service1.jpg";
import s2 from "../assets/images/service2.jpg";
import s3 from "../assets/images/service3.webp";
import s4 from "../assets/images/service4.jpg";
import s5 from "../assets/images/service5.webp";
import pin from "../assets/images/pin.png";

function ServicesSection() {

  const services = [
    {
      img: s1,
      title: "Wedding Photography",
      text: "Capturing the magical moments of your wedding day with cinematic storytelling."
    },
    {
      img: s2,
      title: "Pre Wedding Photography",
      text: "Creative pre wedding photoshoots that capture your love story beautifully."
    },
    {
      img: s3,
      title: "Candid Photography",
      text: "Natural moments and emotions captured without posing."
    },
    {
      img: s4,
      title: "Drone Photography",
      text: "Aerial cinematic shots that add a stunning perspective."
    },
    {
      img: s5,
      title: "360 Spin Videos",
      text: "Interactive 360° video experiences for modern events."
    }
  ];

  return (

    <section className="py-24 bg-black text-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-16">
          Our <span className="text-red-500">Services</span>
        </h2>


        <Swiper
          slidesPerView={3}
          spaceBetween={40}
          loop={true}
          navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
          modules={[Navigation, Autoplay]}
        >

          {services.map((service, index) => (
            <SwiperSlide key={index}>

              <div className="bg-[#f2f5f5] text-black rounded-xl p-6 relative shadow-xl">

                {/* PIN */}
                <div className="absolute -top-4 left-10 w-4 h-4 bg-red-500 rounded-full shadow-lg"></div>
                <div className="">
                  <img src={pin} alt="Pin"
                    className="relative h-10 top-7 -left-2 z-10" />
                </div>
                {/* IMAGE */}
                <div className="overflow-hidden rounded-lg transform -rotate-2 hover:rotate-0 transition duration-300">

                  <img
                    src={service.img}
                    alt=""
                    className="h-56 w-full object-cover hover:scale-110 transition duration-500"
                  />

                </div>

                {/* TEXT */}
                <h3 className="text-xl font-semibold mt-5 mb-2">
                  {service.title}
                </h3>

                <p className="text-gray-700 text-sm mb-4">
                  {service.text}
                </p>

                {/* BUTTON */}
                <button className="px-4 py-2 bg-red-500 text-white text-sm rounded hover:bg-red-600">
                  View Gallery
                </button>

              </div>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>
    </section>
  );
}

export default ServicesSection;