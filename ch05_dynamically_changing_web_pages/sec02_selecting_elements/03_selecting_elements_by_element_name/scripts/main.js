// 5.2.3 Selecting Elements by Element Name
"use strict"

function init() {
    // Accessing an Element via Element Name
    const tableCells = document.getElementsByTagName('td');
    if (tableCells.length > 0) {
        for (let i = 0; i < tableCells.length; i++) {
            const tableCell = tableCells[i];
            tableCell.style.fontFamily = 'Verdana';
            tableCell.style.fontSize = '9pt';
        }
    }
}

document.addEventListener('DOMContentLoaded', init);