// create the same with common JS module
// // using this way we can run in node js without using html file
const getName = (name) => name;

const getSurname = (surname) => surname;

const getFullname = (name, surname) =>
	`${getName(name)} ${getSurname(surname)}`;

const isNamePalindrome = (name) => name === name.split("").reverse().join(""); // not exporting this function

module.exports = {
	getName: getName,
	getSurname: getSurname,
	getFullname: getFullname,
};
