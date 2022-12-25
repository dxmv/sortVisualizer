export type Animation = CompareAnimation;

interface CompareAnimation {
	type: "compare";
	values: Array<number>;
}
