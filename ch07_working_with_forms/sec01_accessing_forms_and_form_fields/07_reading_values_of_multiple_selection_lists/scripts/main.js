// 7.1.7 Reading the Values of Multiple Selection Lists
"use strict"

// Access to All Selected Values of a Selection List
function init() {
    const messageContainer = document.getElementById('selection');
    const order = document.getElementById('order');
    order.addEventListener('change', updateOrder);

    function updateOrder(event) {
        while (messageContainer.firstChild) { // delete all messages
            messageContainer.removeChild(
                messageContainer.firstChild
            );
        }

        const options = this.selectedOptions; // selected options
        for (let i = 0; i < options.length; i++) { // for each option ...
            const message = options[i].text + // ... generate ...
                '(' + options[i].value + ')'; // ... message ...
            const div = document.createElement('div'); // ... and add it ...
            const optionText = document.createTextNode(message);
            div.appendChild(optionText);
            messageContainer.appendChild(div); // ... to container
        }
    }
}

document.addEventListener('DOMContentLoaded', init);