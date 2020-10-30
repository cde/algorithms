function power(base,exponent) {
    let result = 1;

    function multiple(counter) {
        if(counter === exponent) {
            return
        }
        result *= base
        multiple(counter + 1)
    }

    multiple(0)
    return result;
}

console.log(power(9,2))