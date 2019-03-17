class PGroup {
    constructor(content) {
        this.content = content
    }

    has(x) {
        return this.content.includes(x);
    }

    add(x) {
        if (this.has(x)) return new PGroup(this.content)
        return new PGroup(this.content.concat([x]))
    }

    delete(x) {
        if (!this.has(x)) return new PGroup(this.content)
        return new PGroup(this.content.filter(a => a !== x))
    }
}

// To add a property (empty) to a constructor that is not a method, you have to
// add it to the constructor after the class definition, as a regular property.
PGroup.empty = new PGroup([]);

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false
