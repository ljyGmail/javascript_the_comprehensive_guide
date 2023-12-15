// 5.2.1 Selecting Elements by ID
"use strict"

function init() {
    // Accessing an Element via the ID
    const mainElement = document.getElementById('main');
    // mainElement.className = 'border';

    // @@ Tip

    // If There Is No Element with the main ID, the Variable is Not Accessed
    // if (mainElement !== null) {
    //     mainElement.className = 'border';
    // }

    // You Can Use the && Operator to Shorten This Check
    mainElement && (mainElement.className = 'border');

    // You Can Use the ? Operator the Check whether a Property is Defined
    // mainElement?.className = 'border'; (not working ...)
}

document.addEventListener('DOMContentLoaded', init);