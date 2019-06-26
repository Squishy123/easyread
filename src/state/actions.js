import * as consts from './constants';
import * as store from 'store';

export function changeBG(bgColor) {
    store.set('bgColor', bgColor);
    return { type: consts.CHANGE_BG, bgColor: bgColor };
}

export function changeReaderBG(readerBgColor) {
    store.set('readerBgColor', readerBgColor);
    return { type: consts.CHANGE_READER_BG, readerBgColor: readerBgColor };
}

export function changeReaderColor(readerColor) {
    store.set('readerColor', readerColor);
    return { type: consts.CHANGE_READER_COLOR, readerColor: readerColor };
}

export function changeReaderFont(readerFont) {
    store.set('readerFont', readerFont);
    return { type: consts.CHANGE_READER_FONT, readerFont: readerFont };
}

export function changeLineHeight(lineHeight) {
    store.set('lineHeight', lineHeight);
    return { type: consts.CHANGE_LINE_HEIGHT, lineHeight: lineHeight };
}

export function changeLetterSpacing(letterSpacing) {
    store.set('letterSpacing', letterSpacing);
    return { type: consts.CHANGE_LETTER_SPACING, letterSpacing: letterSpacing };
}

export function saveTextToSpeechToken(token) {
    store.set('ttsToken', token);
    let tokenTimestamp = new Date();
    store.set('tokenTimestamp', tokenTimestamp);

    return {type: consts.SAVE_TEXT_TO_SPEECH_TOKEN, ttsToken: token, tokenTimestamp: tokenTimestamp}
}
