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
