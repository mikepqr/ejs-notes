function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
};

let min_arrow = (a, b) => a < b ? a : b;

console.log(min(-10, -99));
console.log(min_arrow(-10, -99));
