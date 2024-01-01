// 7.1.7 Reading the Values of Multiple Selection Lists
"use strict"

// Access to All Selected Values of a Selection List
function init() {
    const messageContainer = document.getElementById('selection');
    const order = document.getElementById('order');
    order.addEventListener('change', updateOrder);

    function updateOrder(event) {
        while (messageContainer.firstChild) {
            messageContainer.removeChild(
                messageContainer.firstChild
            );
        }

        const options = this.selectedOptions;
        for (let i = 0; i < options.length; i++) {
            const message = options[i].text +
                '(' + options[i].value + ')';
            const div = document.createElement('div');
            const optionText = document.createTextNode(message);
            div.appendChild(optionText);
            messageContainer.appendChild(div);
        }
    }
}

document.addEventListener('DOMContentLoaded', init);