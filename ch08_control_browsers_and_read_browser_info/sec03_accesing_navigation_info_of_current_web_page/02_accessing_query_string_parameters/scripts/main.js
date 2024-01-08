// 8.3.2 Accessing Query String Parameters

// Helper Function for Extracting Individual Query String Parameters
(function () {
    "use strict"

    function getParameterByName(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        const regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
            results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    console.log(getParameterByName('tests'));
})();