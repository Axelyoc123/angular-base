import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { Dbzservice } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page-component.html',
  standalone:false
})

export class MainPageComponent {

  constructor( private dbzService:Dbzservice){}//public dbzService:Dbzservice hara la inyeccion de dependencia


  get Characters():Character[]{
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id:string):void{
    this.dbzService.deleteCharacterById(id)
  }

  onNewCharacter(Character:Character){
    this.dbzService.addCharacter(Character);
  }

}