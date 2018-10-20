import { INCREMENT, DECREMENT, INPUT_CHANGE } from "../actions/Actions";

const initialState = {
    count: 0,
    stepValue: 1
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + state.stepValue
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - state.stepValue
            };
        case INPUT_CHANGE:
            return {
                ...state,
                stepValue: action.stepValue
            }
        default:
            return state;
    }
}

export default reducer;