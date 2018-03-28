function Foo(){
    this.name = "mustafa";
    this.surname = "tola";
    console.log(this)
}

Foo();


Foo.prototype = {a: 1, b: 2};
console.log(Foo.prototype)
var a = new Foo();

console.log(a instanceof Foo)

console.log(a); // a
console.log(a.__proto__); // === Foo.prototype
console.log(a.constructor === Foo); // === Object not Foo

Object.defineProperty( Foo.prototype, "constructor" , {
    enumerable: false,
    writable: true,
    configurable: true,
    value: Foo // point `.constructor` at `Foo`
    });

console.log(Foo.prototype.constructor);

var b = new Foo();

console.log(b.constructor === Foo)