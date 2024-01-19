// 9.2.4 Converting XML Objects to Strings
"use strict"

// Serializing an XML Document into a String
const xmlString = `<?xml version="1.0" encoding="UTF-8" ?>
                        <artists>
                            <artist name="Kyuss">
                                <albums>
                                    <album>
                                        <title>Wretch</title>
                                        <year>1992</year>
                                    </album>
                                </albums>
                            </artist>
                        </artists>`;

const domParser = new DOMParser();
const xmlDOM = domParser.parseFromString(xmlString, 'text/xml');
const xmlSerializer = new XMLSerializer();
const xmlStringSerialized = xmlSerializer.serializeToString(xmlDOM);
console.log(xmlStringSerialized);
