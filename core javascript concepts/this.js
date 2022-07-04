// if we use a function having 'function' keyword then it will always points to global or window object context
// it will not refer to our context. This problem will come whenever we use function made using 'function' keyword
// inside a function present in a class function or some scenarios like that , see task 4
// like callback functions inside map, filter, etc., example:
// [1].map(function () {
// 	console.log(this);
// 	return 0;
// });
// we can solve this problem by using arrow functions.

// What will be logged here?

// Task 1
// function getItem() {
// 	console.log(this);
// }

// getItem();// O/P 1=>window object

// Task 2
// const item = {
// 	title: "Ball",
// 	getItem() {
// 		console.log("this", this);
// 	},
// };

// item.getItem(); // item object,
// O/P 2 =this { title: 'Ball', getItem: [Function: getItem] }

// Task 3
// class Item {
// 	title = "Ball";
// 	getTitle() {
// 		console.log("this", this);
// 	}
// }

// const item = new Item(); // item context where it will have title as key,value pair and getTitle() will be present in its prototype
// item.getTitle();
// // O/P 3 =>this Item { title: 'Ball' }

// Task 4
// class Item {
// 	title = "Ball";
// 	getItem() {
// 		function someFn() {
// 			console.log("this", this);
// 		}
// 		someFn();
// 	}
// }

// const item = new Item(); // item context where it will have title as key,value pair and getItem() will be present in its prototype
// item.getItem();
// // O/P 4 =this undefined

// how to get actual value of this in Task 4 instead of undefined - 2 ways
//older approach
// class Item {
// 	title = "Ball";
// 	getItem() {
// 		const this_ = this;
// 		function someFn() {
// 			console.log("this", this_);
// 		}
// 		someFn();
// 	}
// }

// ES6 approach
// class Item {
// 	title = "Ball";
// 	getItem() {
// 		const someFn = () => {
// 			console.log("this", this);
// 		};
// 		someFn();
// 	}
// }
// const item = new Item();
// item.getItem(); // this Item { title: 'Ball' }
