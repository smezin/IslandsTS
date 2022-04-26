/*
    NOTE: This is a destructive implementaion!
    Time Complexity: O(row*col)
    Space Complexity: O(row*col)
    Possible enhancements and tradeoffs:
        Going non destructive: By making a copy of the grid as proccess starts. Cost: Extra space size (row*col) on top of Queue space requirements
*/

function numOfIslandsBFS (grid: string[][]): number{
    let height = grid.length, width = grid[0].length;
    let count = 0;
    const DIRECTIONS = [[-1,0],[0,1],[1,0],[0,-1]];
    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            if (grid[row][col] == "1") {
                count++;
                traverse([[row,col]]);
            }
        }
    }
    return count;
    
    // Iterative BFS Traversal
    function traverse(queue: number[][]) {
        while (queue.length > 0) {
            let [row, col] = queue.shift();
            if (row < 0 || row >= height || col < 0 || col >= width 
                || grid[row][col] == '0') continue;
            grid[row][col] = "0"; // mark so that we know we already visited it
            for (let dir of DIRECTIONS) {
                queue.push([row+dir[0], col+dir[1]]);
            }
        }
    }
};

console.log('1')