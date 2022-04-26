# Islands count problem
    TS Non destructive No copies implementation of the islands count problem
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
