function arrayEqual(array1, array2) {
    if (array1.length != array2.length) return false;

    // IMPERATIVE ORIGINAL
    // for (let i = 0; i < array1.length; i++) {
    //     if (array1[i] != array2[i]) return false;
    // }

    // PYTHON VERSION
    //     any(a1 == a2 for a1, a2 in zip(array1, array2))
    // or
    //     any(map(lambda a1, a2: a1 == a2, zip(array1, array2))

    // FUNCTIONAL JS
    return (
        // This map over array1 replicates a python zip over array1 and array2.
        // It is not pretty. Is there a better way?
        array1
        // Does map construct the entire array of booleans in memory before
        // passing it to some? Or is it more like a python generator?
        .map((e, i) => e == array2[i])
        // some requires a predicate, which in this case is the identity
        // function because the array is all bools. Is there a better way?
        // Would .includes(true) be more idiomatic (and as fast?)
        .some(e => e)
    )
}

function deepEqual(v1, v2) {
    if ((typeof v1) != (typeof v2)) return false;
    // typeof null == "object" (a mistake in the language). Only apply
    // deepEqual to real objects.
    if ((typeof v1) == "object" && v1 !== null && v2 != null) {
        if (!arrayEqual(Object.keys(v1), Object.keys(v2))) return false;
        for (let k of Object.keys(v1)) {
            // Note this needs to be v1[k]. v1.k looks for the property "k".
            if (!deepEqual(v1[k], v2[k])) return false;
        }
    return true;
    } else {
        // If they're the same type and not objects simple exact equality works
        return v1 === v2;
    }
}

console.log(deepEqual({a: 1}, {a: 1}))  // true
console.log(deepEqual({a: 1}, {a: 2}))  // false
console.log(deepEqual({a: 1}, {b: 1}))  // false

console.log(deepEqual({a: {a: 1}}, {a: {a: 1}}))        // true
console.log(deepEqual({a: {a: 1}}, {a: {b: 1}}))        // false
console.log(deepEqual({a: {a: 1}}, {a: {a: "hello"}}))  // false

console.log(deepEqual(1, 1))    // true
console.log(deepEqual(1, "a"))  // false
console.log(deepEqual(1, 2))    // false

console.log(deepEqual([1,2,3], [1,2,3]))  // true
console.log(deepEqual([1,2,3], [1,2]))    // false
console.log(deepEqual([1,2,3], [3,2,1]))  // false

console.log(deepEqual({a: {a: 1}}, {a: {a: 1}}))        // true
console.log(deepEqual({a: {a: 1}}, {a: {b: 1}}))        // false
console.log(deepEqual({a: {a: 1}}, {a: {a: "hello"}}))  // false

console.log(deepEqual(null, 1))       // false
console.log(deepEqual(null, "a"))     // false
console.log(deepEqual(null, 2))       // false
console.log(deepEqual(null, {a: 1}))  // false
