function outerFunc(){
    var a = 0;
    function innerFunc(){
        console.log(a);
        console.log(this);
        return a++;
    }
    return innerFunc;
}

var a = outerFunc();
a();
a();
a();
a();
a();
console.log(a)
a.call({this: this});