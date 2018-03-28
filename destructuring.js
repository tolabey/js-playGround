function foo(){
    return [1, 2, 3];
}

var tmp = foo();

var a = tmp[0];

console.log(a);

function bar(){
    return {
        x: 4,
        y: 5,
        z: 6
    }
}


var a = {x: bam, y: baz, z: bab} = bar();

console.log(bam, baz, bab);
console.log(a.x, a.y, a.z);

var x = [];

[x[0], x[1]] = foo();
console.log(x)

var [, b, c] = foo();

console.log(b, c);

var {x, z} = bar();
console.log(b, x, z);

var a = [2, 3, 4];
var [b, ...c] = a;

console.log(b, c);