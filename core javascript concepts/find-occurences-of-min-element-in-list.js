// Find the number of occurences of minimum value in the list
const arr = [1, 2, 4, 4, 4, 5, 5, 2, 3, 3, 3, 4, 1, 1, 1, 5, 5];

const getMinValue = (arr) => Math.min(...arr);

const getOccurenceCnt = (arr, value) =>
	[...arr].filter((x) => x === value).length;

console.log(getOccurenceCnt(arr, getMinValue(arr)));
