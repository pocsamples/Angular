import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PlayerService } from 'src/app/services/player.service';
import { IPlayer } from 'src/app/model/player';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit, OnDestroy {
  private players: IPlayer[];
  private highlighterColor: String;
  private addPlayerFormGroup: FormGroup;
  private playerToAdd: IPlayer;
  private displayNickName: boolean;

  constructor(private playerService: PlayerService, private fb: FormBuilder, private store: Store<any>) {
    this.highlighterColor = "yellow";
    console.log(`constructor`);
  }

  ngOnInit() {
    console.log(`ngOnInit`);
    this.playerService.getPlayers().subscribe(
      c => {
        this.players = c;
      }
    );

    this.playerToAdd = { name: '', skill: '', nickName: '' };
    this.addPlayerFormGroup = this.fb.group({
      name: [this.playerToAdd.name, [Validators.required]],
      skill: [this.playerToAdd.skill, [Validators.required]],
      nickName: [this.playerToAdd.nickName, [Validators.required]],
    });

    this.store.pipe(select('players')).subscribe(
      players => {
        if (players) {
          console.log(`players from store: ${JSON.stringify(players)}`);
          this.displayNickName = players.displayNickName;
        }
      }
    );
  }

  ngOnDestroy() {
  }

  addPlayerClick(): void {
    console.log("addPlayerClick");
    console.log(`this.addPlayerFormGroup: ${JSON.stringify(this.addPlayerFormGroup.value)}`);
    console.log(`this.playerToAdd: ${JSON.stringify(this.playerToAdd)}`);
    Object.assign(this.playerToAdd, this.addPlayerFormGroup.value);
    console.log(`after Object.assign this.playerToAdd: ${JSON.stringify(this.playerToAdd)}`);
    this.players.push(this.playerToAdd);
    this.playerToAdd = { name: '', skill: '', nickName: '' };
    this.addPlayerFormGroup.reset();
  }

  checkChanged(value: boolean): void {
    this.store.dispatch({
      type: 'SHOW_CAPTAIN',
      payload: value,
    });
  }
}
