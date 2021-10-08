
const coreString = require("./lib/coreString");

function redact(keywordsPharases, document) {

	const replacement = "XXXX";
	const { keywords, phrases } = parseKeywordsPharases(keywordsPharases);

	document = coreString.replaceAll(document, phrases, replacement);
	document = coreString.replaceAll(document, keywords, replacement);

	return document;
}

function parseKeywordsPharases(keywordsPharases) {

	var phrases = [];
	var keywords = keywordsPharases.replace(/["|']([^"|']+)["|']/gm, function(match, group) {
		phrases.push(group);
		return "";
	});

	keywords = keywords.match(/[^\s|,]+/gm);

	return {
		keywords,
		phrases
	}
}

if (typeof module !== "undefined" && module.exports) {
	module.exports.redact = redact;
}