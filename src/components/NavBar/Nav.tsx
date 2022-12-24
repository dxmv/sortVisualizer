import React, { useState } from "react";
import { generateNewArray } from "../../redux/array";
import { useAppDispatch } from "../../redux/hooks";
import Select from "../Select/Select";
import "./nav.css";

export default function Nav() {
	const [sliderVal, setSliderVal] = useState<number>(10);
	const dispatch = useAppDispatch();

	const handleChange = () => {
		dispatch(generateNewArray(sliderVal));
	};

	return (
		<nav>
			<div id="logo">Logo</div>
			<input
				type="range"
				min={10}
				max={100}
				id="range"
				value={sliderVal}
				onChange={e => {
					setSliderVal(Number(e.target.value));
				}}
				onMouseUpCapture={handleChange}
			/>
			<button>Start</button>
			<Select collection={[]} title="Sort Algorithm" />
		</nav>
	);
}
