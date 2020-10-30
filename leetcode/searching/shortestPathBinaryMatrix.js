var shortestPathBinaryMatrix = function(grid) {
    let q = [[0,0,0]];

    while(q.length > 0) {
        let next = q.shift();
        console.log(next)
        let [i,j,len] = next;
        console.log('i ', i)
        console.log('j ', j)
        console.log('len ', len)
        if(i === grid.length && j === grid[0].length) {
            return len;
        }
        let val = grid[i] && grid[i][j];
        console.log('val', val)
        if(val === 0) {
            grid[i][j] = 1;
            q.push([i+1,j,len+1]);
            q.push([i,j+1,len+1]);
            q.push([i+1,j+1,len+1]);

            q.push([i-1,j,len+1]);
            q.push([i,j-1,len+1]);
            q.push([i-1,j-1,len+1]);

            q.push([i-1,j+1,len+1]);
            q.push([i+1,j-1,len+1]);
            console.log('q', q)
        }
    }

    return -1;
};

// var shortestPathBinaryMatrix = function(grid) {
//     if(grid[0][0] == 1) return -1;
//     if(grid[grid.length - 1][grid[0].length - 1] == 1) return -1;
//
//     let queue = [];
//     queue.push([0, 0, 1]); // x, y, depth
//     while (queue.length > 0){
//         let node = queue.shift();
//         if(node[0] == grid.length - 1 && node[1] == grid.length - 1) return node[2];
//         for (let i = -1; i < 2; i++){
//             for (let j = -1; j < 2; j++){
//                 if(grid.length > node[0] + i && node[0] + i >= 0 && grid.length > node[1] + j && node[1] + j >= 0){
//                     if(grid[node[0] + i][node[1] + j] == 0){
//                         grid[node[0] + i][node[1] + j] = 1;
//                         queue.push([node[0] + i, node[1] + j, node[2] + 1]);
//                     }
//                 }
//             }
//         }
//     }
//     return -1;
// };
//
// console.log(shortestPathBinaryMatrix([[0, 0, 0], [1, 1, 0], [1, 1, 0]]))
console.log(shortestPathBinaryMatrix([[0,0,0],[1,1,0],[1,1,0]]))