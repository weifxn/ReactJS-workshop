import React from 'react'
import dayjs from "dayjs";

function Date() {
	return (
		<p>
			 {dayjs().format('DD MMMM, dddd')}
		</p>
	)
}

export default Date