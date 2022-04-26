"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IslandsCounter_1 = require("./IslandsCounter");
var oceanMap = //Respective to the map discussed in the interview. contains 7 islands
 [
    ['1', '1', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '1', '0', '0', '0'],
    ['0', '0', '1', '1', '1', '0', '0', '0', '0'],
    ['0', '0', '0', '1', '1', '0', '0', '0', '0'],
    ['1', '0', '0', '1', '1', '1', '0', '1', '0'],
    ['0', '0', '0', '0', '1', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '1', '0', '0', '0', '0', '1', '1', '1'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '1'],
];
console.log("Invoking count using BFS");
var islesBfs = IslandsCounter_1.islandsCounter(oceanMap, 'bfs');
console.log("Islands found: " + islesBfs);
console.log("Invoking count using DFS");
var islesDfs = IslandsCounter_1.islandsCounter(oceanMap, 'dfs');
console.log("Islands found: " + islesDfs);
