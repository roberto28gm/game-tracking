import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Game } from '../../interfaces/game.interface';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent {
  numRegex = '^([0-9]{1,3})$';

  form: FormGroup = this.formBuilder.group({
    id: [""],
    name: ["", [Validators.required]],
    completed: ["", [Validators.required]],
    hours: ["", [Validators.min(0)]],
    date: [""],
    score: ["",[
              Validators.min(0), 
              Validators.max(100),
              Validators.pattern(this.numRegex)]],
    image: [""]
  });


  constructor(
      private formBuilder: FormBuilder, 
      private dataService: DataService,
      private snackBar: MatSnackBar
  ) {}

  onSubmit(){
    if(this.form?.invalid){
      return;
    }
    const newGame = this.form.value;
    newGame.id = this.generateId();
    if(!newGame.image){
      newGame.image = "/assets/default_image.png";
    }
    this.dataService.saveGame(newGame);
    this.form.reset();
    this.snackBar.open('Game added!', '', {duration: 3 * 1000});
  }


  generateId(): number{
    let gameId = 0;

    if(!localStorage.getItem("data")){
      return gameId;
    }

    const data = localStorage.getItem("data") || "";
    const games: Game[] = JSON.parse(data);
    

    if(games.length > 0){
      const ids = games.map(x => x.id);
      const sorted = ids.sort((a, b) => a - b);
      const maxId = sorted[sorted.length - 1];
      gameId = maxId + 1;
    }
    
    return gameId;
  }
  
}
