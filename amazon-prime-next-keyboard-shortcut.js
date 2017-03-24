// ==UserScript==
// @name         Amazon Prime Keyboard Shortcuts
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Brijesh
// @match        https://www.primevideo.com/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  // Your code here...
  window.addEventListener('keydown', function(e) {
    if (e.key === 'n') {
      e.preventDefault();
      var btn = document.querySelector('.nextEpisodeButton');
      if (btn) {
        btn.click();
      }
    }
  });
})();
