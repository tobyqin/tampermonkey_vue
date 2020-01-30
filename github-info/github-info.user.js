// ==UserScript==
// @name         Github Info
// @namespace    https://betacat.online/
// @version      0.2.1
// @description  A demo to use vuejs in tampermonkey script.
// @author       Toby Qin
// @include      *github.com*
// @exclude      *api.github*
// @supportURL   https://github.com/tobyqin/tampermonkey_vue
// @updateURL    https://github.com/tobyqin/tampermonkey_vue/raw/master/github-info/github-info.user.js
// @downloadURL  https://github.com/tobyqin/tampermonkey_vue/raw/master/github-info/github-info.user.js
// @require      https://vuejs.org/js/vue.min.js
// @require      https://code.jquery.com/jquery-3.4.1.min.js
// @require      https://github.com/tobyqin/tampermonkey_vue/raw/master/github-info/app.js
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_setClipboard
// @run-at       document-body
// @noframes
// ==/UserScript==

window.jq = $.noConflict(true);

(function () {
    'use strict';
    githubInfo.isReady(function () {
        githubInfo.addStyle();
        githubInfo.startApp();
    });
})();
