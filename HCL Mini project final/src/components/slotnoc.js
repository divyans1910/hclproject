import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./slotno.css"

const Slotnoc = () => {
	const [num, setNum] = useState(0);

	const randomNumberInRange = (min, max) => {
		return Math.floor(Math.random()
				* (max - min + 1)) + min;
	};

	const handleClick = () => {
		setNum(randomNumberInRange(401, 1000));
	};

	return (
		<div className="wrapper">
			<h2>Slot Number: {num} </h2>
            
			<button onClick={handleClick}>
				Generate
			</button>
			
			<Link to="/entextnew">
            <button>
				Continue
			</button>
			</Link>
			
			
		</div>
	);
};

export default Slotnoc;
