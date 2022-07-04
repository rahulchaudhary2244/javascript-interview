// Write a function which implement range

// range(1, 50)
// 1,2,3,4,5,6,...,50
const range1 = (start, end) => {
	const arr = [];
	for (let index = start; index <= end; index++) arr.push(index);
	return arr;
};
console.log(range1(1, 50));

// more advanced function
const range2 = (start, end) =>
	[...Array(end - start + 1).keys()].map((x) => x + start);

console.log(range2(1, 50));
