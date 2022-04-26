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

export function islandsCounter (grid: string[][], search: string): number {
    if (grid == null || grid.length <= 0) return 0;
    const DIRECTIONS = [[-1,0],[0,1],[1,0],[0,-1]];
    const STATE = Object.freeze({
        sea: '0',
        newLand: '1',
        visitedLand: '2'
    })
    let islandsCount = 0; 
    let height = grid.length;
    let width = grid[0].length;
    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            if (grid[row][col] == STATE.newLand) { 
                islandsCount++;
                if (search === 'dfs'){
                    dfs(row, col); 
                } else {
                    bfs([[row, col]]);
                }
            }
        }
    }
    //return grid to original state
    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            if (grid[row][col] == STATE.visitedLand) {
                grid[row][col] = STATE.newLand
            }
        }
    }
    return islandsCount;
    
    // Recursive stack implementation DFS traversal
    function dfs(row: number, col: number) {
        if (row < 0 || row >= height || col < 0 || 
            col >= width || grid[row][col] == STATE.sea || grid[row][col] == STATE.visitedLand) {
            return;
        }
        grid[row][col] = STATE.visitedLand;
        for (let direction of DIRECTIONS) {
            dfs(row + direction[0], col + direction[1]);
        }
    }

    // Iterative queue implementation BFS Traversal
    function bfs(queue: number[][]) {
        while (queue.length > 0) {
            let [row, col] = queue.shift();
            if (row < 0 || row >= height || col < 0 || col >= width 
                || grid[row][col] == STATE.sea || grid[row][col] == STATE.visitedLand) continue;
            grid[row][col] = STATE.visitedLand; 
            for (let direction of DIRECTIONS) {
                queue.push([row + direction[0], col + direction[1]]);
            }
        }
    }
};