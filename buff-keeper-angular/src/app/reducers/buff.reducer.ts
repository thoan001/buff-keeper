import * as actions from '../actions/buff.actions';
import { Buff } from '../status/buff';

export interface State {
    Buffs: Buff[];
    Round: number;
}

export const initialState: State = {
    Buffs: [],
    Round: 1
};

export function reducer(state = initialState, action: actions.Actions): State {
    switch (action.type) {
        case actions.ActionTypes.AddBuff:
            return Object.assign({}, state, {
                Buffs: [
                    ...state.Buffs,
                    action.payload
                ]
            });
        case actions.ActionTypes.IncrementRound:
            const buffDecreasing = state.Buffs;
            buffDecreasing.forEach((buff) => {
                if (buff.active === true) {
                    if (buff.remaining > 1) {
                        buff.remaining = buff.remaining - 1;
                    } else if (buff.remaining === 1) {
                        buff.remaining = buff.remaining - 1;
                        buff.active = false;
                    }
                }
            });
            return Object.assign({}, state, {
                Buffs: buffDecreasing,
                Round: state.Round + 1
            });
        case actions.ActionTypes.DecrementRound:
            const buffIncreasing = state.Buffs;
            buffIncreasing.forEach((buff) => {
                if (buff.active === true) {
                    if (buff.duration > buff.remaining) {
                        buff.remaining = buff.remaining + 1;
                    } else if (buff.duration <= buff.remaining) {
                        buff.active = false;
                    }
                }
            });
            return Object.assign({}, state, {
                Buffs: buffIncreasing,
                Round: state.Round - 1
            });
        default:
            return state;
    }
}
