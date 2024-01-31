import { BsUpload, BsLaptop } from "react-icons/bs";
import { IoLocation } from "react-icons/io5";
import ActionButton from "../../components/Commons/Button";
import { useState } from "react";

const CreateEventTictetFromOne = ({
  handleCreatTicketTwoContainerClick,
  setImage,
  setEventTitle,
  setEventDescription,
  setVenueName,
  setVenueAddress,
  setPlatformName,
  setWebsiteUrl,
  image,
  isPlatforn,
  eventTitle,
  eventDescription,
  venueName,
  venueAddress,
  platformName,
  websiteUrl,
  setIsPlatforn,
  setEventImage,
}) => {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!eventTitle.trim()) {
      newErrors.eventTitle = "Event title is required";
    }

    if (!eventDescription.trim()) {
      newErrors.eventDescription = "Event description is required";
    }

    if (!image) {
      newErrors.image = "Cover image is required";
    }

    if (isPlatforn) {
      if (!platformName.trim()) {
        newErrors.platformName = "Platform name is required";
      }

      if (!websiteUrl.trim()) {
        newErrors.websiteUrl = "Website URL is required";
      }
    } else {
      if (!venueName.trim()) {
        newErrors.venueName = "Venue name is required";
      }

      if (!venueAddress.trim()) {
        newErrors.venueAddress = "Venue address is required";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    setEventImage(file);

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handlePlatfornClick = () => {
    setIsPlatforn(!isPlatforn);
  };

  const handleContinueClick = () => {
    if (validateForm()) {
      handleCreatTicketTwoContainerClick();
    }
  };

  return (
    <div style={{ margin: "10px" }}>
      <div className="event-inp-overall-cont">
        <label htmlFor="" className="adj" style={{ fontSize: "16px" }}>
          Event title
        </label>
        <input
          type="text"
          className="create-evt-inp"
          placeholder="Enter your event title"
          style={{ padding: "16px", fontSize: "12px" }}
          value={eventTitle}
          onChange={(e) => setEventTitle(e.target.value)}
        />
        {errors.eventTitle && (
          <div className="error-message" style={{ color: "red" }}>
            {errors.eventTitle}
          </div>
        )}
        <div className="ins-create">0/50 words</div>
      </div>

      <div className="event-inp-overall-cont">
        <label htmlFor="" className="adj" style={{ fontSize: "16px" }}>
          Event description
        </label>
        <textarea
          type="text"
          className="create-evt-inp area-evn"
          placeholder="Enter your event details. It may contain FAQs and what attendees should expect from the event"
          value={eventDescription}
          style={{ padding: "10px", fontSize: "12px" }}
          onChange={(e) => setEventDescription(e.target.value)}
        />
        {errors.eventDescription && (
          <div className="error-message" style={{ color: "red" }}>
            {errors.eventDescription}
          </div>
        )}
        <div className="ins-create">0/500 wordss</div>
      </div>

      <div className="event-inp-overall-cont dotted">
        {!image && (
          <label htmlFor="" className="ad-pic" style={{ fontSize: "16px" }}>
            Cover image
          </label>
        )}
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          id="pic-input"
          onChange={(e) => {
            handleImageChange(e);
            setEventImage(e.target.files[0])
          }}
        />
        {image ? (
          <label htmlFor="pic-input">
            <div className="img-con-cv">
              <img src={image} alt="uploaded" />
            </div>
          </label>
        ) : (
          <>
            <label htmlFor="pic-input" className="dra-im">
              <BsUpload />
              <div className="add-vid">Upload event image</div>
              <div className="even-inst">
                Upload a compelling image. We recommend using at least a
                2160x1080px (2:1 ratio) image that's no larger than 10MB
              </div>
            </label>
          </>
        )}
        {errors.image && (
          <div className="error-message" style={{ color: "red" }}>
            {errors.image}
          </div>
        )}
      </div>

      {isPlatforn ? (
        <div className="plat-venue-bx" onClick={handlePlatfornClick}>
          <IoLocation />
          <div className="txt-pl-vn" style={{ fontSize: "18px" }}>
            Physical event?
          </div>
        </div>
      ) : (
        <div className="plat-venue-bx" onClick={handlePlatfornClick}>
          <BsLaptop />
          <div className="txt-pl-vn" style={{ fontSize: "18px" }}>
            Online event?
          </div>
        </div>
      )}

      {isPlatforn ? (
        <div className="venu-plat-cont">
          <div className="event-inp-overall-cont">
            <label htmlFor="" className="adj" style={{ fontSize: "16px" }}>
              Platform name
            </label>
            <input
              type="text"
              className="create-evt-inp"
              style={{ padding: "16px", fontSize: "12px" }}
              placeholder="skype, google meet, webinar, etc."
              value={platformName}
              onChange={(e) => setPlatformName(e.target.value)}
            />
            {errors.platformName && (
              <div className="error-message" style={{ color: "red" }}>
                {errors.platformName}
              </div>
            )}
          </div>

          <div className="event-inp-overall-cont">
            <label htmlFor="" className="adj" style={{ fontSize: "16px" }}>
              Website link or URL
            </label>
            <input
              type="text"
              className="create-evt-inp"
              style={{ padding: "16px", fontSize: "10px" }}
              placeholder="https://www.example.com"
              value={websiteUrl}
              onChange={(e) => setWebsiteUrl(e.target.value)}
            />
            {errors.websiteUrl && (
              <div className="error-message" style={{ color: "red" }}>
                {errors.websiteUrl}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="venu-plat-cont">
          <div className="event-inp-overall-cont">
            <label htmlFor="" className="adj" style={{ fontSize: "16px" }}>
              Venue name
            </label>
            <input
              type="text"
              className="create-evt-inp"
              style={{ padding: "16px", fontSize: "12px" }}
              placeholder="Name of hotel, building or event centre"
              value={venueName}
              onChange={(e) => setVenueName(e.target.value)}
            />
            {errors.venueName && (
              <div className="error-message" style={{ color: "red" }}>
                {errors.venueName}
              </div>
            )}
          </div>

          <div className="event-inp-overall-cont">
            <label htmlFor="" className="adj" style={{ fontSize: "16px" }}>
              Venue address
            </label>
            <input
              type="text"
              className="create-evt-inp"
              style={{ padding: "16px", fontSize: "12px" }}
              placeholder="Give a clear address to help your attendees locate your event."
              value={venueAddress}
              onChange={(e) => setVenueAddress(e.target.value)}
            />
            {errors.venueAddress && (
              <div className="error-message" style={{ color: "red" }}>
                {errors.venueAddress}
              </div>
            )}
          </div>
        </div>
      )}

      <div className="act-continue-btn" onClick={handleContinueClick}>
        <ActionButton label={"Continue"} type={"button"} bg={"pruplr"} />
      </div>
    </div>
  );
};

export default CreateEventTictetFromOne;
