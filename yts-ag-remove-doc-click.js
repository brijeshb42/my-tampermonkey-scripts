// ==UserScript==
// @name         YTS remove doc click
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Removes spam document click
// @author       Brijesh
// @match        https://yts.ag/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var count = 0;
    window.addEventListener('load', function() {
        var interval = setInterval(function() {
            window.document.onclick = function(){};
            count++;
            if (count >= 5) {
                clearInterval(interval);
            }
        }, 1000);
    });
})();
