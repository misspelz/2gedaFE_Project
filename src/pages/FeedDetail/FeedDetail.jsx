import CommentPerPost from "../../components/Dashboard/CommentPerPost";
// import {
// 	MdKeyboardVoice,
// } from "react-icons/md";
// import { AiOutlineStop } from "react-icons/ai";
// import { FiEdit } from "react-icons/fi";
// import { BsFileEarmarkText } from "react-icons/bs";
import { useState } from "react";
import CommentInputField from "../../components/Modals/CommentInputField";
import PhotoInputField from "../../components/Modals/PhotoInputField";
import RecInputField from "../../components/Modals/RecInputField";
import { useRef } from "react";
import VideoInputField from "../../components/Modals/VideoInputField";
import FileInputField from "../../components/Modals/FileInputField";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Quickdial from "./Quickdial";
import "./feed-detail.css";
import MainLayout from "Layout/MainLayout";
import Follower from "components/Dashboard/Follower";
import DashMessage from "components/Dashboard/DasMess";
import SelectCategory from "components/Dashboard/SelectCategory";
import PostImage2 from "assets/images/post-speech.png";

const FeedDetail = () => {
	const { feedId } = useParams();
	const navigate = useNavigate();
	const [showCommentInput, setShowCommentInput] = useState(false);
	const [showRecInput, setShowRecInput] = useState(false);
	const [selectedImage, setSelectedImage] = useState(null);
	const [selectedVideo, setSelectedVideo] = useState(null);
	const [selectedFile, setSelectedFile] = useState(null);
	const [audioBlob, setAudioBlob] = useState(null);
	const [isRecording, setIsRecording] = useState(false);
	const mediaRecorder = useRef(null);

	const startRecording = async () => {
		try {
			const stream = await navigator.mediaDevices.getUserMedia({
				audio: true,
			});
			mediaRecorder.current = new MediaRecorder(stream);

			const chunks = [];

			mediaRecorder.current.ondataavailable = (e) => {
				if (e.data.size > 0) {
					chunks.push(e.data);
				}
			};

			mediaRecorder.current.onstop = () => {
				const blob = new Blob(chunks, { type: "audio/wav" });
				setAudioBlob(blob);
				setIsRecording(false); // Update recording status when recording stops
			};

			mediaRecorder.current.start();
			setIsRecording(true); // Update recording status when recording starts
		} catch (error) {
			console.error("Error accessing microphone:", error);
		}
	};

	const stopRecording = () => {
		if (mediaRecorder.current && mediaRecorder.current.state === "recording") {
			mediaRecorder.current.stop();
		}
	};

	const handleDeleteItem = () => {
		setAudioBlob(null);
	};

	const toggleCommentInput = () => {
		setShowCommentInput(!showCommentInput);
		setSelectedImage(null);
		setShowRecInput(false);
		setSelectedVideo(null);
		setSelectedFile(null);
	};

	const toggleRecInput = () => {
		setShowRecInput(!showRecInput);
		setSelectedImage(null);
		setShowCommentInput(false);
		setSelectedFile(null);
	};

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = (event) => {
				setSelectedImage(event.target.result);
			};
			reader.readAsDataURL(file);
		}
		setShowCommentInput(false);
		setShowRecInput(false);
		setSelectedVideo(null);
		setSelectedFile(null);
	};
	const handleFileChange = (e) => {
		const selected = e.target.files[0];
		if (selected) {
			const fileName = selected.name.toLowerCase();
			if (
				fileName.endsWith(".pdf") ||
				fileName.endsWith(".doc") ||
				fileName.endsWith(".docx") ||
				fileName.endsWith(".xls") ||
				fileName.endsWith(".xlsx") ||
				fileName.endsWith(".ppt") ||
				fileName.endsWith(".pptx") ||
				fileName.endsWith(".exe") ||
				fileName.endsWith(".apk")
			) {
				setSelectedFile(selected);
				setSelectedVideo(null);
				setShowCommentInput(false);
				setShowRecInput(false);
				setSelectedImage(null);
			} else {
				// Handle invalid file type
				setSelectedFile(null);
				alert(
					"Please select a valid file type (PDF, Word, Excel, PowerPoint, EXE, or APK)."
				);
			}
		}
	};
	const handleVideoChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = (event) => {
				// Do something with the video file
				setSelectedVideo(file);
				// console.log("Video file:", event.target.result);
			};
			reader.readAsDataURL(file);
			setShowCommentInput(false);
			setShowRecInput(false);
			setSelectedFile(null);
			setSelectedImage(null);
		}
	};
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<MainLayout>
			<div className="main-containe">
				<div className="left-side-container">
					<div className="feed-detail-container">
						{feedId}
						<div className="feed-top">
							<FaArrowLeftLong
								size={20}
								color="#000"
								onClick={() => {
									navigate(-1);
								}}
								style={{ cursor: "pointer" }}
							/>
							<h3>Full preview</h3>
						</div>
						<hr className="feed_hr" />
						<div className="post-preview-container">
							<div className="post-display-images">
								<img src={PostImage2} />
							</div>
							<div className="post-display-content">
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Assumenda nulla, consequatur iste eum harum nemo autem
									officiis. Error reprehenderit corrupti a amet officiis,
									inventore officia. Nostrum nemo vel a similique.
								</p>
							</div>
						</div>
						<div className="comm-bx-pos">
							<CommentPerPost />
						</div>

						{showRecInput && (
							<div className="inpu-com-box pic-bx-cont">
								<RecInputField
									isRecording={isRecording}
									audioBlob={audioBlob}
									handleDeleteItem={handleDeleteItem}
									stopRecording={stopRecording}
									startRecording={startRecording}
								/>
							</div>
						)}

						{selectedFile && (
							<div className="inpu-com-box pic-bx-cont">
								<FileInputField selectedFile={selectedFile} />
							</div>
						)}

						{selectedImage && (
							<div className="inpu-com-box pic-bx-cont">
								<PhotoInputField selectedImage={selectedImage} />
							</div>
						)}
						{selectedVideo && (
							<div className="inpu-com-box pic-bx-cont">
								<VideoInputField selectedVideo={selectedVideo} />
							</div>
						)}

						{/* <div className="inpu-com-box">
							{!selectedImage && showCommentInput && <CommentInputField />}
						</div> */}
						<div className="quick-dial-container">
							<Quickdial />
						</div>
					</div>
				</div>
				<div className="middle-side-container">
					<img src="images/ads1.png" alt="" />
					<img src="images/ads2.png" alt="" />
					<img src="images/ads3.png" alt="" />
				</div>
				<div className="right-side-container">
					<SelectCategory />
					<Follower />
					<div className="mess-bxx-conn">
						<DashMessage />
					</div>
				</div>
			</div>
		</MainLayout>
	);
};

export default FeedDetail;
