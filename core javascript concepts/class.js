// Design a class for employee which takes id and name in during construction of object and has a salary property
// Design a class for manager which is employee and can have department property

class Employee {
	constructor(id, name) {
		if (!id || !name) throw new Error("Employee id and name are mandatory");
		this.id = id;
		this.name = name;
	}
	getId() {
		return this.id;
	}
	getName() {
		return this.name;
	}
	setSalary(salary) {
		this.salary = salary;
	}
	getSalary() {
		return this.salary;
	}
}

class Manager extends Employee {
	// no need for constructor call as js internally perform this if we don't write this logic
	// constructor(...args) {
	// 	super(...args);
	// }
	setDepartment(department) {
		this.department = department;
	}
	getDepartment() {
		return this.department;
	}
}

const anil = new Employee(102, "Anil");
anil.setSalary(8000);
console.log(anil);

const mahesh = new Manager(101, "Mahesh");
mahesh.setSalary(10000);
mahesh.setDepartment("IT");
console.log(mahesh);
