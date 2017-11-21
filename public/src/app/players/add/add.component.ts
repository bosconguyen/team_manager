import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';
import { PlayerService } from './../../player.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  player : object = {name: '', position: ''}

  players: Array<any>;
  errors: Array<any>;

  constructor(private _playerService : PlayerService, private _router: Router) { }

  ngOnInit() {
  }

  createPlayer(){
      this._playerService.createPlayer(this.player)
        .then( (success) => {
            console.log('success!')
            this.player = {
                name: '',
                position: ''
            }
            console.log(this.player);
            this._router.navigate(['players','list'])
        })
        .catch( (err) => {
            console.log('error');
        })
  }

}
