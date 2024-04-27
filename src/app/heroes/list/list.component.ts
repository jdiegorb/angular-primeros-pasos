import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroes: string[] = ['Spiderman', 'Superman', 'Gatuvela', 'Acuaman'];
  public heroeEliminado?: string;

  deleteHeroe():void{
    this.heroeEliminado = this.heroes.pop();
  }

}
