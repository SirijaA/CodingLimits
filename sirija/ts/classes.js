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
// BASIC CLASS
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        return "Hi, I'm ".concat(this.name, ".");
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    return Person;
}());
var p = new Person("Neha", 29);
console.log(p.greet());
console.log("Age via method:", p.getAge());
// CLASS WITH PRIVATE & READONLY & STATIC
var Product = /** @class */ (function () {
    // readonly cannot be changed after initialization
    function Product(title, price, sku) {
        this.title = title;
        this.price = price;
        this.sku = sku;
    }
    Product.prototype.getPriceWithTax = function () {
        return this.price * (1 + Product.taxRate);
    };
    // private method (usable only inside class)
    Product.prototype.formatPrice = function () {
        return "\u20B9".concat(this.price.toFixed(2));
    };
    Product.prototype.describe = function () {
        return "".concat(this.title, " (").concat(this.sku, ") - ").concat(this.formatPrice());
    };
    // static member shared by all instances
    Product.taxRate = 0.12;
    return Product;
}());
var prod = new Product("Notebook", 250, "NB-001");
console.log(prod.describe());
console.log("Price with tax:", prod.getPriceWithTax());
console.log("Static tax rate:", Product.taxRate);
// GETTERS & SETTERS (validation example)
var BankAccount = /** @class */ (function () {
    function BankAccount(owner, _balance) {
        if (_balance === void 0) { _balance = 0; }
        this.owner = owner;
        this._balance = _balance;
    }
    Object.defineProperty(BankAccount.prototype, "balance", {
        get: function () {
            return this._balance;
        },
        // set with validation
        set: function (value) {
            if (value < 0)
                throw new Error("Balance cannot be negative");
            this._balance = value;
        },
        enumerable: false,
        configurable: true
    });
    BankAccount.prototype.deposit = function (amount) {
        if (amount <= 0)
            throw new Error("Deposit must be positive");
        this._balance += amount;
        return this; // allow chaining
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (amount <= 0)
            throw new Error("Withdraw must be positive");
        if (amount > this._balance)
            throw new Error("Insufficient funds");
        this._balance -= amount;
        return this; // allow chaining
    };
    return BankAccount;
}());
var acct = new BankAccount("Rita", 1000);
acct.deposit(500).withdraw(200);
console.log("Balance after txns:", acct.balance);
try {
    acct.balance = -50; // will throw
}
catch (e) {
    console.log("Error setting balance:", e.message);
}
var Todo = /** @class */ (function () {
    function Todo(id, task, done) {
        if (done === void 0) { done = false; }
        this.id = id;
        this.task = task;
        this.done = done;
    }
    Todo.prototype.toggle = function () {
        this.done = !this.done;
    };
    Todo.prototype.serialize = function () {
        return JSON.stringify({ id: this.id, task: this.task, done: this.done });
    };
    return Todo;
}());
var t = new Todo(1, "Learn TypeScript classes");
t.toggle();
console.log("Serialized todo:", t.serialize());
// ABSTRACT CLASS + INHERITANCE + override
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function () {
        return "".concat(this.name, " moves.");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, breed) {
        var _this = _super.call(this, name) || this;
        _this.breed = breed;
        return _this;
    }
    Dog.prototype.speak = function () {
        return "".concat(this.name, " barks (breed: ").concat(this.breed, ").");
    };
    // subclass-specific method
    Dog.prototype.fetch = function () {
        return "".concat(this.name, " fetches the ball.");
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.speak = function () {
        return "".concat(this.name, " meows.");
    };
    return Cat;
}(Animal));
var dog = new Dog("Rocky", "Labrador");
var cat = new Cat("Luna");
var animals = [dog, cat];
animals.forEach(function (a) {
    console.log(a.speak());
    console.log(a.move());
});
// instanceof narrowing
if (dog instanceof Dog)
    console.log(dog.fetch());
// GENERIC CLASS (small example)
var Pair = /** @class */ (function () {
    function Pair(first, second) {
        this.first = first;
        this.second = second;
    }
    Pair.prototype.swap = function () {
        return new Pair(this.second, this.first);
    };
    return Pair;
}());
var pair = new Pair(1, "one");
console.log("Pair:", pair.first, pair.second);
var swapped = pair.swap();
console.log("Swapped:", swapped.first, swapped.second);
