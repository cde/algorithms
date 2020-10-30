class HashTable {
    constructor(size){
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i =0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }

    set(key, value) {
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = []
        }
        this.data[address].push([key,value])
        return this.data
    } //O(1)

    get(key){
        const address = this._hash(key);
        const currentBucket = this.data[address]
        if (currentBucket) {
            for(let i = 0; i < currentBucket.length; i++){
                if(currentBucket[i][0] === key) {
                    return currentBucket[i][1]
                }
            }
        }
        return undefined;
    } //O(1)

    keys() {
        if (!this.data.length) {
            return undefined
        }
        const keysArray = []
        for(let i=0; i < this.data.length; i++){
            if(this.data[i] !== undefined) {
                keysArray.push(this.data[i][0][0])
            }
        }
        return keysArray
    }
}

const myHashTable = new HashTable(5);
myHashTable.set('grapes', 10000)
myHashTable.set('grapes', 10000)
// console.log(myHashTable.get('grapes'))
myHashTable.set('apples', 9)
myHashTable.set('apples', 8)
// myHashTable.get('apples')
// console.log(myHashTable.data)
console.log(myHashTable.keys())
