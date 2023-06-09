import { Component, Input } from '@angular/core';
import { Game } from '../../interfaces/game.interface';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() data: Game[] = [];
  IMAGE_WIDTH = 120;
  IMAGE_HEIGHT = 120;
  
  
  displayedColumns: string[] = [
    'name', 
    'completed', 
    'hours', 
    'dateCompleted',
    'score',
    'image'
  ];
}
