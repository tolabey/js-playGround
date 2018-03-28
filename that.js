function identify() {
    console.log(this.name)
    return this.name.toUpperCase();
}
    
function speak() {
    var greeting = "Hello, I'm " + identify.call( this ); 
    console.log( greeting );
}

var me = {
        name: "Kyle"
};

var you = {
    name: "Reader"
};
    
identify.call( me ); // KYLE
identify.call( you ); // READER 
speak.call( me ); // Hello, I'm KYLE
speak.call( you ); // Hello, I'm READER


function foo(num) {
    console.log( "foo: " + num ); // keep track of how many times `foo` is called
    foo.count++; 
    console.log(foo.count)
}
        
foo.count = 0;
var i;
for (i=0; i<10; i++) {
    if( i > 5) {
        foo( i ); 
    }
}
        // foo: 6
        // foo: 7
        // foo: 8
        // foo: 9
    // how many times was `foo` called? 
console.log( foo.count ); // 0 -- WTF?
console.log(foo);


function mustafa(num) {
    console.log(this.numb);
    this.numb = num;
    console.log(this.numb);
}

mustafa.numb = 5;
console.log(mustafa.numb)
mustafa.call(mustafa, 3)
console.log(mustafa.numb)
console.log(mustafa)

function tola() {
    co = 3
    "use strict";
    console.log(co);
}

tola();
console.log(co)

function makeAdder(x) {
    function add(y) {
        console.log(y)
        return x + y;
    }
    console.log(x)
    return add;
}

console.log(makeAdder(2)(3))

function coni() {
    "use strict"
    var bar = 4
    console.log(this.bar);
}

var bar = "glob";

coni.call(this);


function test() {
    "use strict";
    var a = 5;
    var b = 6;
    var c = 7;
    test2.call(this);
}

function test2() {
    console.log(this.a);
    console.log(this.b);
    console.log(this.c);
}

test();