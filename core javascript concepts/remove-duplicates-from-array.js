// WAP to remove duplicates from array

// // best way
const uniqueArr = (arr) => [...new Set(arr)];

// // Another good For-each way
// const uniqueArr = (arr) => {
// 	const res = [];
// 	arr.forEach((ele) => {
// 		if (!res.includes(ele)) res.push(ele);
// 	});
// 	return res;
// };

// // reduce() - This is also good way when we need to compare objects instead of discrete values
// // although it will work for any case
// const uniqueArr = (arr) =>
// 	arr.reduce((curr, ele) => {
// 		return curr.includes(ele) ? curr : [...curr, ele];
// 	}, []);

console.log(uniqueArr([1, 1, 1, 2, 3, 3, 3]));
