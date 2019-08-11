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
                } else if ((buff.active === false) && ((buff.roundStarted - 1) === state.Round)) {
                    buff.active = true;
                }
            });
            return Object.assign({}, state, {
                Buffs: buffDecreasing,
                Round: state.Round + 1
            });
        case actions.ActionTypes.DecrementRound:
            if (state.Round > 1) {
                const buffIncreasing = state.Buffs;
                buffIncreasing.forEach((buff) => {
                    if (buff.active === true) {
                        if ((buff.duration > buff.remaining) && ((buff.roundStarted) < state.Round)) {
                            buff.remaining = buff.remaining + 1;
                        } else if ((buff.roundStarted) >= state.Round) {
                            buff.active = false;
                        }
                    } else if ((buff.remaining === 0) && (state.Round === (buff.roundStarted + buff.duration))) {
                        buff.active = true;
                        buff.remaining = buff.remaining + 1;
                    }
                });
                return Object.assign({}, state, {
                    Buffs: buffIncreasing,
                    Round: state.Round - 1
                });
            } else {
                return state;
            }
        case actions.ActionTypes.ToggleEffect:
            const toggleArray = state.Buffs;
            if (toggleArray[action.payload.id]) {
                toggleArray[action.payload.id] = Object.assign({},
                    toggleArray[action.payload.id],
                    {active: !toggleArray[action.payload.id].active});
            }
            return Object.assign({}, state, {
                Buffs: toggleArray
            });
        case actions.ActionTypes.RemoveBuff:
            const removeArray = state.Buffs;
            if (removeArray[action.payload.id]) {
                removeArray.splice(action.payload.id, 1);
            }
            return Object.assign({}, state, {
                Buffs: removeArray
            });
        default:
            return state;
    }
}
