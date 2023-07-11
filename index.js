const redux = require('redux');
const initialState = {
    num: 1,
    add: 100,
}

const rootReducer = (state = initialState, action) => {
    if (action.type == 'INC_NUM') {
        return {
            ...state,
            num: state.num + action.value
        }
    }
    if (action.type == 'ADD_NUM') {
        return {
            ...state,
            add: state.add + action.value
        }
    }
    if (action.type == 'DEC_NUM') {
        return {
            ...state,
            num: state.num - action.value
        }
    }
    return state
}

const store = redux.legacy_createStore(rootReducer);
store.dispatch({
    type: 'INC_NUM',
    value: 2,
});
store.dispatch({
    type: 'ADD_NUM',
    value: 50,
})
store.dispatch({
    type: 'DEC_NUM',
    value: 20,
})

console.log(store.getState());

