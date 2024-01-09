// 8.3.3 Loading a New Web Page
"use strict"

function init() {
    // Loading a Web Page via the assign() Method
    const assignLink = document.getElementById('assign');
    assignLink.addEventListener('click', (e) => {
        const url = document.getElementById('url').value;
        window.location.assign(url);
    });

    // Loading a Web Page Using the replace() Method
    const replaceLink = document.getElementById('replace');
    replaceLink.addEventListener('click', (e) => {
        const url = document.getElementById('url').value;
        // this method does not result in a new entry in the browser history:
        window.location.replace(url);
    });

    // Loading a Web Page Using the href Property
    const hrefLink = document.getElementById('href');
    hrefLink.addEventListener('click', (e) => {
        const url = document.getElementById('url').value;
        window.location.href = url;
    });

    const reloadLink = document.getElementById('reload');
    reloadLink.addEventListener('click', (e) => {
        window.location.reload(true);
    });
}

document.addEventListener('DOMContentLoaded', init);