function countChar(str, a) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === a) count++
    }
    return count;
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
