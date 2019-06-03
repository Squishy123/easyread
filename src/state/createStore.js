import { createStore as reduxCreateStore } from 'redux';

import * as consts from './constants';

//initial state
const initialState = {
    bgColor: 'white',
    readerBgColor: 'yellow',
    readerColor: 'black',
    readerFont: 'arial'
};

function alterState(currentState, alteredState) {
    return Object.assign({}, currentState, alteredState);
}

const reducer = (state, action) => {
    switch (action.type) {
        case consts.CHANGE_BG:
            return alterState(state, { bgColor: action.bgColor });
        case consts.CHANGE_READER_BG:
            return alterState(state, {readerBgColor: action.readerBgColor});
        case consts.CHANGE_READER_COLOR:
            return alterState(state, {readerColor: action.readerColor});
        case consts.CHANGE_READER_FONT:
            return alterState(state, {readerFont: action.readerFont});
        default:
            return state;
    }
};

const createStore = () => reduxCreateStore(reducer, initialState);

export default createStore;
