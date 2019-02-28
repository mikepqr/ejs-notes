function every(array, test) {
    // returns in forEach functions do not work
    for (let e of array) {
        if (!test(e)) return false;
    }
    return true;
}

function every_some(array, test) {
    // array.some(e => !test(e)) is true iff there is no element in the array
    // for which the test passes
    return !array.some(e => !test(e))
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true
console.log(every_some([1, 3, 5], n => n < 10));
// → true
console.log(every_some([2, 4, 16], n => n < 10));
// → false
console.log(every_some([], n => n < 10));
// → true
