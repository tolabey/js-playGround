var arr = [1 ,2 ,3];

var it = arr[Symbol.iterator]();

it.next();
console.log(it.next());

var str = "hello word!";

var it2 = str[Symbol.iterator]();

console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());

var m = new Map();

console.log(m);

m.set("foo", "bar");

