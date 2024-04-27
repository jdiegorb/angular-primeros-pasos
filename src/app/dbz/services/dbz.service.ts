import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Characters } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Characters[] = [
      {
        id: uuid(),
        name: 'Krillin',
          power: 1000
      },
      {
        id: uuid(),
        name: 'Goku',
          power: 9500
      },
      {
        id: uuid(),
        name: 'Vegeta',
          power: 7500
      }
  ];

  onNewCharacter(character:Characters):void{

    const newCharacter = {id: uuid(), ...character};

      this.characters.push(newCharacter);
  }


  deleteCharacterById(id:string){
    this.characters = this.characters.filter( character => character.id !== id)
  }

  // onDeleteCharacter(index:any){
  //     console.log({index});
  //     this.characters.splice(index, 1)
  // }

}
