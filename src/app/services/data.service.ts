import { Injectable } from '@angular/core';
import { Game } from '../game-tracking/interfaces/game.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _jsonPath = 'assets/gamesDB.json';
  public games: Game[] = [];

  constructor(private http: HttpClient) { }

  loadDefaultJSON(): Observable<Game[]> {
    return this.http.get<Game[]>(this._jsonPath);
  }

  readData(): Game[] {
    if(!localStorage.getItem("data")){
      return [];
    }
    return JSON.parse(localStorage.getItem("data")!);
  }

  saveGame(game: Game): void {
    if(!localStorage.getItem("data")) {
      localStorage.setItem("data", "");
    }

    let currentData = localStorage.getItem("data")!;
    this.games = JSON.parse(currentData);
    this.games.push(game);
    localStorage.setItem("data", JSON.stringify(this.games));

  }

}
