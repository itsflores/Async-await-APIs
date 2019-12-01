"use strict";
exports.__esModule = true;
var fetch = require("node-fetch");
var GOOGLE_FONTS_API_URL = 'AIzaSyALIJ899r5PF9OqcOJIps9cR1UaD2BzFiA';
var GOOGLE_URL = 'https://fonts.googleapis.com';
// HAOHAO: im back
var fonts = [];
var apiCall = fetch(GOOGLE_URL + "/css?family=Arial").then(function (response) {
    //? json responses reponse.json()
    //? text/XML response response.text()
    //! Resolving the promise
    response.text().then(function (result) {
        // console.log(result);
        console.log("we are being called");
        fonts.push(result);
    });
})["catch"](function (err) {
    //! Promise gets rejected
    console.log(err);
});
//? Returns a promise
// console.log(apiCall);
console.log(fonts);
