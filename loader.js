// ==UserScript==
// @name           RoAExt
// @namespace      org.craiel.avaburextended
// @author         Craiel
// @homepage       https://github.com/Craiel/RoAExtRelease
// @description    Extension for Avabur
// @include        https://avabur.com/game.php
// @include        http://avabur.com/game.php
// @include        https://www.avabur.com/game.php
// @include        http://www.avabur.com/game.php
// @version        0.9
// @icon           https://cdn.rawgit.com/Craiel/RoAExtRelease/master/img/logo-16.png
// @icon64         https://cdn.rawgit.com/Craiel/RoAExtRelease/master/img/logo-64.png
// @run-at         document-end
// @grant          GM_getValue
// @grant          GM_setValue
// @grant          GM_deleteValue
// @grant          GM_notification
// @grant          GM_listValues
// @grant          GM_xmlhttpRequest
// @connect        self
// @require        https://cdnjs.cloudflare.com/ajax/libs/buzz/1.1.10/buzz.min.js
// @require        https://cdnjs.cloudflare.com/ajax/libs/spectrum/1.8.0/spectrum.min.js
// @require        https://cdnjs.cloudflare.com/ajax/libs/canvasjs/1.7.0/jquery.canvasjs.min.js
// @require        https://cdnjs.cloudflare.com/ajax/libs/jquery-te/1.4.0/jquery-te.min.js


// @noframes
// ==/UserScript==

$.ajax({
    url: 'https://rawgit.com/Craiel/RoAExtRelease/master/RoAExt.js',
    dataType: 'text',
    type: 'GET',
    async: true,
    statusCode: {
        404: function (response) {
            console.error("Loading failed with 404");
        },
        200: function (response) {
            eval(response);
        }
    },
    error: function (jqXHR, status, errorThrown) {
        console.error("Loading failed: " + errorThrown);
    }
});