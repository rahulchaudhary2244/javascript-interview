// class-using-prototypes.js
// code not working in this file
// Design a class for employee which takes id and name in during construction of object and has a salary property
// Design a class for manager which is employee and can have department property

var Employee = function (id, name) {
	if (!id || !name) throw new Error("Employee id and name are mandatory");
	this.id = id;
	this.name = name;
};
Employee.prototype.getId = function () {
	return this.id;
};
Employee.prototype.getName = function () {
	return this.name;
};
Employee.prototype.setSalary = function (salary) {
	this.salary = salary;
};
Employee.prototype.getSalary = function () {
	return this.salary;
};

var Manager = function (params) {
	Employee.apply(this, arguments);
};

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager();

Manager.prototype.setDepartment = function (department) {
	this.department = department;
};
Manager.prototype.getDepartment = function () {
	return this.department;
};

// const anil = new Employee(102, "Anil");
// anil.setSalary(8000);
// console.log(anil);

// const mahesh = new Manager(101, "Mahesh");
// mahesh.setSalary(10000);
// mahesh.setDepartment("IT");
// console.log(mahesh);
