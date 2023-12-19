// 6.3.5 General Events of the User Interface
"use strict"

// Display an Element Depending on the Scroll Position Using an Event Listener for the Scroll Event
function init() {
    let scrollPosition = window.scrollY;
    const nameElement = document.getElementById('name');

    function handleScrollEvent(e) {
        console.log(scrollPosition);
        scrollPosition = window.scrollY;
        if (scrollPosition > 10) {
            nameElement.classList.remove('hide');
            nameElement.classList.add('show');
        } else {
            nameElement.classList.remove('show');
            nameElement.classList.add('hide');
        }
    }

    window.addEventListener('scroll', handleScrollEvent);
}

document.addEventListener('DOMContentLoaded', init);