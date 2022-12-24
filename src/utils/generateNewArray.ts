const generateRandomArray = (num: number): Array<number> => {
	const arr: Array<number> = [];
	const MAX = 40;
	for (let i = 0; i < num; i++) {
		arr.push(Math.floor(Math.random() * MAX));
	}
	return arr;
};

export default generateRandomArray;
