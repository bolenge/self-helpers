const {
	stripHtmlTags,
	formatDateWithSlash,
	rand,
	objectEmpty
} = require('./index');

// console.log(stripHtmlTags("<h1>Hello world !</h1>"));
// console.log(formatDateWithSlash(new Date()));
// console.log(rand(1,90));


console.log(objectEmpty({nom: ''}));