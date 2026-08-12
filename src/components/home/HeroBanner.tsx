import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const images = [
  {
    link: "/assets/images/cover.png",
    name: "",
  },
  {
    link: "https://images.unsplash.com/photo-1597998337501-45fec7f0defe?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Boracay",
  },
  {
    link: "https://images.unsplash.com/photo-1613190151884-6f44af3ad0d8?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Puerto Princesa",
  },
  {
    link: "https://images.unsplash.com/photo-1559099078-8ab4ed4eefed?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Siargao",
  },
  {
    link: "https://images.unsplash.com/photo-1609618858699-b16ef9bcb05c?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Macao",
  },
];

export default function HeroBanner() {
  return (
    <div className="relative mx-auto w-full max-w-345 h-149.75 lg:rounded-3xl overflow-hidden">
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        loop
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        className="h-full w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative flex justify-center items-center h-full w-full">
              <Image src={image.link} alt="img" fill className="object-cover" />
            </div>
            <p className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 font-tradegothic text-white font-bold text-[38px] lg:text-[100px] z-20 whitespace-nowrap">
              {image.name}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
