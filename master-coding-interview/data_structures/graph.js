//     2---- 0
//    /  \
//   1----3

// Edge List
const graph = [[0,2], [2,3], [2,1], [1,3]]

// Adjancent list (by index)
const graph2 = [[2], [2,3], [0,1,3], [1,2]]

// Adjancent Matrix
const graph3 = {
    0: [0,0,1,0],
    1: [0,0,1,1],
    2: [0,1,0,1],
    3: [0,1,1,0]
}