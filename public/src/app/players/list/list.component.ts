import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';
import { PlayerService } from './../../player.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
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

  deletePlayer(player_id) {
      console.log(player_id);
      this._playerService.deletePlayer(player_id)
      .then( (success) => this.getAllPlayers())
      .catch( (err) => console.log(err))
  }

}
