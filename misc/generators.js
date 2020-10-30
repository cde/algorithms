function *numbers() {
    const result = 1 + 1;
    return 20 + (yield result);
}
const generator = numbers()
console.log(generator.next())

// {
//     value:2,
//         done:false
// }

function *list() {
    yield 1
    yield 2
    yield 3
    yield 4
    yield 5
}

const generator = list();

const numbers = [];

for(let value of generator) {
    numbers.push(value)
}
console.log(numbers);
// [
//     1,
//     2,
//     3,
//     4,
//     5
// ]

function *numbers() {
    yield 1
    yield 2
    yield* moreNumbers();
    yield 6
    yield 7
}
function *moreNumbers() {

    yield 3
    yield 4
    yield 5
}

const generator = numbers();

const values = [];

for(let value of generator) {
    values.push(value)
}
console.log(values);
//[
// 1,
// 2,
// 3,
// 4,
// 5,
// 6,
// 7
// ]

class Tree {
    constructor (value = null, children = []){
        this.value = value;
        this.children = children
    }

    *printValues() {
        yield this.value;
        for(let child of this.children){
            yield* child.printValues();
        }
    }
}

const tree = new Tree(1,[
    new Tree(2, [new Tree(4)]),
    new Tree(3)
]);

const values = []

for(let value of tree.printValues()){
    values.push(value);
}
console.log(values);