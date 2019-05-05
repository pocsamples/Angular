import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { IPlayer } from 'src/app/model/player';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {

  private players: IPlayer[];
  private highlighterColor: String;

  constructor(private playerService: PlayerService) {
    this.highlighterColor = "yellow";
  }

  ngOnInit() {
    this.playerService.getPlayers().subscribe(
      c => {
        this.players = c;
      }
    );
  }

}
