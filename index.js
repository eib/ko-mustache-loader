var interpolator = require('ko-mustached/src/interpolator').interpolator,
	MockBrowser = require('mock-browser').mocks.MockBrowser,
	doc = new MockBrowser().getDocument();

interpolator.configure({
	document: doc,
});

module.exports = function (source) {
	this.cacheable && this.cacheable();
	return interpolator.compile(source);
};
