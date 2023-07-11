const redux = require('redux');

// state 
const initialState = {
    num: 1,
    add: 100,
}

// reducer - reducer is a function it use for update inside store value
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

// store - it is a global store this store is accessable for anywhere 
const store = redux.legacy_createStore(rootReducer);

// subscribe function it will call each and every dispatch whenever a action will perform it will call automatically 
store.subscribe(() => {
    console.log(store.getState());
})
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



