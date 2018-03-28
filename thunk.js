function thunkify(fn) {
    var args = arguments;
    fn();
    console.log(args);
}

var a = thunkify(function(){
    console.log("start")
}, 3, 4);

