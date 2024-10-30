import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Caracter } from '../../interfaces/caracter.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',

})
export class ListComponent { 

  @Input() caracters: Caracter[] = [];

  @Output()
  public onDeletePerson: EventEmitter<string> = new EventEmitter()

  
  onDeleted(id: string): void {
    this.onDeletePerson.emit(id)
  }

}
