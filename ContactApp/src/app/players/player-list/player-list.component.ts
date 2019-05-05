import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { takeWhile } from 'rxjs/operators';

import { PlayerService } from 'src/app/services/player.service';
import { IPlayer } from 'src/app/model/player';
import { Store, select } from '@ngrx/store';
import * as fromPlayer from '../player.reducer';
import * as playerActions from '../player.action';

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
  private componentActive: boolean;

  constructor(private playerService: PlayerService, private fb: FormBuilder, private store: Store<fromPlayer.State>) {
    console.log(`constructor`);
    this.componentActive = true;
    this.highlighterColor = "yellow";
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

    this.store.pipe(
      select(fromPlayer.getDisplayNickName),
      takeWhile(() => this.componentActive))
      .subscribe(
        displayNickName => {
          console.log(`players from store: ${JSON.stringify(displayNickName)}`);
          this.displayNickName = displayNickName;
        }
      );
  }

  ngOnDestroy() {
    this.componentActive = false;
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
    this.store.dispatch(new playerActions.ToggleNickNameAction(value));
  }
}
