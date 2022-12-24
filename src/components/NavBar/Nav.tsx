import React from "react";
import Select from "../Select/Select";
import "./nav.css";

export default function Nav() {
	return (
		<nav>
			<div id="logo">Logo</div>
			<input type="range" min={10} max={100} id="range" />
			<button>Start</button>
			<Select collection={[]} title="Sort Algorithm" />
		</nav>
	);
}
