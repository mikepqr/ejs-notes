class Group {
    constructor(array) {
        this.content = array.slice(0) // copy
    }

    // from arbitrary iterable
    static from (iterable) {
        let g = new Group([]);
        for (let e of iterable) {
            g.add(e);
        }
        return g;
    }

    has(x) {
        return this.content.includes(x);
    }

    add(x) {
        if (!this.has(x)) this.content = this.content.concat([x]);
    }

    delete(x) {
        if (this.has(x)) this.content = this.content.filter(e => e != x);
    }

    // Group is iterable because it defines a [Symbol.iterator] property, that
    // returns an iterator
    [Symbol.iterator]() {
        return new GroupIterator(this);
    }
}

// This is an iterator because it defines next()
class GroupIterator {
    constructor(group) {
        this.i = 0;
        this.content = group.content
    }

    // next() returns an object with a value property that provides the next
    // value, if there is one, and a done property, which should be true when
    // there are no more results and false otherwise
    next() {
        if (this.i == this.content.length) return {done: true};
        let value = this.content[this.i];
        this.i++;
        return {value, done: false};
    }
}

let group = Group.from([20, 30]);
group.add(10);
console.log(group.has(10));
// → true
console.log(group.has(40));
// → false
group.add(10); // no-op
group.delete(10);
console.log(group.has(10));
// → false

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c
