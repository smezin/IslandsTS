import { islandsCounter } from "./IslandsCounter"

let oceanMap =                             //Respective to the map discussed in the interview. contains 7 islands
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
]


console.log(`Invoking count using BFS`)
const islesBfs = islandsCounter(oceanMap, 'bfs')
console.log(`Islands found: ${islesBfs}`)

console.log(`Invoking count using DFS`)
const islesDfs = islandsCounter(oceanMap, 'dfs')
console.log(`Islands found: ${islesDfs}`)

