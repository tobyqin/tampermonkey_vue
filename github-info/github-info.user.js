// ==UserScript==
// @name         Github Info
// @namespace    https://betacat.online/
// @version      0.1.1
// @description  A demo to use vuejs in tampermonkey script.
// @author       Toby Qin
// @include      *github.com*
// @exclude      *api.github*
// @supportURL   https://github.com/tobyqin/tampermonkey_vue
// @updateURL    $server/peppa.user.js
// @downloadURL  $server/peppa.user.js
// @require      https://cdn.bootcss.com/vue/2.5.16/vue.min.js
// @require      https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js
// @require      $server/app.js?$version
// @require      $server/app.css?$version
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_setClipboard
// @run-at       document-body
// @noframes
// ==/UserScript==

window.jq = $.noConflict(true);

(function () {
    'use strict';
    githubInfoApp.isReady(function (data) {
        githubInfoApp.startApp(data);
    });
})();
