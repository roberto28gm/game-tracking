import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'game-tracking';

  constructor(private dataService: DataService){}
  
  ngOnInit(): void {
    if(!localStorage.getItem("data")){
      this.dataService.loadDefaultJSON().subscribe(res => {
        localStorage.setItem("data", JSON.stringify(res));
      });
    }
  }
}
