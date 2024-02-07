import React from 'react'
import { HiOutlineMicrophone } from "react-icons/hi2";

const FeedsVoice = () => {
  return (
    <div>
		{[1, 2, 3, 4, 5, 6, 7].map((item) => (
			<div key={item} style={{ display: "flex", alignItems: "center", gap: "1.2rem", marginBottom: ".6rem"}}>
				<HiOutlineMicrophone size={24}/>
				<p>John doe</p>
				<p>My podcast (3 mins)</p>
			</div>
		))}
	</div>
  )
}

export default FeedsVoice
