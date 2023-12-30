// 7.1.4 Reading the Value of Checkboxes
"use strict"

function init() {
    // Access to a Checkbox
    const checkbox = document.getElementById('remember');
    checkbox.addEventListener('change', (e) => {
        console.log(checkbox.value); // "on"
        console.log(checkbox.checked); // true of false
        console.log(this.value); // undefined
        console.log(this.checked); // undefined
    });

    checkbox.addEventListener('change', function (e) {
        console.log(checkbox.value); // "on"
        console.log(checkbox.checked); // true or false
        console.log(this.value); // "on"
        console.log(this.checked); // true of false
    });
}

document.addEventListener('DOMContentLoaded', init);