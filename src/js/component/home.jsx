import React, { useState } from "react";

//create your first component
const Home = () => {
	const [color, setColor] = useState("red")

	return (
		<div>
			<div className="justify-content-center d-flex">
				<div className="bg-dark traffic-light">
					<div onClick={() => setColor("red")} className={"light red" + (color === "red" ? " light-glow" : "")}></div>
					<div onClick={() => setColor("yellow")} className={"light yellow" + (color === "yellow" ? " light-glow" : "")}></div>
					<div onClick={() => setColor("green")} className={"light green" + (color === "green" ? " light-glow" : "")}></div>
				</div>
			</div>
			<button>Change light</button>
		</div>
		
	)
};

export default Home;
