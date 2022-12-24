import React from "react";
import { useAppSelector } from "../../redux/hooks";
import ArrayElement from "./ArrayElement";

export default function ArrayVisual() {
	const array = useAppSelector(state => state.array.array);
	return (
		<>
			{array.map(v => (
				<ArrayElement value={v} />
			))}
		</>
	);
}
