// 5.2.2 Selecting Elements by Class
"use strict"

function init() {
    // Accessing an Element by Class Name
    const tableRowsEven =
        document.getElementsByClassName('even'); // Select all even table rows

    // Iteration over a List of Notes Using the Array Syntax
    if (tableRowsEven.length > 0) { // If at lease one element is found
        for (let i = 0; i < tableRowsEven.length; i++) { // Iterate all elements
            // const tableRow = tableRowsEven[i]; // Assignment element to a variable
            // tableRow.style.backgroundColor = '#CCCCCC'; // Set new background color

            // Iteration over a List of Nodes Using the item() Method
            // const tableRow = tableRowsEven.item(i);
            // tableRow.style.backgroundColor = '#CCCCCC';

            // @@ Method Borrowing

            // Iteration over a Node List via Method Borrowing
            Array.prototype.forEach.call(tableRowsEven, (tableRow) => {
                tableRow.style.backgroundColor = '#CCCCCC';
            })
        }
    }
}

document.addEventListener('DOMContentLoaded', init);