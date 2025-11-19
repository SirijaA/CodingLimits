"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AAnimal = void 0;
var AAnimal = /** @class */ (function () {
    function AAnimal(name, food) {
        this.name = name;
        this.food = food;
    }
    AAnimal.prototype.eat = function () {
        console.log("".concat(this.name, " eats ").concat(this.food));
    };
    return AAnimal;
}());
exports.AAnimal = AAnimal;
