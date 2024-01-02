// 7.2 Programmatically Submitting and Resetting Forms
"use strict"

function init() {
    // Submitting a Form Programmatically
    let loginForm = document.getElementById('login');
    let loginButton = document.getElementById('submit');
    loginButton.addEventListener('click', (e) => {
        loginForm.submit();
    });

    // Resetting a Form Programmatically
    let resetButton = document.getElementById('reset');
    resetButton.addEventListener('click', (e) => {
        loginForm.reset();
    });
}

document.addEventListener('DOMContentLoaded', init);