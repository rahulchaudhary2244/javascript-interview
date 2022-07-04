// create debounce function

const saveInput = (name) => {
	console.log("saveInput = ", name);
};

const debounce = (fn, timeout = 300) => {
	let timer;
	return (...args) => {
		console.log(args); // here args = ['foo-someNumber'] ,what is args, why it contains value ?
		clearTimeout(timer);
		timer = setTimeout(() => {
			fn.apply(this, args);
		}, timeout);
	};
};

const processChange = debounce(saveInput, 2000);

processChange("foo-1");
processChange("foo-2");
processChange("foo-3");
processChange("foo-4");
processChange("foo-5");
processChange("foo-6");
processChange("foo-7");
