import { useState } from "react";
import { PiCopySimple } from "react-icons/pi";
import { AiOutlineClose } from "react-icons/ai";

const ReportSummary = ({ handleSummaryClose }) => {
  const [url] = useState("https://2geda.net/tickets/ID1298");
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(url);
      console.log("URL copied to clipboard:", url);
      setIsCopied(true);
      // Reset the "Copied" text after a certain time if needed
      setTimeout(() => {
        setIsCopied(false);
      }, 2000); // Set your desired timeout duration here
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  return (
    <div className="report-summary-container">
      <img
        src="https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?cs=srgb&dl=pexels-cottonbro-studio-3171837.jpg&fm=jpg"
        alt=""
      />
      <div className="dwn-contt">
        <div className="row-flex flex">
          <div className="buyer-id-bx red-ds">
            <div className="byr-ct">Event title</div>
            <div className="det-byr-nm tic-mm-red">
              Music seasonal festival II
            </div>
          </div>
          <div className="buyer-id-bx">
            <div className="byr-ct">Date</div>
            <div className="det-byr-nm tic-mm-red">27 Aug 2023</div>
          </div>
        </div>
        <div className="row-flex flex">
          <div className="buyer-id-bx red-ds">
            <div className="byr-ct">Location</div>
            <div className="det-byr-nm tic-mm-red">
              Eko Hotel and suites conference hall 1.
            </div>
          </div>
          <div className="buyer-id-bx">
            <div className="byr-ct">Time</div>
            <div className="det-byr-nm tic-mm-red">09:00 PM</div>
          </div>
        </div>
        <div className="copy-url-cont">
          <div className="url-txt">{url}</div>
          <PiCopySimple className="cp-icon" onClick={handleCopyClick} />
        </div>
        {isCopied && <div className="copied">Copied</div>}

        <div className="sold-tic-boxx flex ">
          <div className="cat-tic">
            <div className="cat-tct">Regular</div>
            <div className="tic-tct">50 tickets</div>
          </div>
          <div className="sold-boxx flex">30 sold</div>
          <div className="sold-pri"># 3,000.00</div>
        </div>
        <div className="sold-tic-boxx flex">
          <div className="cat-tic">
            <div className="cat-tct">Regular</div>
            <div className="tic-tct">50 tickets</div>
          </div>
          <div className="sold-boxx flex">30 sold</div>
          <div className="sold-pri"># 3,000.00</div>
        </div>
      </div>
      <div className="rep-summ-lay flex" onClick={handleSummaryClose}>
        <AiOutlineClose className="summ" />
      </div>
    </div>
  );
};

export default ReportSummary;
