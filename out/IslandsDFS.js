"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
    LOGIC:
        1. Go through grid squares
        2. If square == 0, do nothing
        3. Else, treat the grid square as root and traverse recursively depth first all squares that equal '1', each square in path change to '0' (visited)
        4. Repeat till no '1' left
    NOTE:
        This is a destructive implementation!
    Big O:
        Time Complexity: O(row*col)
        Space Complexity: O(row*col) max queue
    Possible enhancements and tradeoffs:
        Going nondestructive: By making a copy of the grid as process starts. Cost: Extra space size (row*col) on top of Queue space requirements
*/
var driverData_1 = require("./driverData");
function numOfIslandsDFS(grid) {
    if (grid.length <= 0)
        return 0;
    var DIRECTIONS = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    var islandsCount = 0;
    var height = grid.length, width = grid[0].length;
    for (var row = 0; row < height; row++) {
        for (var col = 0; col < width; col++) {
            if (grid[row][col] == '1') {
                islandsCount++;
                traverse(row, col);
            }
        }
    }
    return islandsCount;
    // Recursive DFS traversal
    function traverse(row, col) {
        if (row < 0 || row >= height || col < 0 ||
            col >= width || grid[row][col] == '0') {
            return;
        }
        grid[row][col] = "0";
        for (var _i = 0, DIRECTIONS_1 = DIRECTIONS; _i < DIRECTIONS_1.length; _i++) {
            var dir = DIRECTIONS_1[_i];
            traverse(row + dir[0], col + dir[1]);
        }
    }
}
;
var isles = numOfIslandsDFS(driverData_1.oceanMap);
console.log(isles);
