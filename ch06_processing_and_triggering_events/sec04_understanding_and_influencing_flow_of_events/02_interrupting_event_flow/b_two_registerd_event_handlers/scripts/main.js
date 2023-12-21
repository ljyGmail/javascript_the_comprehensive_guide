// 6.4.2 Interrupting the Event FLow - two registered event handlers
"use strict"

// In the Example, Two Event Handlers Are Registered First
function handleClickEvent1(ev) {
    const e = ev || window.event;
    this.classList.toggle('selected');
    e.stopPropagation();
}

function handleClickEvent2(ev) {
    const e = ev || window.event;
    this.classList.toggle('selected-border');
    e.stopPropagation();
}


function init() {
    const elements = document.querySelectorAll('.level1, ' + '.level2, ' + '.level3');
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', handleClickEvent1);
        elements[i].addEventListener('click', handleClickEvent2);
    }
}

document.addEventListener('DOMContentLoaded', init);