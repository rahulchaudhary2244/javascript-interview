// we need to give type = module in html file which is attached to this js file in script tags
import getFullname, { getName, getSurname } from "./separate-exports.js";

console.log(getName("Randy"));
console.log(getSurname("Orton"));
console.log(getFullname("Randy", "Orton"));
