import * as consts from './constants';

export function changeBG(bgColor) {
    console.log(bgColor);
    return { type: consts.CHANGE_BG, bgColor: bgColor };
}
