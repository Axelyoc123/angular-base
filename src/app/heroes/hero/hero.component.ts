import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name:string='ironman';
  public age:number=45;

  get capitalizedName():string{
    return this.name.toUpperCase();

  }

  getHeroDescription():string{
    return `${this.name}-${this.age}`;
  }

  changeHero(name:string):string{
    return this.name=name;
  }

  changeAge(age:number):number{
    return this.age=age;
  }

  resetForm():void{
    this.name='IronMan';
    this.age=45;
  }
}