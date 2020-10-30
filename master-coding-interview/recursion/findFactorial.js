//O(n)
function findFactorialRecursive(number){
    if(number === 0 || number === 1) { return 1 }
    return number * findFactorialRecursive(number - 1)
}


function findFactorialIterative(number){
    let result = 1
    while(number > 0){
        result = result * number
        number --
    }
    return result;
}
//O(n)