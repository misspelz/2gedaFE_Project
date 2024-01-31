import { Swiper, SwiperSlide } from "swiper/react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const MovieSlider = () => {
  return (
    <div className="swiper-container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={4}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <div className="im-cont-box">
            <img src="images/pl1.png" alt="" className="mid-lo" />
            <img src="images/pic1.png" alt="slide_image" />
            <div className="slid-conb">
              <div className="slid-tst-bx">
                <div className="slid-text-main">Drive in Theatre</div>
                <div className="slid-text">Action (2022)</div>
              </div>
              <BiDotsVerticalRounded className="kemb"/>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="im-cont-box">
            <img src="images/pl1.png" alt="" className="mid-lo" />
            <img src="images/pic1.png" alt="slide_image" />
            <div className="slid-conb">
              <div className="slid-tst-bx">
                <div className="slid-text-main">Drive in Theatre</div>
                <div className="slid-text">Action (2022)</div>
              </div>
              <BiDotsVerticalRounded className="kemb"/>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="im-cont-box">
            <img src="images/pl1.png" alt="" className="mid-lo" />
            <img src="images/pic2.png" alt="slide_image" />
            <div className="slid-conb">
              <div className="slid-tst-bx">
                <div className="slid-text-main">Drive in Theatre</div>
                <div className="slid-text">Action (2022)</div>
              </div>
              <BiDotsVerticalRounded className="kemb"/>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="im-cont-box">
            <img src="images/pl1.png" alt="" className="mid-lo" />
            <img src="images/pic2.png" alt="slide_image" />
            <div className="slid-conb">
              <div className="slid-tst-bx">
                <div className="slid-text-main">Drive in Theatre</div>
                <div className="slid-text">Action (2022)</div>
              </div>
              <BiDotsVerticalRounded className="kemb"/>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="im-cont-box">
            <img src="images/pl1.png" alt="" className="mid-lo" />
            <img src="images/pic3.png" alt="slide_image" />
            <div className="slid-conb">
              <div className="slid-tst-bx">
                <div className="slid-text-main">Drive in Theatre</div>
                <div className="slid-text">Action (2022)</div>
              </div>
              <BiDotsVerticalRounded className="kemb"/>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="im-cont-box">
            <img src="images/pl1.png" alt="" className="mid-lo" />
            <img src="images/pic1.png" alt="slide_image" />
            <div className="slid-conb">
              <div className="slid-tst-bx">
                <div className="slid-text-main">Drive in Theatre</div>
                <div className="slid-text">Action (2022)</div>
              </div>
              <BiDotsVerticalRounded className="kemb"/>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="im-cont-box">
            <img src="images/pl1.png" alt="" className="mid-lo" />
            <img src="images/pic2.png" alt="slide_image" />
            <div className="slid-conb">
              <div className="slid-tst-bx">
                <div className="slid-text-main">Drive in Theatre</div>
                <div className="slid-text">Action (2022)</div>
              </div>
              <BiDotsVerticalRounded className="kemb"/>
            </div>
          </div>
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default MovieSlider;
// images/pic1.png
