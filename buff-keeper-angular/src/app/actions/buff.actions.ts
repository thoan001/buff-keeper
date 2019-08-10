import { Action } from '@ngrx/store';
import { Buff } from '../status/buff';

export enum ActionTypes {
    AddBuff = 'ADD_BUFF',
    IncrementRound = 'INCREMENT_ROUND',
    DecrementRound = 'DECREMENT_ROUND',
    ToggleEffect = 'TOGGLE_EFFECT',
    RemoveBuff = 'REMOVE_BUFF'
}

export class AddBuff implements Action {
    readonly type = ActionTypes.AddBuff;
    constructor(public payload: Buff) {}
}

export class IncrementRound implements Action {
    readonly type = ActionTypes.IncrementRound;
}

export class DecrementRound implements Action {
    readonly type = ActionTypes.DecrementRound;
}

export class ToggleEffect implements Action {
    readonly type = ActionTypes.ToggleEffect;
    constructor(public payload: {id: number}) {}
}

export class RemoveBuff implements Action {
    readonly type = ActionTypes.RemoveBuff;
    constructor(public payload: {id: number}) {}
}

export type Actions = AddBuff | IncrementRound | DecrementRound | ToggleEffect | RemoveBuff;
