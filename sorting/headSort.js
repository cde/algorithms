// utilize array as a heap as well
// add items to heap
// then remove all values
// we use a max head
function headSort(array) {

    let headLength  = 1;

    function getParent(child) {
        return Math.floor(child - 1 / 2)
    }

    function getChild(parent){
        let left = parent * 2 + 1;
        if (left >= headLength - 1 || array[left] >= array[left + 1]){
            return left;
        }
        return left + 1;
    }

    while (headLength < array.length) {

        let child = headLength;
        let parent = getParent(child);
        headLength ++;
        console.log(parent)

        while (child > 0 && array[parent] < child ) {
            [array[parent], array[child]] = [array[child], array[parent]]
            child = parent;
            parent = getParent(child);
        }
    }

    while (headLength > 1) {
        [array[0], array[headLength - 1]]= [array[headLength - 1], array[0]];
        headLength --;

        let parent = 0
        let child = getChild(parent);

        while (child < headLength && array[parent] < array[child]) {
            [array[parent], array[child]] = [array[child], array[parent]];
            parent = child;
            child = getChild(parent);
        }
    }
    return array;
}

console.log(headSort([9,9,8,1,3,5,-2,4,38,-5,0, 10, -7]))