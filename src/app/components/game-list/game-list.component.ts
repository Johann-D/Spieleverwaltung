import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Game } from '../../models/game';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  constructor(
    public dataService: DataService
  ) { }

  get games(): Game[] {
    return this.dataService.games;
  }

  popup(message: string) {
    this.dataService.popup(message);
  }

  ngOnInit() {
  }

}
