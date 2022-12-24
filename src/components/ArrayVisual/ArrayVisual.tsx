import React from "react";
import { useAppSelector } from "../../redux/hooks";
import ArrayElement from "./ArrayElement";
import "./array.css";

export default function ArrayVisual() {
	const array = useAppSelector(state => state.array.array);
	return (
		<main>
			<div id="list">
				{array.map(v => (
					<ArrayElement value={v} width={window.innerWidth / array.length} />
				))}
			</div>
		</main>
	);
}
