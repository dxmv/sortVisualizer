import React from "react";

const REGULAR_HEIGHT = 20;

export default function ArrayElement({
	value,
	width,
}: {
	value: number;
	width: number;
}) {
	return (
		<div
			className="array-element"
			id={`element-${value}`}
			style={{ width, height: `${REGULAR_HEIGHT * value}px` }}
		>
			{value}
		</div>
	);
}
