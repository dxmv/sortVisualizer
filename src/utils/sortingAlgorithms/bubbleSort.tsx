import { Animation } from "../../types";
const bubbleSort = (
	array: Array<number>
): [Array<number>, Array<Animation>] => {
	const newArray = new Array(...array);
	const animations: Animation[] = [];
	for (let i = 0; i < newArray.length; i++) {
		for (let j = 0; j < newArray.length - i - 1; j++) {
			animations.push({
				type: "compare",
				values: [newArray[j], newArray[j + 1]],
			});
			if (newArray[j] > newArray[j + 1]) {
				[newArray[j], newArray[j + 1]] = [newArray[j + 1], newArray[j]];
			}
		}
	}
	return [newArray, animations];
};

export default bubbleSort;
