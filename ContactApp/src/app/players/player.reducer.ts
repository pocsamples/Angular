import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from '../app.state';
import { IPlayer } from '../model/player';
import { PlayerActions, PlayerActionTypes } from './player.action';

// State
export interface State extends fromRoot.State {
    players: PlayerState
}

export interface PlayerState {
    displayNickName: boolean,
    players: IPlayer[],
}

const initialPlayerState: PlayerState = {
    displayNickName: true,
    players: null,
};

// Selector
const getPlayerFeatureState = createFeatureSelector<PlayerState>('players');

export const getDisplayNickName = createSelector(
    getPlayerFeatureState,
    state => state.displayNickName,
);

// Reducer
export function reducer(state = initialPlayerState, action: PlayerActions): PlayerState {
    switch (action.type) {
        case PlayerActionTypes.ToggleNickName:
            return {
                ...state,
                displayNickName: action.payload
            };
        default:
            return state;
    }
}