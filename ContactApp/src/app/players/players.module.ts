import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'

import { PlayersRoutingModule } from './players-routing.module';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerService } from '../services/player.service';
import { HighlighterDirective } from './player-list/highlighter.directive';
import { StoreModule } from '@ngrx/store';
import { reducer } from './player.reducer';

@NgModule({
  declarations: [
    PlayerListComponent,
    HighlighterDirective
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forFeature('players', reducer),

    PlayersRoutingModule
  ],
  providers: [
    PlayerService
  ]
})
export class PlayersModule { }
