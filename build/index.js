"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var number = new NumbersCollection_1.NumbersCollection([5, 3, 6, 3, 2, 7]);
number.sort();
console.log(number.data);
var string = new CharactersCollection_1.CharactersCollection('TypeScript');
string.sort();
console.log(string.data);