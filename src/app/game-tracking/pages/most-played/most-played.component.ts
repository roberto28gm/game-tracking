import { Component, OnInit } from '@angular/core';
import { Game } from '../../interfaces/game.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-most-played',
  templateUrl: './most-played.component.html'
})
export class MostPlayedComponent implements OnInit {
  tableData: Game[] = [];

  constructor(private dataService: DataService){}

  ngOnInit(): void {
    const data = this.dataService.readData();
    this.tableData = data.sort((a, b) => {
      if (a.hours && b.hours) {
        return b.hours - a.hours    
      } else {
        return 0;
      }
      
    });

  }

}
