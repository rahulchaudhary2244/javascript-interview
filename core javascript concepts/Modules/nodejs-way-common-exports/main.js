// // using this way we can run in node js without using html file
const { getName, getSurname, getFullname } = require("./common-exports.js");
console.log(getName("Will"));
console.log(getSurname("Smith"));
console.log(getFullname("Will", "Smith"));
