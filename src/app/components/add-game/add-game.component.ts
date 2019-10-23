import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Game } from '../../models/game';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.scss']
})
export class AddGameComponent implements OnInit {

  public id: number;
  public label: string;
  public genre: string;
  public fsk: number;

  constructor(
    public dataService: DataService
  ) { }

  addGame() {
    this.dataService.addGame(new Game(this.id, this.label, this.genre, this.fsk));
    this.dataService.popup('Spiel ' + this.label + ' hinzugefügt!');
    this.id = null;
    this.label = null;
    this.genre = null;
    this.fsk = null;
  }

  ngOnInit() {
  }

}
