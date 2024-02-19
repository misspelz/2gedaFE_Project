import { AiFillDelete } from "react-icons/ai";
import "./style.css";
import { PiMicrosoftPowerpointLogo } from "react-icons/pi";
import { SiMicrosoftword, SiMicrosoftexcel } from "react-icons/si";
import { FaFileAlt } from "react-icons/fa";
import {
  BsFillFileEarmarkPdfFill,
  BsAndroid2,
  BsFiletypeExe,
} from "react-icons/bs";

const PostFormFilesModal = ({ selectedFile, setSelectedFile }) => {

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
				fileName.endsWith(".txt") ||
				fileName.endsWith(".apk")
			) {
				setSelectedFile(selected);
			} else {
				// Handle invalid file type
				setSelectedFile(null);
				alert(
					"Please select a valid file type (PDF, Word, Excel, PowerPoint, EXE, or APK)."
				);
			}
		}
	};
	const preventDefault = (e) => {
		e.preventDefault();
	};

	const handleDeleteItem = () => {
		// Clear the selected file
		setSelectedFile(null);
	};
	return (
		<>
			<div
				className="post-audio-cont-box"
				onDrop={preventDefault}
				onDragOver={preventDefault}
			>
				{selectedFile ? (
					<div className="file-item">
						{/* Display the selected file */}
						<div className="dra-im">
							{selectedFile.name.endsWith(".pdf") ? (
								<BsFillFileEarmarkPdfFill className="icon-dw pdf" />
							) : selectedFile.name.endsWith(".doc") ||
							  selectedFile.name.endsWith(".docx") ? (
								<SiMicrosoftword className="icon-dw word" />
							) : selectedFile.name.endsWith(".xls") ||
							  selectedFile.name.endsWith(".xlsx") ? (
								<SiMicrosoftexcel className="icon-dw excel" />
							) : selectedFile.name.endsWith(".ppt") ||
							  selectedFile.name.endsWith(".pptx") ? (
								<PiMicrosoftPowerpointLogo className="icon-dw prese" />
							) : selectedFile.name.endsWith(".exe") ? (
								<BsFiletypeExe className="icon-dw exe" />
							) : (
								<BsAndroid2 className="icon-dw apk" />
							)}

							<div className="or-dr">{selectedFile.name}</div>
						</div>
						<div className="de-aud">
							<div className="delete-audio " onClick={handleDeleteItem}>
								<AiFillDelete />
								<div className="del-text">Delete</div>
							</div>
						</div>
					</div>
				) : (
					<>
						<input
							type="file"
							accept=".pdf, .doc, .docx, .xls, .xlsx, .ppt, .pptx, .exe, .apk"
							onChange={handleFileChange}
							style={{ display: "none" }}
							id="file-input"
						/>
						<label htmlFor="file-input" className="dra-im">
							<div className="file-icon">
								<FaFileAlt className="file" />
							</div>
							<div className="add-vid">Add File</div>
							<div className="or-dr">or drag and drop</div>
						</label>
					</>
				)}
			</div>
		</>
	);
};

export default PostFormFilesModal;
