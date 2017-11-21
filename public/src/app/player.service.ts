import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs'

@Injectable()
export class PlayerService {

  constructor(private _http: Http) { }

  createPlayer(player){
      return this._http.post('/api/players', player)
      .map(Response => Response.json()).toPromise()
  }

  getAllPlayers() {
      return this._http.get('/api/players')
      .map(Response => Response.json()).toPromise()
  }

  deletePlayer(player_id) {
      return this._http.delete('/api/players/' + player_id)
      .map(Response => Response.json()).toPromise()
  }

// STATUS SERVICES
playPlayer(game_id, player_id) {
  console.log(game_id);
  return this._http.get('/api/players/play/' + game_id + '/' + player_id)
      .map(Response => Response.json()).toPromise()
}

notPlayPlayer(game_id, player_id) {
  console.log(game_id);
  return this._http.get('/api/players/out/' + game_id + '/' + player_id)
      .map(Response => Response.json()).toPromise()
}

undecidedPlayer(game_id, player_id) {
  console.log(game_id);
  return this._http.get('/api/players/undecided/' + game_id + '/' + player_id)
      .map(Response => Response.json()).toPromise()
}

}
