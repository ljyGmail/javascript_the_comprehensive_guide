// 3.6.8 Calling Certain Statements Regardless of Errors That Have Occurred
"use strict"

try {
    // Execute code that potentially produces errors
} catch (error) {
    // Handle the error
} finally {
    // Everything that is written here will always be executed, regardless of
    // whether an error has occurred or not.
}

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

class DBError extends Error {

}

/*
function accessDataBase() {
    openDatabaseConnection(); // Database connection open
    getUserByName(22); // TypeError: String expected
    closeDatabaseConnection(); // will not be executed
}
 */

function accessDataBase() {
    openDatabaseConnection(); // Database connection open
    try {
        getUserByName(22);
    } catch (error) {
        console.log(error); // TypeError: String expected
    }
    closeDatabaseConnection(); // Database connection closed
}

accessDataBase();

// db_error_webapp

// Calling closeDatabaseConnection() function in two places, but it is difficult to maintain.
function accessDataBase2() {
    openDatabaseConnection(); // Database connection open
    try {
        getUserByName(22);
    } catch (error) {
        console.log(error); // TypeError: String expected
        closeDatabaseConnection(); // Database connection closed
        throw new DBError('Error communicating with the database.');
    }
    closeDatabaseConnection(); // will not be executed
}

accessDataBase2();

// This is exactly where the finally block comes into play:
function accessDataBase3() {
    openDatabaseConnection(); // Database connection open
    try {
        getUserByName(22);
    } catch (error) {
        console.log(error); // TypeError: String expected
        throw new DBError('Error communicating with the database.');
    } finally {
        closeDatabaseConnection(); // Database connection closed
    }
}

accessDataBase3();