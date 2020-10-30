// Caching

// Memoization, cache the return value based on the parameters.

let cache = { };

function addTo80(number) {
    if (number in cache) {
        return cache[number]
    } else {
        console.log('imagine that this calculation will take a long time')
        cache[number] = number + 80;
        return cache[number]
    }
}



let word = 'bcabc';
function removeDuplicateLetter(word){

    let cache = {}
    let string = ''
    for (let i=0; i <= word.length - 1 ; i++) {
        let letter = word[i];
        console.log(letter)
        if (letter in cache) {
            i++
        } else {
            cache[letter] = i
            string += letter
        }
    }
    return string
}
console.log(removeDuplicateLetter(word))

// function removeDuplicateLetter(s) {
//     if (s.length < 2) {
//         return s;
//     }
//
//     let cache = {};
//     let pos = 0
//
//     for (let i=0; i <= s.length - 1 ; i++) {
//         let letter1 = s[i];
//         let letter2 = s[i+1]
//
//         if (letter1 in cache) {
//             pos = i
//             cache[letter1] += 1
//         }else {
//             cache[letter1] = 1
//         }
//     }
//     console.log(cache);
//     return cache;
// };