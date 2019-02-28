let arrays = [[1, 2, 3], [4, 5], [6]];

let flatten = array => array.reduce((e1, e2) => e1.concat(e2))

console.log(flatten(arrays))
