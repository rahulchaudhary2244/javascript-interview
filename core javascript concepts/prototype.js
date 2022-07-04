// Design the same classes by using only Javascript prototypes
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
	setDepartment(department) {
		this.department = department;
	}
	getDepartment() {
		return this.department;
	}
}
