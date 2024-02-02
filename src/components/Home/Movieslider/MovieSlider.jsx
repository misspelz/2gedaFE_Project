import { Swiper, SwiperSlide } from "swiper/react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import MovieImage1 from "../../../assets/images/sample-image-1.png"
import MovieImage2 from "../../../assets/images/sample-image-2.png"
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./movieslide.css";

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
                {
                    [1, 2, 3, 4, 5, 6, 7].map((item) => (
                        <SwiperSlide key={item}>
                            <div className="im-cont-box">
                                <img src={item % 2 === 0 ? MovieImage1 : MovieImage2} alt="" className="mid-lo" />
                                <img src={item % 2 === 0 ? MovieImage1 : MovieImage2} alt="slide_image" />
                                <div className="slid-conb">
                                    <div className="slid-tst-bx">
                                        <div className="slid-text-main">Drive in Theatre</div>
                                        <div className="slid-text">Action (2022)</div>
                                    </div>
                                    <BiDotsVerticalRounded className="kemb" />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
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
