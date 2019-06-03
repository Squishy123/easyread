import * as consts from './constants';

export function changeBG(bgColor) {
    return { type: consts.CHANGE_BG, bgColor: bgColor };
}

export function changeReaderBG(readerBgColor) {
    return {type: consts.CHANGE_READER_BG, readerBgColor: readerBgColor};
}

export function changeReaderColor(readerColor) {
    return {type: consts.CHANGE_READER_COLOR, readerColor: readerColor};
}

export function changeReaderFont(readerFont) {
    return {type: consts.CHANGE_READER_BG, readerFont: readerFont};
}
