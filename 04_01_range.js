let range = function(start, end, step=1) {
    let result = [];
    let lower = Math.min(start, end);
    let upper = Math.max(start, end);
    for (let i = start; (lower <= i) && (i <= upper); i+=step) {   // a < b < c does not work, you have to do (a < b) && (b < c)
        result.push(i);  // I originally wrote result.push[i] here, which is not a syntax error but does not work
    }
    return result;
}

let sum = function(array) {
    // IMPERATIVE
    //
    // let total = 0;
    // for (let x of array) {  // note "of" not "in" (which works but does something weird!
    //     total += x;
    // }
    // return total;
    //
    // IDIOMATIC
    // let total = 0;
    // array.forEach(x => total += x)
    // return total;
    //
    // FUNCTIONAL
    return array.reduce((a, b) => a + b)
}

console.log(range(5, 10));
console.log(sum(range(5, 10)));
console.log(range(5, 10, 2));
console.log(range(1, 10, 2)); // [1, 3, 5, 7, 9]
console.log(range(5, 2, -1)); // [5, 4, 3, 2]
