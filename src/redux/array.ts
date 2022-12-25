import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import generateRandomArray from "../utils/generateNewArray";

interface State {
	array: Array<number>;
}

// Define the initial state using that type
const initialState: State = {
	array: [],
};

export const arraySlice = createSlice({
	name: "array",
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		generateNewArray: (state, action: PayloadAction<number>) => {
			state.array = generateRandomArray(action.payload);
		},
		setArray: (state, action: PayloadAction<Array<number>>) => {
			state.array = action.payload;
		},
	},
});

export const { generateNewArray, setArray } = arraySlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectArray = (state: RootState) => state.array;

export default arraySlice.reducer;
