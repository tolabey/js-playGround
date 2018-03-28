var a = {
    item: 1,
    item2: 2
}

//var b = JSON.parse( JSON.stringify( a ) );
var b = Object.assign({}, a);
console.log("a", a);
console.log("b", b);

b.item3 = 3;

console.log("a", a);
console.log("b", b);

delete a.item3;

console.log(a, b)

b = a.constructor();

console.log(a, b)
a = Object.getOwnPropertyNames(a)
console.log(a)