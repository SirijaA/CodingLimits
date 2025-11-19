export {};

// BASIC CLASS

class Person {
  constructor(public name: string, protected age: number) {}

  greet(): string {
    return `Hi, I'm ${this.name}.`;
  }

  getAge(): number {
    return this.age;
  }
}

const p = new Person("Neha", 29);
console.log(p.greet());
console.log("Age via method:", p.getAge());

// CLASS WITH PRIVATE & READONLY & STATIC

class Product {
  // readonly cannot be changed after initialization
  constructor(
    public title: string,
    private price: number,
    readonly sku: string
  ) {}

  // static member shared by all instances
  static taxRate = 0.12;

  getPriceWithTax(): number {
    return this.price * (1 + Product.taxRate);
  }

  // private method (usable only inside class)
  private formatPrice(): string {
    return `₹${this.price.toFixed(2)}`;
  }

  describe(): string {
    return `${this.title} (${this.sku}) - ${this.formatPrice()}`;
  }
}

const prod = new Product("Notebook", 250, "NB-001");
console.log(prod.describe());
console.log("Price with tax:", prod.getPriceWithTax());
console.log("Static tax rate:", Product.taxRate);

// GETTERS & SETTERS (validation example)

class BankAccount {
  constructor(public owner: string, private _balance: number = 0) {}

  get balance(): number {
    return this._balance;
  }

  // set with validation
  set balance(value: number) {
    if (value < 0) throw new Error("Balance cannot be negative");
    this._balance = value;
  }

  deposit(amount: number) {
    if (amount <= 0) throw new Error("Deposit must be positive");
    this._balance += amount;
    return this; // allow chaining
  }

  withdraw(amount: number) {
    if (amount <= 0) throw new Error("Withdraw must be positive");
    if (amount > this._balance) throw new Error("Insufficient funds");
    this._balance -= amount;
    return this; // allow chaining
  }
}

const acct = new BankAccount("Rita", 1000);
acct.deposit(500).withdraw(200);
console.log("Balance after txns:", acct.balance);
try {
  acct.balance = -50; // will throw
} catch (e) {
  console.log("Error setting balance:", (e as Error).message);
}

// INTERFACE + IMPLEMENTS

interface Serializable {
  serialize(): string;
}

class Todo implements Serializable {
  constructor(public id: number, public task: string, public done = false) {}
  toggle() {
    this.done = !this.done;
  }
  serialize(): string {
    return JSON.stringify({ id: this.id, task: this.task, done: this.done });
  }
}

const t = new Todo(1, "Learn TypeScript classes");
t.toggle();
console.log("Serialized todo:", t.serialize());

// ABSTRACT CLASS + INHERITANCE + override

abstract class Animal {
  constructor(public name: string) {}
  abstract speak(): string;
  move(): string {
    return `${this.name} moves.`;
  }
}

class Dog extends Animal {
  constructor(name: string, private breed: string) {
    super(name);
  }

  override speak(): string {
    return `${this.name} barks (breed: ${this.breed}).`;
  }

  // subclass-specific method
  fetch(): string {
    return `${this.name} fetches the ball.`;
  }
}

class Cat extends Animal {
  override speak(): string {
    return `${this.name} meows.`;
  }
}

const dog = new Dog("Rocky", "Labrador");
const cat = new Cat("Luna");
const animals: Animal[] = [dog, cat];
animals.forEach((a) => {
  console.log(a.speak());
  console.log(a.move());
});

// instanceof narrowing
if (dog instanceof Dog) console.log(dog.fetch());

// GENERIC CLASS (small example)

class Pair<A, B> {
  constructor(public first: A, public second: B) {}
  swap(): Pair<B, A> {
    return new Pair(this.second, this.first);
  }
}

const pair = new Pair<number, string>(1, "one");
console.log("Pair:", pair.first, pair.second);
const swapped = pair.swap();
console.log("Swapped:", swapped.first, swapped.second);
