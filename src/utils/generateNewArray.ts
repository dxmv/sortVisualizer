const generateRandomArray = (num: number): Array<number> => {
	const arr: Array<number> = [];
	const map: Map<number, boolean> = new Map<number, boolean>();
	for (let i = 0; i < num; i++) {
		let newNum = Math.floor(Math.random() * num);
		while (map.get(newNum)) {
			newNum = Math.floor(Math.random() * num);
		}
		arr.push(newNum);
		map.set(newNum, true);
	}
	return arr;
};

export default generateRandomArray;
