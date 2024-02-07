import React from 'react'
import { SiMicrosoftexcel } from "react-icons/si"; // excel icon
import { PiMicrosoftWordLogoFill } from "react-icons/pi"; // word icon
import "./feed-file.css"

const Feedfiles = () => {
  return (
    <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
        gap: "1rem",
    }}>
      {[1, 2, 3, 4, 5, 6, 7].map((item) => (
        <>
          <div key={item} className='feed-files-card'>
            <div className="file-icon">
              {item % 2 === 0 ? <SiMicrosoftexcel size={22} color='green'/> : <PiMicrosoftWordLogoFill size={22} color='blue'/>}
            </div>
            <p>complex tuto...</p>             
          </div>
        </>
      ))}
    </div>
  )
}

export default Feedfiles
