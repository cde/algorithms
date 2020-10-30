function reverse(str){
    let result = []
    let strLen = str.length - 1
    for( let i = strLen ; i >= 0; i--) {
        result.push(str[i])
    }
    return result.join('');
}

console.log(reverse('Hola'));

function reverseString(str) {
    return str.split('').reverse().join('')
}

const reverse3 = str => str.split('').reverse().join('')
const reverse4 = str => [...str].reverse().join('')