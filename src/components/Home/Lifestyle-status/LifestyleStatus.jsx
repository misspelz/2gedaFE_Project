import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { GoPlusCircle } from "react-icons/go";
import { FaCirclePlus } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import _2gedaLogo from "assets/logo.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./lifestyle.css";

const LifestyleStatus = () => {
	const [isOpen, setIsOpen] = useState(false);
    const handleCloseModal = () => setIsOpen( false );
        const pagination = {
            clickable: true,
            type: "bullets",
            // bulletClass: "my-bullet-class",
            // bulletActiveClass: "my-bullet-active-class",
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + " " + "</span>";
            },
        };
	return (
		<>
			<div className="status-container">
				<div className="add-status-btn">
					<button
						onClick={() => {
							setIsOpen(true);
						}}
					>
						<GoPlusCircle size={40} />
					</button>
				</div>
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
					<div key={item} className="user-status-item">
						<Avatar
							src="/broken-image.jpg"
							sx={{
								border: "2px solid #4f0da3",
								width: "40px",
								height: "40px",
							}}
						/>
						<span>John doe</span>
					</div>
				))}
			</div>

			<div>
				<Modal keepMounted open={isOpen} onClose={handleCloseModal}>
					<Box className="lifestyle-modal">
						<Box className="lifestyle-modal-header">
							<div className="lifestyle-modal-logo">
								<img src={_2gedaLogo} alt="modal-logo" />
								<h3>2geda</h3>
							</div>
							<div className="lifestyle-modal-cancel-btn">
								<RxCross2 size={24} />
							</div>
						</Box>
						<div className="lifestyle-main-display">
							<div className="left-display">
								<button>
									<FaCirclePlus size={36} fill="#7f2bee66" />
									<div className="btn-text-wrapper">
										<h4 className="m-0">Your lifestyle</h4>
										<p className="text-base">Share an event or happening</p>
									</div>
								</button>
								<div className="friends-status">
									{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
										<div key={item} className="flex align-center gap-2 mb-3">
											<div className="flex items-center justify-center border-1 border-[#4f0da3] border-solid rounded-full p-1 width-[32px] height-[32px]">
												<Avatar
													src="/broken-image.jpg"
													sx={{
														width: "32px",
														height: "32px",
													}}
												/>
											</div>
											<span>John doe</span>
											<span>2 items</span>
											<span>3m ago</span>
										</div>
									))}
								</div>
							</div>
							<div className="right-display">
								<div className="status-app">
									<Swiper
										pagination={pagination}
										// navigation={true}
										navigation={{
											nextEl: ".lifestyle-status-next",
											prevEl: ".lifestyle-status-prev",
											clickable: true,
										}}
										modules={[Pagination, Navigation, Autoplay]}
										autoplay={{
											delay: 3000,
											disableOnInteraction: false,
										}}
										loop={false}
										className="lifestyle-swiper"
									>
										{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((i) => (
											<SwiperSlide key={i}>
												<div className="status-content">Status Slide {i}</div>
											</SwiperSlide>
										))}
										<div className="status-logo">
											<h3>Status App</h3>
										</div>
									</Swiper>
								</div>
							</div>
						</div>
					</Box>
				</Modal>
			</div>
		</>
	);
};

export default LifestyleStatus;
