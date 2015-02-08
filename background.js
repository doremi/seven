/*global chrome*/

chrome.browserAction.onClicked.addListener(function (tab) {
    "use strict";
    chrome.tabs.executeScript(null, {file: "jquery-1.11.2.min.js"}, function (x) {
        chrome.tabs.executeScript(null, {file: "resize.js"});
    });
});
