// WAF to sort arrays
// there 2 ways to sort strings
const arr = [3, 6, 7, 3, 2, 1, 10];

// return 1 to swap , 0 to do nothing, -1 if already sorted
const sortedArr = (arr) => [...arr].sort((a, b) => a - b);

console.log(sortedArr(arr));

const users = [
	{ id: 101, name: "Paul", age: 31, isActive: true },
	{ id: 102, name: "John", age: 40, isActive: true },
	{ id: 103, name: "Tim", age: 35, isActive: true },
	{ id: 104, name: "Larry", age: 40, isActive: true },
	{ id: 105, name: "Shawn", age: 28, isActive: false },
	{ id: 106, name: "Randy", age: 50, isActive: false },
];

const sortNamesAsc = (users) =>
	[...users].sort((a, b) => {
		if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
		if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
		return 0;
	});

console.log(sortNamesAsc(users));

// using localeCompare()
const sortNamesDesc = (users) =>
	[...users].sort((b, a) =>
		a.name.toLowerCase().localeCompare(b.name.toLowerCase())
	);

console.log(sortNamesDesc(users));
