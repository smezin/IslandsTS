"use strict";
/*
    OBJECTIVE:
        Count islands on given map. Where island is one or more 4 point adjacent squares if land
    PARAMS:
        grid: 2D array representing a map where '0' indicates water and '1' indicates land
        search: algorithm. 'bfs' for bfs, 'dfs' for dfs.
    RETURNS:
        number of islands found
    NOTE:
        This is a NONE destructive & NO copy grid implementation.
    Big O:
        Time Complexity: O(rows*cols)
        Space Complexity: O(rows*cols) max queue at worst case

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.islandsCounter = void 0;
function islandsCounter(grid, search) {
    if (grid == null || grid.length <= 0)
        return 0;
    var DIRECTIONS = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    var STATE = Object.freeze({
        sea: '0',
        newLand: '1',
        visitedLand: '2'
    });
    var islandsCount = 0;
    var height = grid.length;
    var width = grid[0].length;
    for (var row = 0; row < height; row++) {
        for (var col = 0; col < width; col++) {
            if (grid[row][col] === STATE.newLand) {
                islandsCount++;
                if (search === 'dfs') {
                    dfs(row, col);
                }
                else {
                    bfs([[row, col]]);
                }
            }
        }
    }
    //return grid to original state
    for (var row = 0; row < height; row++) {
        for (var col = 0; col < width; col++) {
            if (grid[row][col] === STATE.visitedLand) {
                grid[row][col] = STATE.newLand;
            }
        }
    }
    return islandsCount;
    // Recursive stack implementation DFS traversal
    function dfs(row, col) {
        if (row < 0 || row >= height || col < 0 ||
            col >= width || grid[row][col] === STATE.sea || grid[row][col] === STATE.visitedLand) {
            return;
        }
        grid[row][col] = STATE.visitedLand;
        for (var _i = 0, DIRECTIONS_1 = DIRECTIONS; _i < DIRECTIONS_1.length; _i++) {
            var direction = DIRECTIONS_1[_i];
            dfs(row + direction[0], col + direction[1]);
        }
    }
    // Iterative queue implementation BFS Traversal
    function bfs(queue) {
        while (queue.length > 0) {
            var _a = queue.shift(), row = _a[0], col = _a[1];
            if (row < 0 || row >= height || col < 0 || col >= width
                || grid[row][col] === STATE.sea || grid[row][col] === STATE.visitedLand)
                continue;
            grid[row][col] = STATE.visitedLand;
            for (var _i = 0, DIRECTIONS_2 = DIRECTIONS; _i < DIRECTIONS_2.length; _i++) {
                var direction = DIRECTIONS_2[_i];
                queue.push([row + direction[0], col + direction[1]]);
            }
        }
    }
}
exports.islandsCounter = islandsCounter;
;
