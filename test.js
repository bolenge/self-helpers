const {
	stripHtmlTags,
	formatDateWithSlash,
	rand
} = require('./index');

console.log(stripHtmlTags("<h1>Hello world !</h1>"));
console.log(formatDateWithSlash(new Date()));
console.log(rand(1,90));