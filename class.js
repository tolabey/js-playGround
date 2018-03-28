function NothingSpecial() {
    
    this.a = 3;
    
    console.log("Dont Mind Me!!!");

    this.changeA = function(a) {
        this.a = a
    }
    console.log(a)
}

var a = new NothingSpecial();
console.log(a);
a.changeA(2)
console.log(a)

a.changeA = function() {
    this.a = 27
}

a.changeA();
console.log(NothingSpecial)
console.log(a);
console.log(NothingSpecial.prototype)



function Foo(name) {
    this.name = name

    this.changeName27 = function() {
        this.name = 27
    }
}

Foo.prototype.myName = function() {
    return this.name
}

var a = new Foo("a");
var b = new Foo("b");

Foo.call(a, "mustafa")
console.log(a.myName())
a.changeName27();


console.log(Foo.prototype, a, b)