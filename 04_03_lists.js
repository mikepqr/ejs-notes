function arrayToList(array) {
    array = array.reverse();
    let list = {value: array[0], rest: null};
    for (let a of array.slice(1)) {
        list = {value: a, rest: list};
    }
    return list
}

let array = [1,2,3];
let list = arrayToList(array);

function listToArray(list) {
    let array = [];
    while (list) {
        array.push(list.value);
        list = list.rest;
    }
    return array;
}

console.log(list);
console.log(listToArray(list));

// Note arrow functions that return object literals require parens around the
// literal. f = a => {value: a} does not work. It returns undefined, rather
// than raising a syntax error. f = (a, b) => {value1: a, v2: b} does raise a
// synax error (on the second ":").
// https://mariusschulz.com/blog/returning-object-literals-from-arrow-functions-in-javascript
let prepend = (a, list) => ({value: a, rest: list})

console.log(prepend(0, list)); // truncated output
console.log(JSON.stringify(prepend(0, list), null, 2)); // formatted, untruncated ouput (2 = indentation)
// Note there is no way to name optional positional parameters. If you want to
// provide the third optional parameter, you have to provide the second.

function nth(list, n) {
    for (let i = 0; i < n; i++) {
        list = list.rest;
        if (!list) return undefined;
    }
    return list.value;
}

function nth_recursive(list, n) {
    if (n == 0) {
        return list.value;
    }
    if (!list.rest) {
        return undefined;
    }
    return nth_recursive(list.rest, n-1)
}

console.log(list)
console.log(nth(list, 2)) // 3
console.log(nth(list, 4)) // undefined
console.log(nth_recursive(list, 2)) // 3
console.log(nth_recursive(list, 3)) // undefined
