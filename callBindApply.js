var a = 3;

var obj = {
    a: 2,
    b: 3
}

var obj2 = {
    a: 1321,
    b: 1231231
}

function add(x, y) {
    console.log(this);
    if(this.b){
        console.log(this.b);
    }

    this.a = x;
    this.b = y;
    console.log(this.a, this.b);

    return this.a + this.b;
}


add.call(obj, 3, 5);

add(3, 5);

var tempFunc = add.bind(obj,5);

console.log(tempFunc(1));

