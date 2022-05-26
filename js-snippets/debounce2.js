function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

var myEfficientFn = debounce(function() {
	// All the taxing stuff you do
	console.log("function is called after 250 ms");
}, 250);

window.addEventListener('resize', myEfficientFn);

window.addEventListener('resize', () => console.log("non-optimized function"));

