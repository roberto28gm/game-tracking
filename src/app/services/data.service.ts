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

  readJsonData(): Observable<Game[]> {
    return this.http.get<Game[]>(this._jsonPath);
  }

  saveGame(game: Game): boolean{
    // TODO
    //.....

    return false;
  }
}
