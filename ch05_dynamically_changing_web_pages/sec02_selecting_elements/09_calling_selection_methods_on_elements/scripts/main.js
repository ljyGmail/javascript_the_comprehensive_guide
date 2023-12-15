// 5.2.9 Calling Selection Methods on Elements
"use strict"

// Selection of Elements Starting from a Parent Element
const allListItemElements = document.getElementsByTagName('li');
console.log(allListItemElements.length); // Output: 8
const subList = document.getElementById('list-2');
const subListListItems = subList.getElementsByTagName('li');
console.log(subListListItems.length); // Output 4