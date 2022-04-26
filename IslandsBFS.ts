/*
    LOGIC: 
        1. Go through grid squares
        2. If square == 0, do nothing
        3. Else, treat the grid square as root and traverse breadth first all squares that equal '1', each square in path change to '0' (visited)
        4. Repeat till no '1' left 
    NOTE: 
        This is a destructive implementation!
    Big O:
        Time Complexity: O(row*col)
        Space Complexity: O(row*col) max queue
    Possible enhancements and tradeoffs:
        Going nondestructive: By making a copy of the grid as process starts. Cost: Extra space size (row*col) on top of Queue space requirements
*/

import {oceanMap} from './driverData'

function numOfIslandsBFS (grid: string[][]): number{
    let height = grid.length, width = grid[0].length;
    let islandsCount = 0;
    const DIRECTIONS = [[-1,0],[0,1],[1,0],[0,-1]];
    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            if (grid[row][col] == "1") {
                islandsCount++;
                traverse([[row,col]]);
            }
        }
    }
    return islandsCount;
    
    // Iterative BFS Traversal
    function traverse(queue: number[][]) {
        while (queue.length > 0) {
            let [row, col] = queue.shift();
            if (row < 0 || row >= height || col < 0 || col >= width 
                || grid[row][col] == '0') continue;
            grid[row][col] = "0"; 
            for (let dir of DIRECTIONS) {
                queue.push([row + dir[0], col + dir[1]]);
            }
        }
    }
};

const isles = numOfIslandsBFS(oceanMap)
console.log(isles)