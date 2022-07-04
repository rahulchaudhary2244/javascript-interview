// create throttle function

const saveInput = (name) => {
	console.log("saveInput = ", name);
};

const throttle = (fn, timeout = 300) => {
	let isWaiting = false;
	return (...args) => {
		console.log(args); // here args = ['foo-someNumber'] ,what is args, why it contains value ?
		if (!isWaiting) {
			fn.apply(this, args);
			isWaiting = true;
			setTimeout(() => {
				isWaiting = false;
			}, timeout);
		}
	};
};

const processChange = throttle(saveInput, 2000);

processChange("foo-1");

setTimeout(() => {
	processChange("foo-2");
}, 1000);

setTimeout(() => {
	processChange("foo-3");
}, 1200);

setTimeout(() => {
	processChange("foo-4");
}, 2400);
