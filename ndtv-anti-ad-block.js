// ==UserScript==
// @name         NDTV anti ad-block.
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Brijesh
// @match        http://*.ndtv.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var welcome = document.querySelector('.ndtv-modal');
    if (welcome) {
        document.body.removeChild(welcome);
    }
    document.body.style.height = '';
    document.body.style.overflow = '';
})();
