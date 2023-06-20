import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Game } from '../../interfaces/game.interface';


@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent {
  submited: boolean = false;
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
      private dataService: DataService
  ) {}

  onSubmit(){
    this.submited = true;
    if(this.form?.invalid){
      return;
    }
    const newGame = this.form.value;
    newGame.id = this.generateId();
    if(!newGame.image){
      newGame.image = "/assets/default_image.png";
    }
    this.dataService.saveGame(newGame);
  }


  generateId(): Number{
    if(!localStorage.getItem("data")){
      return 0;
    }

    let games: Game[] = JSON.parse(localStorage.getItem("data")!);
    const ids = games.map(x => x.id);
    const sorted = ids.sort((a, b) => a - b);
    const maxId = sorted[sorted.length - 1];

    console.log(ids);
    console.log(sorted);
    console.log('max id', maxId + 1);
    
    return maxId + 1;
  }
  
}
