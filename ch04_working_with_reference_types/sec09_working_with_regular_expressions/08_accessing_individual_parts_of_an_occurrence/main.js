// 4.9.8 Accessing Individual Parts of an Occurrence
"use strict"

// By Defining Groups, You Can Also Access Individual Parts of an Occurrence
const pattern = /^(\d{4})-(\d{2})-(\d{2})$/u;
const result = pattern.exec('2018-03-27');
console.log(result[0]); // 2018-03-27
console.log(result[1]); // 2018
console.log(result[2]); // 03
console.log(result[3]); // 27
console.log(result.index); // 0
console.log(result.input); // 2018-03-27

// Named Groups Allow Access via a Defined Name
const pattern2 = /^(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})$/u;
const result2 = pattern2.exec('2023-12-14');
console.log(result2.groups.year); // '2023'
console.log(result2.groups.month); // '12'
console.log(result2.groups.day); // '14'