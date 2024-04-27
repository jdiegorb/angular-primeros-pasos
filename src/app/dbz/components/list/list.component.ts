import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Characters } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();
  // public onDelete2 = new EventEmitter<number>();

  @Input()
  public characterList: Characters[] = [{
    name: 'Trunk',
    power: 10
  }];

  onDeleteCharacter(id?: string):void{
    this.onDelete.emit(id);
  }

}
