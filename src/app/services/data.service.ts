import { Injectable } from '@angular/core';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private gameList: Game[] = [];

  constructor() {
    this.gameList.push(new Game(1, 'Minecraft', 'Augenkrebs', 6));
  }

  addGame(game: Game) {
    this.gameList.push(game);
  }

  popup(message: string) {
    alert(message);
  }

  get games(): Game[] {
    return this.gameList;
  }

}
