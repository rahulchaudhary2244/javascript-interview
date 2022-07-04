// Write a function which get's an array and an element and returns a array with this element at the end
// it will mutate the original array
const f1 = (arr, ele) => {
	arr.push(ele);
	return arr;
};

// below functions will not mutate the original array
const f2 = (arr, ele) => [...arr, ele];
const f3 = (arr, ele) => arr.concat(ele);

console.log(f2([1, 2], 3));
