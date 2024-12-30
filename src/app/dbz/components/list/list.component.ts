import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import {v4 as uuid} from 'uuid'
@Component({
  selector: 'dbz-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input()
  public characterList: Character[]=[
    {

      name:'Trunks',
      power:10
    }]

    @Output()
    public onDelete:EventEmitter<string>=new EventEmitter();

    onDeleteCharacter(id?:string):void{
      if(!id) return;//si no tengo un ID no emitira la funcion de onDelete
      //TODO: Emitir el ID del pesonaje
      this.onDelete.emit(id);
    }
}
