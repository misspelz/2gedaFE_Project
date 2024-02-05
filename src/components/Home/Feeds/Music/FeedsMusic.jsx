import React from 'react'
import MusicDash from "../../../Dashboard/MusicDas";

const FeedsMusic = () => {
  return (
    <div
        style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "1rem",
        }}
    >
        {[1, 2, 3, 4, 5, 6, 7].map((item) => (
            <MusicDash key={item} />
        ))}
    </div>
  )
}

export default FeedsMusic