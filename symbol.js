var a = Symbol("new symbol");

console.log(a);

var b = {a: 26}

b[a] = 232
console.log(b[a])
b[function(){
    console.log(27)
}] = 3
console.log(b[function(){
    console.log(27)
}]);