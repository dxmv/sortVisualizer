const addColor = (id: string, color: string): void => {
	const el = document.getElementById(id);
	if (el) {
		el.style.backgroundColor = color;
	}
};

export default addColor;
