function Foo(){
    this.a = 1
}

var a1 = new Foo();

console.log(a1.constructor);

var b1 = Object.create(Foo);

console.log(b1)
console.log(b1.constructor);
console.log(a1.a, b1.a)