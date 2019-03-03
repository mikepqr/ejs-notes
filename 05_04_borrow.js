let map = {one: true, two: true, hasOwnProperty: true};


// Fix this call
// console.log(map.hasOwnProperty("one"));
//
// Remember that methods that exist on plain objects come from
// Object.prototype.
//
// Also remember that you can call a function with a specific this binding by
// using its call method.
console.log(Object.hasOwnProperty.call(map, "one"));
// → true
