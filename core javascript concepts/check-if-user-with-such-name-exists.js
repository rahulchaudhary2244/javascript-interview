//check-if-user-with-such-name-exists.js
const users = [
	{ id: 101, name: "Paul", age: 31, isActive: true },
	{ id: 102, name: "John", age: 40, isActive: true },
	{ id: 103, name: "Tim", age: 35, isActive: true },
	{ id: 104, name: "Larry", age: 40, isActive: true },
	{ id: 105, name: "Shawn", age: 28, isActive: false },
	{ id: 106, name: "Randy", age: 50, isActive: false },
];

// // some() - returns true / false
//const isNameExists = (arr = [], name) => arr.some((ele) => ele.name === name);

// // find() - returns undefined if not found / returns whole element if found
//const isNameExists = (arr = [], name) => arr.find((ele) => ele.name === name);

// // findIndex() - returns -1 if not found / index of element from start of array
// const isNameExists = (arr = [], name) =>
// 	arr.findIndex((ele) => ele.name === name);

// // includes() - only used to find discrete values like 1,2, "Mike". Searching for objects will not work
// const isNameExists = (arr = [], name) =>
// 	arr.includes((ele) => ele.name === name);

console.log(isNameExists(users, "Shawn"));
console.log(isNameExists(users, "Mike"));
