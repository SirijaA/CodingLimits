"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1️⃣ BASIC NUMERIC ENUM
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
console.log("Direction Up:", Direction.Up);
console.log("Direction Down:", Direction.Down);
//  NUMERIC ENUM WITH CUSTOM VALUES
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["Success"] = 200] = "Success";
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
    StatusCode[StatusCode["ServerError"] = 500] = "ServerError";
})(StatusCode || (StatusCode = {}));
console.log("Success Code:", StatusCode.Success);
console.log("Not Found Code:", StatusCode.NotFound);
//  STRING ENUM
var LogLevel;
(function (LogLevel) {
    LogLevel["Info"] = "INFO";
    LogLevel["Warning"] = "WARNING";
    LogLevel["Error"] = "ERROR";
})(LogLevel || (LogLevel = {}));
console.log("Log Level:", LogLevel.Error);
//  HETEROGENEOUS ENUM (number + string)
var MixedEnum;
(function (MixedEnum) {
    MixedEnum[MixedEnum["Yes"] = 1] = "Yes";
    MixedEnum["No"] = "NO";
})(MixedEnum || (MixedEnum = {}));
console.log("Mixed Yes:", MixedEnum.Yes);
console.log("Mixed No:", MixedEnum.No);
//  ENUM USED IN FUNCTION (switch case)
function getStatusMessage(code) {
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
var Role;
(function (Role) {
    Role["Admin"] = "ADMIN";
    Role["User"] = "USER";
    Role["Guest"] = "GUEST";
})(Role || (Role = {}));
var a1 = {
    name: "Sirija",
    role: Role.Admin,
};
console.log("Account:", a1);
var tshirtSize = 1 /* Size.Medium */;
console.log("T-shirt Size:", tshirtSize); // 1
//  ENUM REVERSE MAPPING (only for numeric enums)
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
console.log("Color Green numeric:", Color.Green);
console.log("Reverse Mapping of 2:", Color[2]);
//  USING ENUM IN CLASS
var Order = /** @class */ (function () {
    function Order() {
        this.status = StatusCode.Success;
    }
    Order.prototype.printStatus = function () {
        console.log("Order Status:", getStatusMessage(this.status));
    };
    return Order;
}());
var order = new Order();
order.status = StatusCode.ServerError;
order.printStatus();
//  ENUM WITH UNION TYPE (advanced)
var Payment;
(function (Payment) {
    Payment["Card"] = "CARD";
    Payment["UPI"] = "UPI";
    Payment["Cash"] = "CASH";
})(Payment || (Payment = {}));
function makePayment(mode) {
    console.log("Paying with:", mode);
}
makePayment(Payment.UPI);
makePayment("WALLET");
