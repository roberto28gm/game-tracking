import { Component, Input } from '@angular/core';
import { Game } from '../../interfaces/game.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() data: Game[] = [];
  
  displayedColumns: string[] = [
    'id', 
    'name', 
    'completed', 
    'hours', 
    'dateCompleted', 
    'image'
  ];
}
