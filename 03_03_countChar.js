function countChar(str, a) {
    count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === a) count++
    }
    return count;
}

let countB = (str) => countChar(str, "B");

console.log(countB("Bean Counting"));
console.log(countB("BBBB"));
console.log(countB("abcd"));
