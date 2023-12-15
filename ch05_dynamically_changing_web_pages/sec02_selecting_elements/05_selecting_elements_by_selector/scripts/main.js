// 5.2.5 Selecting Elements by Selector
"use strict"

function init() {
    // Accessing an Element by CSS Selector
    // const tableCell = document.querySelector('#main table td:nth-child(2)');
    // tableCell.style.border='thick solid red';

    // Accessing Multiple Elements by CSS Selector
    const tableCells = document.querySelectorAll('#main table td:nth-child(2)');
    if (tableCells.length > 0) {
        for (let i = 0; i < tableCells.length; i++) {
            const tableCell = tableCells[i];
            tableCell.style.border = 'thick solid red';
        }
    }
}

document.addEventListener('DOMContentLoaded', init);