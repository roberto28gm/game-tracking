import { Component, OnInit } from '@angular/core';
import { Game } from '../../interfaces/game.interface';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {
  data: Game[] = [];

  constructor(private dataService: DataService){}

  ngOnInit(): void {
    this.data = this.dataService.readData();
  }
  
}
