function numOfIslandsDFS (grid: string[][]): number {
    if (grid.length <= 0) return 0;
    let count = 0, DIRECTIONS = [[-1,0],[0,1],[1,0],[0,-1]];
    let height = grid.length, width = grid[0].length;
    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            if (grid[row][col] == '1') { 
                traverse(row, col); 
                count++;
            }
        }
    }

    return count;
    
    // DFS Traversal
    function traverse(row: number, col: number) {
        if (row < 0 || row >= height || col < 0 || 
            col >= width || grid[row][col] == '0') {
            return;
        }
        grid[row][col] = "0";
        for (let dir of DIRECTIONS) {
            traverse(row+dir[0],col+dir[1]);
        }
    }
};