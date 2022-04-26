/*
    NOTE: This is a destructive implementaion!
    Time Complexity: O(row*col)
    Space Complexity: O(row*col)
    Possible enhancements and tradeoffs:
        Going non destructive: By making a copy of the grid as proccess starts. Cost: Extra space size (row*col) on top of Queue space requirements
*/
function numOfIslandsBFS(grid) {
    var height = grid.length, width = grid[0].length;
    var count = 0;
    var DIRECTIONS = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    for (var row = 0; row < height; row++) {
        for (var col = 0; col < width; col++) {
            if (grid[row][col] == "1") {
                count++;
                traverse([[row, col]]);
            }
        }
    }
    return count;
    // Iterative BFS Traversal
    function traverse(queue) {
        while (queue.length > 0) {
            var _a = queue.shift(), row = _a[0], col = _a[1];
            if (row < 0 || row >= height || col < 0 || col >= width
                || grid[row][col] == '0')
                continue;
            grid[row][col] = "0"; // mark so that we know we already visited it
            for (var _i = 0, DIRECTIONS_1 = DIRECTIONS; _i < DIRECTIONS_1.length; _i++) {
                var dir = DIRECTIONS_1[_i];
                queue.push([row + dir[0], col + dir[1]]);
            }
        }
    }
}
;
console.log('1');
