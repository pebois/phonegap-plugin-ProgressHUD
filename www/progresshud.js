//  progresshud.js
//
//  Created by Pierre-Emmanuel Bois on 23/09/13.
//
//  Copyright 2012-2013 Pierre-Emmanuel Bois. All rights reserved.
//  MIT Licensed

var ProgressHUD = {
    show: function ( message ) {
    	var _message = ( message || 'Loading/Chargement' );
        cordova.exec(function () { }, function () { }, "ProgressHUD", "show", [ _message ]);
    },
    hide: function () {
        cordova.exec(function () { }, function () { }, "ProgressHUD", "hide", []);
    }
};

module.exports = ProgressHUD;
