import React, { useEffect } from "react";
import Nav from "./components/NavBar/Nav";
import "./app.css";

import ArrayVisual from "./components/ArrayVisual/ArrayVisual";
import { useAppDispatch } from "./redux/hooks";
import { generateNewArray } from "./redux/array";

function App() {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(generateNewArray(10));
	}, []);
	return (
		<>
			<Nav />
			<ArrayVisual />
		</>
	);
}

export default App;
