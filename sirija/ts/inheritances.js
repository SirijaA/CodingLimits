"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
//  ABSTRACT BASE CLASS
var Person = /** @class */ (function () {
    // public visible everywhere, protected visible to subclasses, private only inside this class
    function Person(name, age, ssn) {
        this.name = name;
        this.age = age;
        this.ssn = ssn;
    }
    Person.prototype.describe = function () {
        return "".concat(this.name, ", age ").concat(this.age);
    };
    // a method that uses the private readonly field inside the class
    Person.prototype.maskedSsn = function () {
        return "***-**-".concat(this.ssn.slice(-4));
    };
    return Person;
}());
//  SUBCLASS: Employee
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, ssn, employeeId) {
        var _this = _super.call(this, name, age, ssn) || this; // call base constructor
        _this.employeeId = employeeId;
        return _this;
    }
    Employee.prototype.getRole = function () {
        return "Employee";
    };
    // method overriding (extends behaviour)
    Employee.prototype.describe = function () {
        return "".concat(_super.prototype.describe.call(this), " - ").concat(this.getRole(), " [ID:").concat(this.employeeId, "]");
    };
    Object.defineProperty(Employee.prototype, "id", {
        // getter for protected member to expose in read-only fashion
        get: function () {
            return this.employeeId;
        },
        // setter with validation
        set: function (newId) {
            if (!newId)
                throw new Error("Invalid ID");
            this.employeeId = newId;
        },
        enumerable: false,
        configurable: true
    });
    // static member shared by all instances
    Employee.company = "Acme Corp";
    return Employee;
}(Person));
// SUBCLASS: Manager (inherits Employee)
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, age, ssn, employeeId, reports) {
        if (reports === void 0) { reports = []; }
        var _this = _super.call(this, name, age, ssn, employeeId) || this;
        _this.reports = reports;
        return _this;
    }
    Manager.prototype.getRole = function () {
        return "Manager";
    };
    Manager.prototype.addReport = function (emp) {
        this.reports.push(emp);
    };
    Manager.prototype.listReports = function () {
        return this.reports.map(function (r) { return r.name; }).join(", ") || "No reports";
    };
    return Manager;
}(Employee));
//  SUBCLASS: Contractor (demonstrates implements + separate behavior)
var Contractor = /** @class */ (function (_super) {
    __extends(Contractor, _super);
    function Contractor(name, age, ssn, company) {
        var _this = _super.call(this, name, age, ssn) || this;
        _this.company = company;
        return _this;
    }
    Contractor.prototype.getRole = function () {
        return "Contractor";
    };
    // Contractors might not have an employeeId, so different describe
    Contractor.prototype.describe = function () {
        return "".concat(this.name, " (Contractor at ").concat(this.company, ")");
    };
    return Contractor;
}(Person));
//  USAGE / POLYMORPHISM
var emp1 = new Employee("Maya", 28, "111223333", "E100");
var emp2 = new Employee("Ravi", 30, "222334444", "E101");
var mgr = new Manager("Anil", 40, "333445555", "M200", [emp1]);
var contractor = new Contractor("Kiran", 26, "444556666", "BuildCo");
// Polymorphism: array of base-type references
var people = [emp1, emp2, mgr, contractor];
people.forEach(function (p) {
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
people.forEach(function (p) {
    if (p instanceof Manager) {
        console.log("".concat(p.name, " is a Manager with reports: ").concat(p.listReports()));
    }
    else if (p instanceof Employee) {
        console.log("".concat(p.name, " is an Employee, id = ").concat(p.id));
    }
    else if (p instanceof Contractor) {
        console.log("".concat(p.name, " is a Contractor at ").concat(p.company));
    }
});
