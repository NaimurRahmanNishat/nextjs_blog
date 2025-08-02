"use client";
import { IArticle } from "@/models/Article";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCard from "./SwiperCard";

interface FeatuedSliderSectionProps {
  articles: IArticle[];
}

const FeatuedSliderSection = ({ articles }: FeatuedSliderSectionProps) => {
  return (
    <section className="mb-24 py-12 text-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            768: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="rounded-xl"
        >
          {articles.map((article, index) => (
            <SwiperSlide key={index} className="py-6 px-4">
              <SwiperCard article={article} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="border-t border-gray-200  mt-12 pt-8"></div> 
    </section>
  );
};

export default FeatuedSliderSection;
