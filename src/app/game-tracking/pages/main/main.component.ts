import { Component, OnInit } from '@angular/core';
import { Game } from '../../interfaces/game.interface';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {
  dataTable: Game[] = [];

  constructor(private dataService: DataService){}

  ngOnInit(): void {
    const data = this.dataService.readData();
    this.dataTable = data.sort((a,b) => 
      (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
  }
}
