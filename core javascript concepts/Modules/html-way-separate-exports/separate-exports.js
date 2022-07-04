// create a ES6 module with function getName, getSurname and default export getFullname.
// we need to give type = module in html file which is attached to this js file in script tags
export const getName = (name) => name;
export const getSurname = (surname) => surname;

export default (name, surname) => `${getName(name)} ${getSurname(surname)}`;
