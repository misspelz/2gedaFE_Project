import React from 'react'
import { IoLocationOutline } from "react-icons/io5";

const FeedLocations = () => {
  return (
    <div>
		{[1, 2, 3, 4, 5, 6, 7].map((item) => (
			<div key={item} style={{ display: "flex", alignItems: "center", gap: "1.2rem", marginBottom: ".6rem"}}>
				<IoLocationOutline size={24}/>
				<p>Osun, Oshogbo festival</p>
			</div>
		))}
	</div>
  )
}

export default FeedLocations