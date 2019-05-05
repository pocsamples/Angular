import { Action } from '@ngrx/store';

export enum PlayerActionTypes {
    ToggleNickName = 'Toggle Nick Name'
}

export class ToggleNickNameAction implements Action {
    public readonly type = PlayerActionTypes.ToggleNickName;

    constructor(public payload: boolean) { }
}

export type PlayerActions = ToggleNickNameAction;