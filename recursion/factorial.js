function factorial(n) {
    let result = 1

    function multiplyInt(count) {
        if(count > n) { return }
        result *= count;
        multiplyInt(count + 1)
    }

    multiplyInt(1)
    return result;
}

console.log(factorial(4))