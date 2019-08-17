/*
 * @Author: 卓文理
 * @Email: zhuowenligg@gmail.com
 * @Date: 2019-08-17 12:24:33
 */

const fxEase = t => (((t *= 2) < 1) ? (0.5 * t * t) : (0.5 * (1 - (--t) * (t - 2))));
const setTop = top => window.scrollTo(0, top);

/**
 * scrollToView
 *
 * @export
 * @param {string} selector element selector
 * @param {number} [duration=300] animate time
 * @param {function} callback
 */
export default function scrollToView(selector, duration = 300, callback) {
    if (typeof selector === 'number' || selector === 'auto') {
        callback = duration;
        duration = selector;
        selector = null;
    }

    let top = 0;
    let fxTimer = null;
    const currTop = window.scrollY;

    if (selector) {
        const elem = document.body.querySelector(selector);

        if (!elem) {
            throw new Error(`Failed to execute 'querySelector' on 'Element': '${selector}' is not a valid selector.`)
        }

        top = currTop + elem.getBoundingClientRect().top;
    }

    const baseOffset = 400;
    const maxDuration = 400;
    const tMark = new Date();
    const heightOffset = top - currTop;

    if (duration === 'auto') {
        duration = baseOffset * Math.abs(heightOffset / baseOffset);
        duration = Math.max(0, Math.min(maxDuration, duration));
    } else if (typeof duration !== 'number') {
        duration = 0;
    }

    return new Promise(resolve => {
        function fx() {
            const elapsed = new Date() - tMark;

            if (elapsed >= duration) {
                setTop(top);

                if (callback) {
                    return callback();
                }

                return resolve();
            }

            setTop(currTop + heightOffset * fxEase(elapsed / duration));
            fxTimer = setTimeout(fx, 16);
        }

        clearTimeout(fxTimer);

        fxTimer = setTimeout(fx, 16);
    });
}