import React, { useState } from "react";
import "./slotno.css"

const Slotno = () => {
	const [num, setNum] = useState(0);

	const randomNumberInRange = (min, max) => {
		return Math.floor(Math.random()
				* (max - min + 1)) + min;
	};

	const handleClick = () => {
		setNum(randomNumberInRange(1, 500));
	};

	return (
		<div className="wrapper">
			<h2>Slot Number: {num}</h2>
			<button onClick={handleClick}>
				Generate
			</button>
            <button>
				Continue
			</button>
		</div>
	);
};

export default Slotno;