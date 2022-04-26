function numOfIslandsDFS(grid) {
    if (grid.length <= 0)
        return 0;
    var count = 0, DIRECTIONS = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    var height = grid.length, width = grid[0].length;
    for (var row = 0; row < height; row++) {
        for (var col = 0; col < width; col++) {
            if (grid[row][col] == '1') { // there is no chance '0' is part of an island
                traverse(row, col); // once this finishes, we've visited all lands of one island
                count++;
            }
        }
    }
    return count;
    // DFS Traversal
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
