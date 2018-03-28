function foo() {
    //var self = this;
    console.log(this);
    setTimeout ( function()  {
        console.log(this)
    }, 100);
}

var obj = {
    a: 2
}

foo.call(obj);