const array = ['dory', 'brune', 'marlin', 'nemo', 'gill', 'squirt']
function findNemo (array) {
    for(let i = 0 ; i < array.length; i++) {
        if(array[i]== 'nemo'){
            console.log("Found nemo! 1")
        }
    }
}

findNemo(['nemo']); // O(n) --> linear time

const findNemo2 = (array) => {
    array.forEach(fish => {
        if(fish === 'nemo') { console.log('found NEMO! 2')}
    })
}
findNemo2(array); // O(n) --> linear time

const findNemo3 = (array) => {
    for(let fish of array) {
        if(fish === 'nemo') { console.log('found NEMO 3')}
    }
}
findNemo3(array); // O(n) --> linear time

boxes = [1,3,5,6]
function compressAllBoxes(boxes) {
    boxes.forEach(function(box) {
        console.log(box)
    });
}
compressAllBoxes(boxes)

const compressAllBoxes1 = (boxes) => {
    boxes.forEach(box => console.log(box))
}
compressAllBoxes1(boxes)

const logBox =(index) => {
    console.log(boxes[index]) //O(1)
}
logBox(2)
// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
    let a = 10; //O(1)
    a = 50 + 3; //O(1)

    for (let i = 0; i < input.length; i++) { //O(n)
        anotherFunction(); // O(n)
        let stranger = true; // O(n)
        a++; // O(n)
    }
    return a; //O(1)
}
// 3 O(1) + 4 O(n)
// BIG O(n)


// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
    let a = 5; //O(1)
    let b = 10; //O(1)
    let c = 50; //O(1)
    for (let i = 0; i < input; i++) { //O(n)
        let x = i + 1; //O(n)
        let y = i + 2; //O(n)
        let z = i + 3; //O(n)

    }
    for (let j = 0; j < input; j++) {//O(n)
        let p = j * 2; //O(n)
        let q = j * 2; //O(n)
    }
    let whoAmI = "I don't know"; //O(1)
}
// 4 + 4 O(n) +  3` O(n)

// Rules
// 1- We always care about the Worst case, in Big O(n)
// 2- Remove Constants
// 3 - Different terms for inputs
//O(n+m)
function logArrays(boxes1, boxes2) {
    boxes1.forEach(function(box) { //n
        console.log(box)
    });
    boxes2.forEach(function(box) { //m
        console.log(box)
    });
}

// 4 - Drop Non Dominants

function printAllNumbersThenAllPairSums(numbers) {
    numbers.forEach( number => console.log(number))
    numbers.forEach( number1 =>  {
        numbers.forEach( number2 =>  console.log(number1 + number2))
    });
}
// O(n + n^2) => O(n^2) we drop the non dominant term


