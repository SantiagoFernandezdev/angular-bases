import { Injectable } from "@angular/core";
import { Caracter } from "../interfaces/caracter.interface";
import { v4 as uuid} from 'uuid';

@Injectable({
    providedIn: 'root'
})
export class DBZService {

    constructor() {

    }

    public caracters: Caracter[] = [
        {
            id   : uuid(),
            name : 'Goku',
            power: 10000
        },
        {
            id   : uuid(),
            name : 'Vegeta',
            power: 9800
        },
        {
            id   : uuid(),
            name : 'Gohan',
            power: 5000
        }
    ];

    onReceiveCharacter(character: Caracter): void {
  
        const newCharacter: Caracter = {id: uuid(), ...character}
        this.caracters.push(newCharacter)
   
    }

    onDeletePerson(event: string): void {
        this.caracters = this.caracters.filter( person => person.id != event)
    }

}