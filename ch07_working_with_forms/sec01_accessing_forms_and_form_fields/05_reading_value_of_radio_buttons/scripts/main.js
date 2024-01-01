// 7.1.5 Reading the Value of Radio Buttons
"use strict"

// Access to a Checkbox
function init() {
    const messageContainer = document.getElementById('selection'); // Container for messages
    const orderForm = document.getElementById('orderform'); // Form
    const radioButtons = orderForm.order;
    for (let i = 0; i < radioButtons.length; i++) {
        radioButtons[i].addEventListener('change', (e) => {
            console.log(e.target.value); // e.g. "P002"
            messageContainer.innerText = e.target.value; // Display message
        });
    }
}

document.addEventListener('DOMContentLoaded', init);