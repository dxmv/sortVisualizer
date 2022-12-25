import React, { useState } from "react";
import { generateNewArray, setArray } from "../../redux/array";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import bubbleSort from "../../utils/sortingAlgorithms/bubbleSort";
import Select from "../Select/Select";
import "./nav.css";

export default function Nav() {
	const [sliderVal, setSliderVal] = useState<number>(10);
	const dispatch = useAppDispatch();
	const array = useAppSelector(state => state.array.array);

	const handleChange = () => {
		dispatch(generateNewArray(sliderVal));
	};

	const handleStart = () => {
		console.log(bubbleSort(array));
		// dispatch(setArray(bubbleSort(array)));
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
			<button onClick={handleStart}>Start</button>
			<Select collection={[]} title="Sort Algorithm" />
		</nav>
	);
}
