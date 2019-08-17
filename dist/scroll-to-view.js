(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('core-js/modules/es6.promise'), require('core-js/modules/es6.object.to-string')) :
    typeof define === 'function' && define.amd ? define(['core-js/modules/es6.promise', 'core-js/modules/es6.object.to-string'], factory) :
    (global = global || self, global.scrollToView = factory());
}(this, function () { 'use strict';

    /*
     * @Author: 卓文理
     * @Email: zhuowenligg@gmail.com
     * @Date: 2019-08-17 12:24:33
     */
    var fxEase = function fxEase(t) {
      return (t *= 2) < 1 ? 0.5 * t * t : 0.5 * (1 - --t * (t - 2));
    };

    var setTop = function setTop(top) {
      return window.scrollTo(0, top);
    };
    /**
     * scrollToView
     *
     * @export
     * @param {string} selector element selector
     * @param {number} [duration=300] animate time
     * @param {function} callback
     */


    function scrollToView(selector) {
      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
      var callback = arguments.length > 2 ? arguments[2] : undefined;

      if (typeof selector === 'number' || selector === 'auto') {
        callback = duration;
        duration = selector;
        selector = null;
      }

      var top = 0;
      var fxTimer = null;
      var currTop = window.scrollY;

      if (selector) {
        var elem = document.body.querySelector(selector);

        if (!elem) {
          throw new Error("Failed to execute 'querySelector' on 'Element': '".concat(selector, "' is not a valid selector."));
        }

        top = currTop + elem.getBoundingClientRect().top;
      }

      var baseOffset = 400;
      var maxDuration = 400;
      var tMark = new Date();
      var heightOffset = top - currTop;

      if (duration === 'auto') {
        duration = baseOffset * Math.abs(heightOffset / baseOffset);
        duration = Math.max(0, Math.min(maxDuration, duration));
      } else if (typeof duration !== 'number') {
        duration = 0;
      }

      return new Promise(function (resolve) {
        function fx() {
          var elapsed = new Date() - tMark;

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

    return scrollToView;

}));
//# sourceMappingURL=scroll-to-view.js.map
