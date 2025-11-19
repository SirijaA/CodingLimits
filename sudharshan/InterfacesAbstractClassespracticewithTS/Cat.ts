import { AAnimal } from "./AAnimal";

export class Cat extends AAnimal {
    
    sound(): void {
        console.log(`${this.name} is sounding meow meow!`)
    }
    goal(): void{
        console.log(`${this.name} likes to catch jerry`)
    }
}