// 7.1.3 Reading the Value of Text Fields and Password Fields
"use strict"

function init() {
    // Access to the Values of Text and Password Fields
    const inputUsername = document.getElementById('username');
    const inputPassword = document.getElementById('password');
    inputUsername.addEventListener('change', function (e) {
        console.log(this.value); // entered value
    });
    inputPassword.addEventListener('change', function (e) {
        console.log(this.value); // entered value
    });

    // With Event Listeners Defined via an Arrow Function, this Does not  Refer to the Respective Element
    inputUsername.addEventListener('change', (e) => {
        console.log(inputUsername.value); // entered value
        console.log(this.value); // undefined
    });
    inputPassword.addEventListener('change', (e) => {
        console.log(inputPassword.value); // entered value
        console.log(this.value); // undefined
    });

    // Access via the Event Object
    inputUsername.addEventListener('change', (e) => {
        console.log(e.target.value); // entered value
    });
    inputPassword.addEventListener('change', (e) => {
        console.log(e.target.value); // entered value
    });
}

document.addEventListener('DOMContentLoaded', init);