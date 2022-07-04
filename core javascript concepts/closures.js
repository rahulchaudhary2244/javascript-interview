// Create a counter function which has increment and getValue functionality
const privateCounter = () => {
	let count = 0;

	return {
		increment: (val = 1) => {
			count += val;
		},
		getValue: () => count,
	};
};

const counter = privateCounter();
console.log(counter.count); // undefined
console.log(counter.getValue()); // 0
counter.increment();
console.log(counter.getValue()); // 1
console.log(counter.count); // undefined

// for better understanding do
// console.dir(counter.getValue);
// in browser console there expand the properties - scopes , there we will see closures()

console.log("---------------------------------------------");
// Another simple example of closures
const privateSecret = () => {
	const secret = "foo";

	return () => secret;
};

console.log(privateSecret()); // we don't have access to anonymous function
console.log(privateSecret()()); // foo
const getSecret = privateSecret();
console.log(getSecret()); // foo
