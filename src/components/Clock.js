import React from 'react'
import LiveClock from "react-live-clock";

function Clock() {
	return <h1>
		 <LiveClock format={"h:mm:ss a"} ticking={true} />
	</h1>

	
}

export default Clock