// Problem 2: Lattice Paths (Dynamic Programming Approach)
// #
// #  Prompt:    Count the number of unique paths to travel from the top left
// #             to the bottom right of a lattice of squares.
//     #
// #  Input:     An integer N (which is the size of the lattice)
// #             An integer M (which is the height of the lattice)
// #  Output:    An integer (which represents the number of unique paths)
// #
// #  Example:   input: 2,2
// #
// #             (2 x 2 lattice of squares)
// #              __ __
// #             |__|__|
// #             |__|__|
// #
// #             output: 6 (number of unique paths from top left corner to bottom
// #                     right)
// #
// #  Notes:     What is the time and auxiliary space complexity of your solution?
//     #
//     #             When moving through the lattice, you can only move either down or
// #             to the right.
//     #
// #             You did this problem before with recursion. Try implementing it
// #             now with dynamic programming!
//O(n*m) vs O(2n+m)
function laticePath(n, m) {
    let cache = {}

    function findPath(x,y) {
        let key = x + '_' + y
        if (key in cache) {
            return cache[key]
        }
        if (x === n && y === m) { return 1 }

        if (x > n || y > m) { return 0 }

        cache[key] = findPath(x, y + 1) + findPath(x + 1, y)
        return cache[key]

    }

    return findPath(0,0)
}

console.log(laticePath(2, 3))