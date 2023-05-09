// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Caroussel = () => (
  <Swiper
    pagination={true}
    modules={[Pagination]}
    spaceBetween={50}
    slidesPerView={1}
    onSlideChange={() => console.log("slide change")}
    onSwiper={(swiper) => console.log(swiper)}
  >
    <SwiperSlide
      style={{
        backgroundImage: "url('./caroussel/smartwatch/smartwatch-bg.png')",
      }}
    >
      <div className="slider-smartwatch">
        <img src="./caroussel/smartwatch/smartwatch.png" alt="A smartwatch" />
      </div>

      <div className="headline">
        <span className="subtitle">Best Deal Online on smart watches</span>
        <span className="title">SMART WEARABLE.</span>
        <span className="subtitle">UP to 80% OFF</span>
      </div>
    </SwiperSlide>
    <SwiperSlide>Slide 2</SwiperSlide>
    <SwiperSlide>Slide 3</SwiperSlide>
    <SwiperSlide>Slide 4</SwiperSlide>
  </Swiper>
);

export { Caroussel };
