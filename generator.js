function* generator(i) {
    yield i;
    yield  i = 21321;
    console.log(i)
    i += 10;
}

var gen = generator(10);

console.log(gen.next().value);

console.log(gen.next().value);


function* generatorX(){
    console.log(3);
    yield  5;
    return 36;
}

var a = generatorX();
console.log(a.next());
console.log(a.next());


function* add(x){
    console.log( 45 + (yield "Hello") + x);    
}

var a = add(10);

a.next();
a.next();

var c = [1,2,3,4,5,6,7,8,9,0];

var it = c[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
var temp= {};
temp.done = false;
while(temp.done === false){
    console.log("a")
    temp = it.next();
    console.log(temp)

}


function *foo(){
    console.log("Foo starting");
    yield 3;
    yield 4;
    console.log("Foo Finished");
}

function *bar(){
    yield 1;
    yield 2;
    yield *foo();
    yield 5;
}

var it = bar();
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)