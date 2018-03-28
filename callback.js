var a = {}

function callbackfunc(a, b) {
    this.a[a] = b;
}

function func(a, b, callback) {
    this.a[a] = b;
    if(typeof callback === "function"){
        console.log("a s")
        callback("tola", "mustafa");
    }
}

func("281", "26", callbackfunc);

console.log(a)