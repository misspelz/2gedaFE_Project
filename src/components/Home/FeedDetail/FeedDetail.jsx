import CommentPerPost from "../../Dashboard/CommentPerPost";
import TicketSearchComp from "../../TicketComp/TicketSearchComp";
import {
	MdOutlinePhotoSizeSelectActual,
	MdOndemandVideo,
	MdKeyboardVoice,
} from "react-icons/md";
import { AiOutlineStop } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { BsFileEarmarkText } from "react-icons/bs";
import { useState } from "react";
import CommentInputField from "../../Modals/CommentInputField";
import PhotoInputField from "../../Modals/PhotoInputField";
import RecInputField from "../../Modals/RecInputField";
import { useRef } from "react";
import VideoInputField from "../../Modals/VideoInputField";
import FileInputField from "../../Modals/FileInputField";
import { useEffect } from "react";
import "./feed-detail.css"

const FeedDetail = ({ handleFeedClose }) => {
	const [showCommentInput, setShowCommentInput] = useState(false);
	const [showRecInput, setShowRecInput] = useState(false);
	const [selectedImage, setSelectedImage] = useState(null);
	const [selectedVideo, setSelectedVideo] = useState(null);
	const [selectedFile, setSelectedFile] = useState(null);
	const [audioBlob, setAudioBlob] = useState(null);
	const [isRecording, setIsRecording] = useState(false);
	const mediaRecorder = useRef(null);

	const actions = [
		{ icon: <BsFileEarmarkText className="pic-inptn" />, name: "File" },
		{ icon: <MdOndemandVideo className="pic-inptn" />, name: "video" },
		{
			icon: <MdOutlinePhotoSizeSelectActual className="pic-inptn" />,
			name: "Image",
		},
	];

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
		<div className="feed-detail-container">
			<div className="feed-top">
				<TicketSearchComp
					label={"Feed"}
					handleCloseContainerClick={handleFeedClose}
					add={"add"}
				/>
			</div>
			<hr className="feed_hr" />
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

			<div className="inpu-com-box">
				{!selectedImage && showCommentInput && <CommentInputField />}
			</div>
			<div className="edit-comment-to-post">
				{/* <div className="to-edi-con">
          <div className="edi-con-post fl">
            <input
              type="file"
              accept=".pdf, .doc, .docx, .xls, .xlsx, .ppt, .pptx, .exe, .apk"
              className="pic-inptn"
              style={{ display: "none" }}
              id="fil-inp"
              onChange={handleFileChange}
            />
            <label htmlFor="fil-inp">
              <BsFileEarmarkText className="pic-inptn" />
            </label>
          </div>{" "}
          <div className="edi-con-post nt" onClick={toggleRecInput}>
            {showRecInput ? <AiOutlineStop /> : <MdKeyboardVoice />}
          </div>
          <div className="edi-con-post vd">
            <input
              type="file"
              accept="video/*"
              className="pic-inptn"
              style={{ display: "none" }}
              id="vd-inp"
              onChange={handleVideoChange}
            />
            <label htmlFor="vd-inp">
              <MdOndemandVideo className="pic-inptn" />
            </label>
          </div>
          <div className="edi-con-post pc">
            <input
              type="file"
              accept="image/*"
              className="pic-inptn"
              style={{ display: "none" }}
              id="pic-inp"
              onChange={handleImageChange}
            />
            <label htmlFor="pic-inp">
              <MdOutlinePhotoSizeSelectActual className="pic-inptn" />
            </label>
          </div>
          <div className="edi-con-post" onClick={toggleCommentInput}>
            <FiEdit />
          </div>
                    </div> */}
			</div>
			<div className="quick-dial-container">
				{/* <Box
					sx={{
						height: 280,
						transform: "translateZ(0px)",
						flexGrow: 1,
						position: "absolute",
						bottom: 16,
						right: 16,
					}}
				>
					<SpeedDial
						sx={{ position: "absolute", bottom: 16, right: 16 }}
						icon={<SpeedDialIcon />}
					>
						{actions.map((action) => (
							<SpeedDialAction
								key={action.name}
								icon={action.icon}
								tooltipTitle={action.name}
							/>
						))}
					</SpeedDial>
				</Box> */}
				;
			</div>
		</div>
	);
};

export default FeedDetail;

