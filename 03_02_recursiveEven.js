function recursiveEven(x) {
    if (x == 0) return true;
    if (abs(x) == 1) return false;
    return recursiveEven(abs(x) - 2);
}

let abs = x => x < 0 ? -x : x;

console.log(recursiveEven(50));
console.log(recursiveEven(75));
console.log(recursiveEven(-1));
