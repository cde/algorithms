function nthFibonacci(n) {
    let fibonacci = [0,1]
    console.log(fibonacci)

    function searchFib(i) {

        if ( i > n) { return }
        debugger
        fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1]
        console.log(fibonacci)
        searchFib(i + 1)
    }

    searchFib(2)

    return fibonacci[n]
}
console.log(nthFibonacci(5))


//Recursion w/ side effects
function nthFibonacci(n,i, fibonacci){
    fibonacci = fibonacci || [0,1] //Bottom up approach
    i = i || 2

    if(n<2) { return fibonacci[n]}
    if(i===n) { return fibonacci[i]}

    return  nthFibonacci(n,i + 1, fibonacci) // Single, only one recursion call

}

// Pure recursion
function nthFibonnacci(n) {
    return (n < 2) ? n : nthFibonacci(n-1) + nthFibonacci(n-2)
    //Top Dow approach
    // Multiple recursion
}