import { AAnimal } from "./AAnimal";

export class Dog extends AAnimal {
    
    sound(): void {
        console.log(`${this.name} is sounding bow bow!`)
    }

    show(): void{
        console.log(`${this.name} likes to watch Bolt!`)
    }
}