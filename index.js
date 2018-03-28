var a = 2;

var b = (function foo(a){
    console.log("function scope", a)
}(2));

console.log("global Scope", a)


var a=2;
(function IIFE( def ){ def( window );
})(function def( global ){
var a=3;
console.log("a", a ); // 3 
console.log("global.a", global.a ); // 2
});

var foo = true;
if (foo) { 
    let bar=foo*2;
     console.log( bar );
}


for (var i=0; i<10; i++) { 
    console.log( i );
}
console.log( i ); // ReferenceError

var u = "u1"
{
    let u  = "u";
    console.log(u)
}

console.log(u)

console.log(mustafa)
var mustafa = "mustafa"



for (var i=1; i<=5; i++) { (function(){
    setTimeout( function timer(){ console.log( "after last ",i );
                }, i*1000 );
            })();
    }

    
for (var i=1; i<=5; i++) { (function(){
    var j=i;
    setTimeout( function timer(){
                    console.log( "j", j );
                }, j*1000 );
    })(); }

    for (var i=1; i<=5; i++) { (function(j){
        setTimeout( function timer(){ console.log( j );
        }, j*1000 ); })(i);
        }

    for (var i=1; i<=5; i++) {
        let j = i; // yay, block-scope for closure! 
        setTimeout( function timer(){
                    console.log("en son", j );
                }, j*1000 );
        }
    for (var i=1; i<=5; i++) { 
        var j = i ;
        setTimeout( function timer(){
        console.log( "last ", j );
    }, j*1000 );
    }

            // son iki

            for (let i=1; i<=5; i++) { setTimeout( function timer(){
                console.log( i );
            }, i*1000 );
    }
    