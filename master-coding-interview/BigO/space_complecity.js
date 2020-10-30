function booo(n){
    for(let i=0; i < n; i++){
        console.log('boooo!');
    }
}

console.log(boo0(3)); //0(1) no variable, no data structure


function arrayofHis(n){
    let hiArray = []; // variable & data structure
    for(let i=0; i < n; i++){
        hiArray.push('Hi')
    }
    return hiArray;
}
console.log(arrayofHis(3)) // O(n)