import { IAnimal } from "./IAnimal";

export abstract class AAnimal implements IAnimal {
    name: string;
    food: string;

    constructor(name: string, food: string) {
        this.name = name;
        this.food = food;
    }

    eat(): void {
        console.log(`${this.name} eats ${this.food}`);
    }
    abstract sound():void;
}
