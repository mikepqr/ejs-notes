function countChar(str, a) {
    // IMPERATIVE
    //
    // let count = 0;
    // for (let i = 0; i < str.length; i++) {
    //     if (str[i] === a) count++
    // }
    // return count;
    //
    // FUNCTIONAL
    return (
        // str.split("") turns a string into an array of characters, but will
        // fail on higher codepoints, e.g. emoji
        // Could also use [...str]  // this is called the "spread operator"
        Array.from(str)
        .map(s => s == a)
        .reduce((a, b) => a + b) // true + true = 2 so this gives the number of trues in an array of booleans
    )
}

let countB = (str) => countChar(str, "B");

console.log(countB("Bean Counting"));
console.log(countB("BBBB"));
console.log(countB("abcd"));

function makeCharCounter(a) {
    return (str) => countChar(str, a)
}

let countB2 = makeCharCounter("B")

console.log(countB2("Bean Counting"));
console.log(countB2("BBBB"));
console.log(countB2("abcd"));
