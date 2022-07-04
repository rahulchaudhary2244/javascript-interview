// WAF which implements shuffle

//step 1: form an array using map from [val1, val2, val3] to
// [{ sort: 123, value: val1 }, { sort: 784, value: val2 }, { sort: 123, value: val3 }] this
// these 123, 784 can be random numbers Math.random() will return like this 0.2575324499198093

// step 2: sort the array of object based on their sort values

// step 3: form an array using map having only original values from
// [{ sort: 784, value: val2 }, { sort: 123, value: val1 }, { sort: 123, value: val3 }] to
// [val2, val1, val3]

const shuffleItems = (arr) =>
	[...arr]
		.map((x) => {
			return {
				sort: Math.random(),
				value: x,
			};
		})
		.sort((a, b) => a.sort - b.sort)
		.map((x) => x.value);

console.log(shuffleItems([1, 2, 3, 4, 5, 6, 7]));
