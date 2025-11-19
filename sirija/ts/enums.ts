export {};

// 1️⃣ BASIC NUMERIC ENUM

enum Direction {
  Up,
  Down,
  Left,
  Right,
}

console.log("Direction Up:", Direction.Up);
console.log("Direction Down:", Direction.Down);

//  NUMERIC ENUM WITH CUSTOM VALUES

enum StatusCode {
  Success = 200,
  NotFound = 404,
  ServerError = 500,
}

console.log("Success Code:", StatusCode.Success);
console.log("Not Found Code:", StatusCode.NotFound);

//  STRING ENUM

enum LogLevel {
  Info = "INFO",
  Warning = "WARNING",
  Error = "ERROR",
}

console.log("Log Level:", LogLevel.Error);

//  HETEROGENEOUS ENUM (number + string)

enum MixedEnum {
  Yes = 1,
  No = "NO",
}

console.log("Mixed Yes:", MixedEnum.Yes);
console.log("Mixed No:", MixedEnum.No);

//  ENUM USED IN FUNCTION (switch case)

function getStatusMessage(code: StatusCode): string {
  switch (code) {
    case StatusCode.Success:
      return "Operation was successful!";
    case StatusCode.NotFound:
      return "Resource not found.";
    case StatusCode.ServerError:
      return "Internal server error.";
    default:
      return "Unknown status";
  }
}

console.log(getStatusMessage(StatusCode.NotFound));

//  ENUM WITH TYPE SAFETY IN OBJECTS

enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST",
}

type Account = {
  name: string;
  role: Role;
};

let a1: Account = {
  name: "Sirija",
  role: Role.Admin,
};

console.log("Account:", a1);

//  CONST ENUM (optimized, removes runtime code)

const enum Size {
  Small,
  Medium,
  Large,
}

let tshirtSize: Size = Size.Medium;
console.log("T-shirt Size:", tshirtSize); // 1

//  ENUM REVERSE MAPPING (only for numeric enums)

enum Color {
  Red = 1,
  Green = 2,
  Blue = 3,
}

console.log("Color Green numeric:", Color.Green);
console.log("Reverse Mapping of 2:", Color[2]);

//  USING ENUM IN CLASS

class Order {
  status: StatusCode = StatusCode.Success;

  printStatus() {
    console.log("Order Status:", getStatusMessage(this.status));
  }
}

const order = new Order();
order.status = StatusCode.ServerError;
order.printStatus();

//  ENUM WITH UNION TYPE (advanced)

enum Payment {
  Card = "CARD",
  UPI = "UPI",
  Cash = "CASH",
}

function makePayment(mode: Payment | "WALLET") {
  console.log("Paying with:", mode);
}

makePayment(Payment.UPI);
makePayment("WALLET");
