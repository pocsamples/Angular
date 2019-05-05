import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  private addPlayerFormGroup: FormGroup;
  private playerToAdd: IPlayer;

  constructor(private playerService: PlayerService, private fb: FormBuilder) {
    this.highlighterColor = "yellow";
  }

  ngOnInit() {
    this.playerService.getPlayers().subscribe(
      c => {
        this.players = c;
      }
    );

    this.playerToAdd = { name: '', skill: '' };
    this.addPlayerFormGroup = this.fb.group({
      name: [this.playerToAdd.name, [Validators.required]],
      skill: [this.playerToAdd.skill, [Validators.required]],
    });
  }

  addPlayerClick(): void {
    console.log("addPlayerClick");
    console.log(`this.addPlayerFormGroup: ${JSON.stringify(this.addPlayerFormGroup.value)}`);
    console.log(`this.playerToAdd: ${JSON.stringify(this.playerToAdd)}`);
    Object.assign(this.playerToAdd, this.addPlayerFormGroup.value);
    console.log(`after Object.assign this.playerToAdd: ${JSON.stringify(this.playerToAdd)}`);
    this.players.push(this.playerToAdd);
    this.playerToAdd = { name: '', skill: '' };
    this.addPlayerFormGroup.reset();
  }
}
