// // Write a function which helps to achieve multiply(a)(b) and returns product of a and b
// // way-1
// const multiply = (num1) => {
// 	return (num2) => num1 * num2;
// };

// // way-2 (ES-6 way)
// const multiply = (num1) => (num2) => num1 * num2;

// const val = multiply(2)(3);
// console.log(val);

// // Create a curry function
const curry = function (fn) {
	let arity = fn.length; // arity holds arguements length
	console.log("arity", arity);
	return function f1(...args) {
		if (args.length >= arity) {
			console.log("Enough arguements");
			return fn(...args);
		} else {
			console.log("Need more arguements");
			return function f2(...moreArgs) {
				let newArgs = args.concat(moreArgs);
				return f1(...newArgs);
			};
		}
	};
};

const sum = (a, b, c) => a + b + c;

const curriedSum = curry(sum);
console.log(curriedSum(1, 2, 3));
console.log(curriedSum(1, 2, 3, 10));
console.log(curriedSum(1, 2)(3));
console.log(curriedSum(1)(2)(3));

// // What can your curried function do?
