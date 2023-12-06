// 3.8.2 A Simple Code Example
"use strict"

function findDuplicates() {
    const numbers = [2, 4, 5, 2, 5, 8, 5, 4711];
    for (let i = 0; i < numbers.length; i++) {
        const numberAtI = numbers[i];
        // for (let j = 0;  j < numbers.length; j++) { // modified as following after debugging
        for (let j = i + 1; j < numbers.length; j++) {
            const numberAtJ = numbers[j];
            if (numberAtI === numberAtJ) {
                console.log(`Found duplicate: ${numberAtI}`);
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', findDuplicates);