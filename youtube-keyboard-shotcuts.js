// ==UserScript==
// @name         Youtube Keyboard Shortcuts
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Brijesh
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    window.addEventListener('keydown', function(e) {
        if (window.location.href.indexOf('/watch') < 0) {
            return;
        }
        var btn;
        if (e.metaKey && (e.key === 'f' || e.key === 'k')) {
            btn = document.querySelector('.ytp-fullscreen-button.ytp-button');
        } else if (e.metaKey && e.key === 'p') {
            btn = document.querySelector('.ytp-play-button.ytp-button');
        }
        if (!btn) {
            return;
        }
        e.preventDefault();
        btn.click();
    });
})();
