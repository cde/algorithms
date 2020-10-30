// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For Example:
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'i'];
//should return false.
//-----------
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'x'];
//should return true.

// 2 parameters - arrays - no size limit
// return true or false

function containsCommonItem(arr1, arr2) {
    for (let i=0; i < arr1.length; i++) {
        for ( let j=0; j < arr2.length; j++) {
            if(arr1[i] === arr2[j]) {
                return true;
            }
        }
    }
    return false
}
//O(a*b)
//O(1) - Space Complexity

const  array1 = ["a", "b", "c", "x"]
const  array2 = ["z", "y", "x"]


// const containsCommonItems = (array1, array2) => {
//     // O(n^2)
//     array1.forEach(elem1 => {
//         array2.forEach(elem2 => {
//             if(elem1 === elem2) { return true}
//         })
//     } )
//     return false
// }
// O(n*m)
// containsCommonItems(array1, array2)


const containsCommonItems2 = (array1, array2) => {
    let map = {}
    array1.forEach(elem => {
        if(!map[elem]){
            map[elem]= true
        }
    })
    // console.log(map)
    array2.forEach(elem => {
        // console.log(elem)
        if(elem in map) {
            console.log(elem)
            return true
        }
    });
    return false;
}
containsCommonItems2(array1, array2)
// O(n+m) Time complexity
// O(n) Space complexity

function containsCommonItems3(array1, array2){
    return array1.some(item => array2.includes(item))
}

containsCommonItems3(array1, array2)