function reverseArray(array) {
    // note if you get elements of array in this scope using array.pop then
    // that affects the value of array in the enclosing scope (like python)
    let reversed = [];
    for (let a of array) {
        reversed.unshift(a)
    }
    return reversed;
}

function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length/2); i++) {
        // no inplace swapping of variables. you need a temp value. using two
        // temps here for clarity.
        let a = array[i];
        let b = array[array.length - (1 + i)];  // no array[-1] for last element :-(
        array[i] = b;
        array[array.length - (1 + i)] = a;
    }
    // returns undefined
}

let array = [1,2,3,4,5];
console.log(reverseArray(array));
console.log(array); // unchanged in enclosing scope
reverseArrayInPlace(array); // no output
console.log(array); // reversed in enclosing scope
