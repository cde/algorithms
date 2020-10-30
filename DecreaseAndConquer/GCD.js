function greatestCommonDivisor (num1, num2) {

    if (num1 < 0) { num1 *= -1 }
    if (num2 < 0) { num2 *= -1 }

    let temp;
    if (num1 < num2 ) {
       [ num1, num2 ]= [num2, num1]
    }
    while(num2 > 0 ){
        [num1, num2] = [num2,  num1 % num2]
        console.log('num1', num2)
        console.log('num2', num2)
    }
    return num1;
}