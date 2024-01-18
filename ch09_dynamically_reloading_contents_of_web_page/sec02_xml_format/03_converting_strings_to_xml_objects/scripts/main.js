// 9.2.3 Converting Strings to XML Objects
"use strict"

// Parsing a String to an XML document
const xmlString = `<?xml version="1.0" encoding="UTF-8"?>
        <artists>
            <artist name="Kyuss">
                <albums>
                    <album>
                        <title>Wretch</title>
                        <year>1991</year>
                    </album>
                </albums>
            </artist>
        </artists>`;

const domParser = new DOMParser();
const xmlDOM = domParser.parseFromString(xmlString, 'text/xml');
const firstArtist = xmlDOM.querySelector('artist');
console.log(firstArtist.getAttribute('name'));
console.log(firstArtist.querySelector('title').textContent);
console.log(firstArtist.querySelector('year').textContent);