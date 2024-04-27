import { Component } from '@angular/core';
import { Characters } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent {

   constructor(private dbzService: DbzService){
    
   }

    get characterList():Characters[]{
        return [...this.dbzService.characters];
    }

    deleteCharacterById(id:string):void{
        this.dbzService.deleteCharacterById(id);
    }

    onNewCharacter(character:Characters):void{
        this.dbzService.onNewCharacter(character);
    }


}
