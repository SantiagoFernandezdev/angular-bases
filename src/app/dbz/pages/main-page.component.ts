import { Component } from "@angular/core";
import { Caracter } from "../interfaces/caracter.interface";
import { DBZService } from "../services/dbz.service";

@Component({
    selector: 'dbz-main',
    templateUrl: './main-page.component.html',
    styleUrl: './main-page.component.css'
})
export class DBZMainComponent {

   constructor(
    private service: DBZService
   ) {

   }

   get charaterList(): Caracter[] {
    return [...this.service.caracters];
   }

   onDeletePerson(id: string) : void {
    this.service.onDeletePerson(id);
   }

   onReceiveCharacter(character: Caracter): void {
    this.service.onReceiveCharacter(character)
   }

}