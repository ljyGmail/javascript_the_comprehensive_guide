// 6.2.7 Defining Event Handlers and Event Listeners via a Helper Functions
"use strict"

function showMessage(message) {
    const output = document.getElementById('output');
    output.textContent = message;
}

function checkAgeNotNegative(age) {
    console.log('checkAgeNotNegative invoked!');
    if (age < 0) {
        showMessage('Number can not be negative.');
    }
}

function checkAgeIsNumber(age) {
    console.log('checkAgeIsNumber invoked!');
    if (!(!isNaN(parseFloat(age)) && isFinite(age))) {
        showMessage('Number must be a number.');
    }
}

function clearMessage() {
    console.log('clearMessage invoked!');
    showMessage('');
}

function getAgeValue() {
    const element = document.getElementById('age');
    const age = element.value;
    return age;
}

// Helper Function for Defining Event Listeners or Event Handlers
function addEvent(element, eventType, eventListener) {
    if (window.addEventListener) {
        element.addEventListener(eventType, eventListener, false);
    } else if (window.attachEvent) {
        element.attachEvent('on' + eventType, eventListener);
    } else {
        element['on' + eventType] = eventListener;
    }
}

// Usage of the Helper Function
function init() {
    const element = document.getElementById('age');
    addEvent(
        element,
        'blur',
        clearMessage
    );
    addEvent(
        element,
        'blur',
        function () {
            const age = getAgeValue();
            checkAgeNotNegative(age);
        }
    );
    addEvent(
        element,
        'blur',
        function () {
            const age = getAgeValue();
            checkAgeIsNumber(age);
        }
    );
}

document.addEventListener('DOMContentLoaded', init);