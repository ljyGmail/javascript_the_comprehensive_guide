// 8.4.3 Adding Entries to the Browsing History
"use strict"

// Adding Entries to the Browsing History
function init() {
    // Container element for the content
    const contentElement = document.getElementById('content');
    // Sample content, normally loaded via Ajax
    const contents = {
        home: {
            content: 'Home'
        },
        services: {
            content: 'Services'
        },
        skills: {
            content: 'Skills'
        },
        aboutus: {
            content: 'About Us'
        },
        contact: {
            content: 'Contact'
        }
    };

    function updateContent(content) {
        contentElement.textContent = content;
    }

    // Event listener for the links
    function handleClick(event) {
        const pageName = event.target.getAttribute('href').split('/').pop();
        const content = contents[pageName];
        updateContent(content.content);
        history.pushState(
            content, // State object
            event.target.textContent, // Title
            event.target.href // URL
        );
        event.preventDefault();
    }

    // Register the event listeners
    const linkElements = document.getElementsByTagName('a');
    for (let i = 0; i < linkElements.length; i++) {
        linkElements[i].addEventListener('click', handleClick, true);
    }

    history.replaceState(
        {
            content: contentElement.textContent
        },
        document.title,
        document.location.href
    );

    window.addEventListener('popstate', (event) => {
        console.log("popstate");
        updateContent(event.state.content);
    });
}

document.addEventListener('DOMContentLoaded', init);