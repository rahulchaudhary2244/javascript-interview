// 1. Write code to get array of names from given array of users
// 2. Get back only active users
// 3. Sort users by age descending
const users = [
	{ id: 101, name: "Paul", age: 31, isActive: true },
	{ id: 102, name: "John", age: 40, isActive: true },
	{ id: 103, name: "Tim", age: 35, isActive: true },
	{ id: 104, name: "Larry", age: 40, isActive: true },
	{ id: 105, name: "Shawn", age: 28, isActive: false },
	{ id: 106, name: "Randy", age: 50, isActive: false },
];
// during interview to solve the problem
// first use traditional for loop
// second time use forEach loop to write some optimised version of old code
// at last write optimised code using maps

const getData = (users) =>
	users
		.filter((user) => user.isActive)
		.sort((a, b) => b.age - a.age)
		.map((user) => user.name);

const names = getData(users);
console.log(names, users);
