import { createStore as reduxCreateStore } from 'redux';

import * as consts from './constants';

import * as store from 'store';
//initial state
const initialState = {
    bgColor: store.get('bgColor') || 'white',
    readerBgColor: store.get('readerBgColor') || 'yellow',
    readerColor: store.get('readerColor') || 'black',
    readerFont: store.get('readerFont') || 'arial',
    readerLineHeight: store.get('lineHeight') || 1,
    readerLetterSpacing: store.get('letterSpacing') || 1,
    ttsToken: store.get('ttsToken'),
    tokenTimestamp: store.get('tokenTimestamp'),
};

function alterState(currentState, alteredState) {
    return Object.assign({}, currentState, alteredState);
}

const reducer = (state, action) => {
    switch (action.type) {
        case consts.CHANGE_BG:
            return alterState(state, { bgColor: action.bgColor });
        case consts.CHANGE_READER_BG:
            return alterState(state, { readerBgColor: action.readerBgColor });
        case consts.CHANGE_READER_COLOR:
            return alterState(state, { readerColor: action.readerColor });
        case consts.CHANGE_READER_FONT:
            return alterState(state, { readerFont: action.readerFont });
        case consts.CHANGE_LINE_HEIGHT:
            return alterState(state, { readerLineHeight: action.lineHeight });
        case consts.CHANGE_LETTER_SPACING:
            return alterState(state, {
                readerLetterSpacing: action.letterSpacing,
            });
        case consts.SAVE_TEXT_TO_SPEECH_TOKEN:
            return alterState(state, {
                ttsToken: action.ttsToken,
                tokenTimestamp: action.tokenTimestamp,
            });
        default:
            return state;
    }
};

const createStore = () => reduxCreateStore(reducer, initialState);

export default createStore;
