import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'

import { PlayersRoutingModule } from './players-routing.module';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerService } from '../services/player.service';
import { HighlighterDirective } from './player-list/highlighter.directive';

@NgModule({
  declarations: [
    PlayerListComponent,
    HighlighterDirective
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    
    PlayersRoutingModule
  ],
  providers: [
    PlayerService
  ]
})
export class PlayersModule { }
