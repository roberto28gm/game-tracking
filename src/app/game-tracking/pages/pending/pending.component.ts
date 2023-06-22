import { Component, OnInit } from '@angular/core';
import { Game } from '../../interfaces/game.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html'
})
export class PendingComponent implements OnInit {
  tableData: Game[] = [];

  constructor(private dataService: DataService){}

  ngOnInit(): void {
    const data = this.dataService.readData();
    this.tableData = data.filter(x => x.completed === false);

  }
}
