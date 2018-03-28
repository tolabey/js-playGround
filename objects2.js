function Foo(name){
    console.log(this)
    this.name = name;
}

Foo.prototype.myName = function() {
    return this.name;
}

function Bar(name, label){
    Foo.call(this, name);
    this.label = label;
    console.log(this);
}

//Bar.prototype = Object.create(Foo.prototype);
Bar.prototype = new Foo("Bar");

Bar.prototype.myLabel = function(){
    return this.label;
}

var a = new Bar("a", "obj a");

console.log(a.constructor === Foo)
console.log(Foo.constructor)
console.log(a.constructor === Bar)
console.log(Bar.constructor === Function)
console.log(a.__proto__ === Bar.prototype)

console.log(Foo.prototype, Bar.prototype)
console.log(a instanceof Bar)
console.log(a instanceof Foo)
console.log(a instanceof Object)
console.log(a instanceof String)

console.log(Object.getPrototypeOf(a))
console.log(Foo.prototype);
console.log(Bar.prototype);

a.myName();
a.myLabel();