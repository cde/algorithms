// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

// O(2^n) Exponential
function fibonacci(number){
    if(number < 2) { return number}

    return fibonacci(number - 1) +  fibonacci(number - 2)
}


// O(n)
function fibonacciIterative(number){
    let array = [0,1]
    for(let i = 2; i < number + 1; i++){
        array.push(array[i-1] + array[i - 2])
    }
    return array[number]
}