// 9.3.1 The Structure of JSON
"use strict"

function init() {
    // JavaScript Directly Supports the JSON Format
    const object = {
        "artists": [
            {
                "name": "Kyuss",
                "albums": []
            },
            {
                "name": "Ben Harper",
                "albums": []
            }
        ]
    };

    console.log(object.artists); // [Object, Object]
    console.log(object.artists.length); // 2
    console.log(object.artists[0].name); // "Kyuss"
    console.log(object.artists[1].name); // "Ben Harper"
}

document.addEventListener('DOMContentLoaded', init);