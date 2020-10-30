//Given an array = [2,5,1,2,3,5,1,2,4]
// tell me the first recurrent character
// it should return 2

function firstRecurrentCharacter(array) {

    const cache = {}
    for (let i=0; i < array.length; i++){
        if(array[i] in cache) {
            return array[i]
        }else {
            cache[array[i]] = 0
        }
    }
    return undefined
}
array = [2,5,1,2,3,5,1,2,4]
// array = [2,1,1,2,3,5,1,2,4]
// array = [2,3,4]
console.log(firstRecurrentCharacter(array))