import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { GoPlusCircle } from "react-icons/go";
import { FaCirclePlus } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import _2gedaLogo from "assets/logo.png";
import MovieImage1 from "assets/images/sample-image-1.png";
import MovieImage2 from "assets/images/sample-image-2.png";
import { MdSend } from "react-icons/md";
import { MdCancel } from "react-icons/md";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./lifestyle.css";
import { IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import TextField from "@mui/material/TextField";
import { IoTextOutline } from "react-icons/io5";
import { AiOutlineUserAdd } from "react-icons/ai";

const LifestyleStatus = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isEdit, setIsEdit] = useState(false);
	const [inputCaption, setInputCaption] = useState(false);
	const handleCloseModal = () => setIsOpen(false);
	const pagination = {
		clickable: true,
		type: "bullets",
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + " " + "</span>";
		},
	};

	const [images, setImages] = useState([]);

	const handleImageChange = (event) => {
		const fileList = event.target.files;
		const imageList = [];

		for (let i = 0; i < fileList.length; i++) {
			const imageURL = URL.createObjectURL(fileList[i]);
			imageList.push(imageURL);
		}

		setImages(imageList);
	};

	const deleteImage = (index) => {
		const updatedImages = [...images];
		updatedImages.splice(index, 1);
		setImages(updatedImages);
	};

	useEffect(() => {
		if (images.length > 0) {
			setIsEdit(true);
		}
	}, [images.length]);

	const handleEditStatus = () => {
		setIsOpen(true);
		setIsEdit(true);
	};

	const handleViewStatus = () => {
		setIsEdit(false);
		setIsOpen(true);
		setImages([]);
	};

	return (
		<>
			<div className="status-container">
				<div className="add-status-btn">
					<button
						onClick={() => {
							handleEditStatus();
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
								cursor: "pointer",
							}}
							onClick={() => {
								handleViewStatus();
							}}
						/>
						<span>John doe</span>
					</div>
				))}
			</div>

			<div>
				<Modal open={isOpen} onClose={handleCloseModal}>
					<Box className="lifestyle-modal">
						<Box className="lifestyle-modal-header">
							<div className="lifestyle-modal-logo">
								<img src={_2gedaLogo} alt="modal-logo" />
								<h3>2geda</h3>
							</div>
							<div className="lifestyle-modal-cancel-btn">
								<RxCross2
									size={24}
									onClick={handleCloseModal}
									style={{ cursor: "pointer" }}
								/>
							</div>
						</Box>
						<div className="lifestyle-main-display">
							<div className="left-display">
								<label htmlFor="upload-status">
									<FaCirclePlus size={36} fill="#7f2bee66" />
									<div className="btn-text-wrapper">
										<h4 className="m-0">Your lifestyle</h4>
										<p className="text-base">Share an event or happening</p>
									</div>
									<input
										id="upload-status"
										type="file"
										multiple
										onChange={handleImageChange}
										style={{ display: "none" }}
									/>
								</label>
								<div className="friends-status">
									<div
										className="flex align-center gap-2 mb-3 cursor-pointer"
										onClick={() => {
											handleViewStatus();
										}}
									>
										<div className="flex items-center justify-center border-1 border-[#4f0da3] border-solid rounded-full p-1 width-[32px] height-[32px] cursor-pointer">
											<Avatar
												src="/broken-image.jpg"
												sx={{
													width: "32px",
													height: "32px",
													cursor: "pointer",
												}}
											/>
										</div>
										<span className="font-bold text-lg capitalize">You</span>
										<span className="hide-status-detail">2 items</span>
										<span className="flex items-center hide-status-detail">
											<span className="status-time-indicato hide-status-detailr"></span>
											3m ago
										</span>
									</div>
									{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
										<div
											key={item}
											className="flex align-center gap-2 mb-3 cursor-pointer"
											onClick={() => {
												handleViewStatus();
											}}
										>
											<div className="flex items-center justify-center border-1 border-[#4f0da3] border-solid rounded-full p-1 width-[32px] height-[32px]">
												{" "}
												<Avatar
													src="/broken-image.jpg"
													sx={{
														width: "32px",
														height: "32px",
													}}
												/>
											</div>
											<span className="font-bold text-lg capitalize">
												John doe
											</span>
											<span className="hide-status-detail">2 items</span>
											<span className="flex items-center hide-status-detail">
												<span className="status-time-indicator hide-status-detail"></span>
												3m ago
											</span>
										</div>
									))}
								</div>
							</div>
							<div className="right-display">
								{!isEdit && (
									<div className="status-app">
										<Swiper
											pagination={pagination}
											navigation={true}
											modules={[Pagination, Navigation, Autoplay]}
											autoplay={{
												delay: 3000,
												disableOnInteraction: true,
											}}
											loop={false}
											className="lifestyle-swiper"
										>
											{[1, 2, 3, 4, 5, 6].map((i) => (
												<SwiperSlide key={i} data-hash="sample-hash">
													<div className="status-content">
														<img
															src={i % 2 === 0 ? MovieImage1 : MovieImage2}
															alt="lifestyle-i"
														/>
														<div className="lifestyle-caption">
															<p>
																Lifestyle caption is displayed here, with a very
																lengthy text, Lorem ipsum, dolor sit amet
																consectetur adipisicing elit. Sequi aliquid
															</p>
														</div>
														<OutlinedInput
															id="outlined-comment-input"
															type="text"
															size="small"
															endAdornment={
																<InputAdornment position="end">
																	<IconButton
																		aria-label="comment on lifestyle"
																		onClick={() => {}}
																		edge="end"
																	>
																		<MdSend size={20} color="#bd1f04" />
																	</IconButton>
																</InputAdornment>
															}
															placeholder="comment on this lifestyle"
															className="comment-input-container"
														/>
													</div>
												</SwiperSlide>
											))}
											<div className="status-logo">
												<Avatar
													src="/broken-image.jpg"
													sx={{
														width: "32px",
														height: "32px",
													}}
												/>
												<div className="status-user-info">
													<span>John doe</span>
													<span>23 min</span>
												</div>
											</div>
										</Swiper>
									</div>
								)}
								{isEdit && (
									<div className="status-app">
										{images.length == 0 && (
											<label htmlFor="upload-status">
												<div className="upload-status-btn">Upload media</div>
												<input
													id="upload-status"
													type="file"
													multiple
													onChange={handleImageChange}
													style={{ display: "none" }}
												/>
											</label>
										)}
										{images.length > 0 && (
											<Swiper
												pagination={pagination}
												navigation={true}
												modules={[Pagination, Navigation]}
												autoplay={false}
												loop={false}
												className="lifestyle-swiper"
											>
												{images.map((image, i) => (
													<SwiperSlide key={i} data-hash="sample-hash">
														<div className="status-content">
															<button
																className="delete-lifestyle-btn"
																onClick={() => {
																	deleteImage(i);
																}}
															>
																<MdCancel
																	size={24}
																	color="#4d4d4d"
																	style={{ cursor: "pointer" }}
																/>
															</button>
															<div className="flex items-end gap-3 justify-end py-[4px] absolute right-[23%]">
																<button className="status-action-btn">
																	tag <AiOutlineUserAdd size={12} />
																</button>
																<button
																	className="status-action-btn"
																	onClick={() => {
																		setInputCaption(true);
																	}}
																>
																	text <IoTextOutline size={12} />
																</button>
															</div>
															<div className="lifestyle-caption">
																<p>
																	Lifestyle caption is displayed here, with a
																	very lengthy text, Lorem ipsum, dolor sit amet
																	consectetur adipisicing elit. Sequi aliquid
																</p>
															</div>
															{inputCaption && (
																<div className="status-input-caption">
																	<div className="flex items-center gap-2">
																		<TextField
																			id="standard-basic"
																			placeholder="Start typing"
																			variant="standard"
																			size="small"
																		/>
																		<MdCancel
																			size={20}
																			color="#4d4d4d"
																			style={{ cursor: "pointer" }}
																			onClick={() => {
																				setInputCaption(false);
																			}}
																		/>
																	</div>
																	<button
																		type="submit"
																		onClick={() => {
																			setInputCaption(false);
																		}}
																	>
																		Done
																	</button>
																</div>
															)}
															<img src={image} alt="lifestyle-media" />
															<button className="share-lifestyle-btn">
																Share lifestyle
															</button>
														</div>
													</SwiperSlide>
												))}
											</Swiper>
										)}
									</div>
								)}
							</div>
						</div>
					</Box>
				</Modal>
			</div>
		</>
	);
};

export default LifestyleStatus;
