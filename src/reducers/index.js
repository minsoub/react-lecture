import { INCREMENT, DECREMENT, SET_DIFF } from '../actions/index';
import { combineReducers } from 'redux';

const counterInitialState = {
    value: 0,
    diff: 1
};

const counter = (state = counterInitialState, action) => {
    switch(action.type) {
        case INCREMENT:
            return Object.assign({}, state, {
                value: state.value + state.diff
            });
        case DECREMENT:
            return Object.assign({}, state, {
                value: state.value - state.diff
            });
        case SET_DIFF:
            return Object.assign({}, state, {
                diff: action.diff
            });
        default:
            return state;
    }
};

const extra = (state = { value: 'this_is_extra_reducer'}, action) =>{
    switch(action.type) {
        default:
            return state;
    }
}

// combineReducer를 사용해서 reducer 함수를 Reducer 객체에 결합
const counterApp = combineReducers({
    counter, 
    extra
});

export default counterApp;