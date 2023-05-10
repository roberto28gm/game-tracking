import { Component, Input } from '@angular/core';
import { Game } from '../../interfaces/game.interface';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() data: Game[] = [];
  IMAGE_WIDTH: number = 150;
  IMAGE_HEIGHT: number = 150;
  
  
  displayedColumns: string[] = [
    'name', 
    'completed', 
    'hours', 
    'dateCompleted',
    'score',
    'image'
  ];
}
