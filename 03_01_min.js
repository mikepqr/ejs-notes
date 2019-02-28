// Math.min exists and works with arbitrarily many inputs
//
// Fails on arrays, must use spread operator, i.e. Math.min(...[1,2,3])
function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

let min_arrow = (a, b) => a < b ? a : b;

console.log(min(-10, -99));
console.log(min_arrow(-10, -99));
