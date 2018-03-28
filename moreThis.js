function foo() {
    return this;
}

var foo1 = (() => this);


var obj = {
    a: 3,
    func: foo,
    func2: function(){
        return this;
    },
    func3: foo1,
    func4: (() => this)
}

console.log(obj.func());
console.log(obj.func2())
console.log(obj.func3())
console.log(obj.func4())



