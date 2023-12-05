"use strict"

function init() {
    function openDatabaseConnection() {
        console.log('Database connection open');
    }

    function closeDatabaseConnection() {
        console.log('Database connection closed')
    }

    function getUserByName(name) {
        if (typeof name !== 'string') {
            throw new TypeError('String expected');
        }
        /* ... */
    }

    function accessDataBase() {
        openDatabaseConnection();
        try {
            getUserByName(22);
        } catch (error) {
            console.log(error);
            throw new DBError('Error communicating with the database');
        }
        closeDatabaseConnection();
    }

    function showUsers() {
        try {
            accessDataBase();
        } catch (error) {
            document.getElementById('message').textContent = error.message;
        }
    }

    showUsers();
}

class DBError extends Error {

}

document.addEventListener('DOMContentLoaded', init);