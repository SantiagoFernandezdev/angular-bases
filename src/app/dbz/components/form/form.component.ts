import { Component, EventEmitter, Output } from '@angular/core';
import { Caracter } from '../../interfaces/caracter.interface';

@Component({
  selector: 'dbz-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  public character: Caracter = {
    name  : '',
    power : 0
  }

  @Output()
  onSaveCharacter: EventEmitter<Caracter> = new EventEmitter()


  save(): void {
    // console.log(this.character)
    if(!this.character.name) return;

    this.onSaveCharacter.emit({...this.character})
    // console.log(this.character)

    this.character.name  = '';
    this.character.power = 0;

  }

}
