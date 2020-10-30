function reverseString(str) {
    let result = ''

    function traverse(index) {
        if(index < 0) {
            return
        }
        result += str[index]
        traverse(index - 1)
    }
    traverse(str.length  - 1)
    return result;
}


console.log(reverseString("hello"))