
var coreRegEx = require("./coreRegEx");

var coreString = {};

coreString.replaceAll = function(value, substrings, newSubstring) {

	const substring = substrings.reduce((result, value) => {
		result += "|" + coreRegEx.escapeRegEx(value);
		return result;
	});

	const valuesRegExp = new RegExp(substring, "gi");
	value = value.replace(valuesRegExp, newSubstring);

	return value;
};

if (typeof module !== "undefined" && module.exports) {
	module.exports = coreString;
}