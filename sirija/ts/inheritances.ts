export {};

// INTERFACE
interface IPerson {
  name: string;
  describe(): string;
}

//  ABSTRACT BASE CLASS
abstract class Person implements IPerson {
  // public visible everywhere, protected visible to subclasses, private only inside this class
  constructor(
    public name: string,
    protected age: number,
    private readonly ssn: string
  ) {}

  // abstract method forces subclasses to implement
  abstract getRole(): string;

  describe(): string {
    return `${this.name}, age ${this.age}`;
  }

  // a method that uses the private readonly field inside the class
  maskedSsn(): string {
    return `***-**-${this.ssn.slice(-4)}`;
  }
}

//  SUBCLASS: Employee
class Employee extends Person {
  // static member shared by all instances
  static company = "Acme Corp";

  // protected member accessible inside subclasses
  protected employeeId: string;

  constructor(name: string, age: number, ssn: string, employeeId: string) {
    super(name, age, ssn); // call base constructor
    this.employeeId = employeeId;
  }

  getRole(): string {
    return "Employee";
  }

  // method overriding (extends behaviour)
  override describe(): string {
    return `${super.describe()} - ${this.getRole()} [ID:${this.employeeId}]`;
  }

  // getter for protected member to expose in read-only fashion
  get id(): string {
    return this.employeeId;
  }

  // setter with validation
  set id(newId: string) {
    if (!newId) throw new Error("Invalid ID");
    this.employeeId = newId;
  }
}

// SUBCLASS: Manager (inherits Employee)
class Manager extends Employee {
  constructor(
    name: string,
    age: number,
    ssn: string,
    employeeId: string,
    public reports: Employee[] = []
  ) {
    super(name, age, ssn, employeeId);
  }

  override getRole(): string {
    return "Manager";
  }

  addReport(emp: Employee) {
    this.reports.push(emp);
  }

  listReports(): string {
    return this.reports.map((r) => r.name).join(", ") || "No reports";
  }
}

//  SUBCLASS: Contractor (demonstrates implements + separate behavior)
class Contractor extends Person {
  constructor(name: string, age: number, ssn: string, public company: string) {
    super(name, age, ssn);
  }

  getRole(): string {
    return "Contractor";
  }

  // Contractors might not have an employeeId, so different describe
  override describe(): string {
    return `${this.name} (Contractor at ${this.company})`;
  }
}

//  USAGE / POLYMORPHISM
const emp1 = new Employee("Maya", 28, "111223333", "E100");
const emp2 = new Employee("Ravi", 30, "222334444", "E101");
const mgr = new Manager("Anil", 40, "333445555", "M200", [emp1]);
const contractor = new Contractor("Kiran", 26, "444556666", "BuildCo");

// Polymorphism: array of base-type references
const people: Person[] = [emp1, emp2, mgr, contractor];

people.forEach((p) => {
  console.log(p.describe()); // runtime dispatch to subclass override
});

// static access
console.log("Company:", Employee.company);

// getters/setters
console.log("Emp1 ID:", emp1.id);
emp1.id = "E100-UPDATED";
console.log("Updated Emp1 ID:", emp1.id);

// manager reports
mgr.addReport(emp2);
console.log("Manager reports:", mgr.listReports());

// demonstrate access to base-class-only method
console.log("Masked SSN for emp1 (class method):", emp1.maskedSsn());

// instanceof checks (type narrowing at runtime)
people.forEach((p) => {
  if (p instanceof Manager) {
    console.log(`${p.name} is a Manager with reports: ${p.listReports()}`);
  } else if (p instanceof Employee) {
    console.log(`${p.name} is an Employee, id = ${(p as Employee).id}`);
  } else if (p instanceof Contractor) {
    console.log(`${p.name} is a Contractor at ${(p as Contractor).company}`);
  }
});
