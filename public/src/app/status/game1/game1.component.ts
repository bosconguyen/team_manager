import { Component, OnInit } from '@angular/core';
import { PlayerService } from './../../player.service';

@Component({
  selector: 'app-game1',
  templateUrl: './game1.component.html',
  styleUrls: ['./game1.component.css']
})
export class Game1Component implements OnInit {

    players: Array<any>;

  constructor(private _playerService: PlayerService) { }

  ngOnInit() {
      this.getAllPlayers();
  }

  getAllPlayers() {
      this._playerService.getAllPlayers()
      .then( (players) => this.players = players)
      .catch( (err) => console.log(err))
  }

  playPlayer(player_id) {
      console.log(player_id);
      this._playerService.playPlayer('game1', player_id)
      .then( (player) => this.getAllPlayers())
      .catch( (err) => console.log(err))
  }

  notPlayPlayer(player_id) {
      this._playerService.notPlayPlayer('game1', player_id)
      .then( (player) => this.getAllPlayers())
      .catch( (err) => console.log(err))
  }

  undecidedPlayer(player_id) {
      this._playerService.undecidedPlayer('game1', player_id)
      .then( (player) => this.getAllPlayers())
      .catch( (err) => console.log(err))
  }

}
