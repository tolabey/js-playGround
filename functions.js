var a = 5

function f2() {
    console.log("Function", this);
    return this;
  }

  f2();
  
  var expFunc = function(){
      console.log("expFunc", this)
  }

  expFunc();
var a = 3

  {
      console.log("curly Brackets ", this);
  }

  (function(){
    console.log("IFE", this);
  })();


  function closureFunc() {
      var b = 2;
      function closureFunc2() {
          console.log("closureFunc2", this);
      }

      console.log("closureFunc", this);

      return closureFunc2;
  }


  var c = closureFunc();

  c();

  var d = {
      k: this,
      foo: function() {
          var a = 2;
          console.log("foo", this);
          function bar(){
              console.log(this)
            return this
          }
          return bar;
      }
  }

  console.log(d.k)

  d.foo()();

  var l = d.foo();
  console.log("nested function in object", l());


  var tola = (() => {
      var a = 1;
      console.log(this)
  })

  tola();

  var empty = () => {
console.log(this);
return 3;
}

  console.log( empty());

  function Foo() {
      this.bar = this;

  }

  console.log(new Foo().bar)