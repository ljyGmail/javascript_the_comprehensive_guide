// 7.1.2 Accessing Form Elements
"use strict"

// Access to Form Elements
function init() {
    const fieldUserNameById = document.getElementById('username');
    const fieldPasswordById = document.getElementById('password');
    const fieldRememberById = document.getElementById('remember');
    const fieldSubmitById = document.getElementById('submit');
    console.log(fieldUserNameById.id); // "username"
    console.log(fieldPasswordById.id); // "password"
    console.log(fieldRememberById.id); // "remember"
    console.log(fieldSubmitById.id); // "submit"

    const form = document.getElementById('login');
    const formElements = form.elements;
    const fieldUserName = formElements[0];
    const fieldPassword = formElements[1];
    const fieldRemember = formElements[2];
    const fieldSubmit = formElements[3];
    console.log(fieldUserName.id); // "username"
    console.log(fieldPassword.id); // "password"
    console.log(fieldRemember.id); // "remember"
    console.log(fieldSubmit.id); // "submit"
}

document.addEventListener('DOMContentLoaded', init);