// Real-Life Example: Generating Values in a Pick List
"use strict"

const selectElement = document.getElementById('grade');
const options = [
    'A (90%-100%)',
    'B (80%-89%)',
    'C (70%-79%)',
    'D (60%-69%)',
    'F (0%-59%)',
];

for (let i = 0; i < options.length; i++) {
    const optionElement = document.createElement('option');
    const optionText = document.createTextNode(options[i]);
    optionElement.appendChild(optionText);
    selectElement.appendChild(optionElement);
}