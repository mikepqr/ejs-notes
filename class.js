class X {
    constructor() {
        this.x = 1
    }
    f() {
        console.log("f");
    }
    static g() {
        console.log("g");
    }
}

// This fails because X is a class, not an instance of the class
// X.f()
//
// This works because g is marked static ~= @staticmethod in python, usually
// used for utility functions bundled with class, e.g. alternative constructors
X.g()

// This works because f is a property of instances of the class
let anX = new X();
anX.f();
//
// This does not work. static methods are available only via calls on the
// class/constructor
// anX.g();

// add method to existing object
anX.h = function() {
    console.log("h");
}
anX.h();

// add a static method to an existing class. When added in this way, `static`
// is implict.
X.k = function() {
    console.log("k");
}
X.k()
