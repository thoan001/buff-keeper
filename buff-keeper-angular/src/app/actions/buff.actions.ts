import { Action } from '@ngrx/store';
import { Buff } from '../status/buff';

export enum ActionTypes {
    AddBuff = 'ADD_BUFF',
    IncrementRound = 'INCREMENT_ROUND',
    DecrementRound = 'DECREMENT_ROUND',
    ToggleEffect = 'TOGGLE_EFFECT'
}

export class AddBuff implements Action {
    type: ActionTypes.AddBuff;
    constructor(public payload: Buff) {}
}

export class IncrementRound implements Action {
    type: ActionTypes.IncrementRound;
    constructor() {}
}

export class DecrementRound implements Action {
    type: ActionTypes.DecrementRound;
    constructor() {}
}

export class ToggleEffect implements Action {
    type: ActionTypes.ToggleEffect;
    constructor(public payload: {id: number}) {}
}

export type Actions = AddBuff | IncrementRound | DecrementRound | ToggleEffect;
