import { Component } from '@angular/core';

@Component({
  selector: 'app-heores-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames:string[]=['Spiderman','Ironman','Hulk','She Hulk','Thor'];
  public deleteHero?:string;
  removeLastHero():void{
    this.deleteHero = this.heroNames.pop();//pop remueve el ultimo elemento del arreglo

  }
}
