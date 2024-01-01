// 7.1.6 Reading the Value of Selection Lists
"use strict"

// Access to the Selected Value of a Selection List
function init() {
    const messageContainer = document.getElementById('selection');
    const order = document.getElementById('order');
    order.addEventListener('change', updateOrder);

    function updateOrder(event) {
        const value = this.value;
        const index = this.selectedIndex;
        const option = this.item(index);
        const text = this.item(index).text;
        const message = text + ' (' + value + ')';
        messageContainer.innerText = message;
    }
}

document.addEventListener('DOMContentLoaded', init);