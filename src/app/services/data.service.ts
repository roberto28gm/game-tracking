import { Injectable } from '@angular/core';
import { Game } from '../game-tracking/interfaces/game.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { formatDate } from '@angular/common';


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
    const data = localStorage.getItem("data") || "";
    return JSON.parse(data);
  }

  saveGame(game: Game): void {
    if(!localStorage.getItem("data")) {
      localStorage.setItem("data", "");
    }

    const data = localStorage.getItem("data") || "";
    const currentData = data;
    this.games = JSON.parse(currentData);

    // TODO format Date

    this.games.push(game);
    localStorage.setItem("data", JSON.stringify(this.games));

  }

  formatGameDate(game: Game): Date {
    const gameDate = game.dateCompleted || '';
    console.log(gameDate);
    const formatedDate = formatDate(gameDate, 'yyyy-MM-dd', 'en-US');
    console.log(formatedDate);

    return new Date(formatedDate);
  }

}
