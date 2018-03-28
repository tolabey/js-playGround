var rejectedPr = new Promise( function(resolve,reject){
     // resolve this promise with a rejected promise 
     resolve( ( "Oosps" ) );
});

rejectedPr.then(
    function fullfilled(a) {
        console.log(a);
        //never gets here
    },
    function rejected(err){
        console.log(err + 4)
    }
)

var p = Promise.reject( "Oops23" );
p.then(
    function rejected(){
        // never gets here
    },

    function fulfilled(err){
        console.log( err ); // "Oops" 
    }
);

function getY(x) {
    return new Promise(function(resolve,reject){        
            setTimeout( function(){ 
                resolve( (3 * x) - 1 );
            }, 100 ); 
        }
    );
}




var x = 1;

function *foo(){
    x++;
    console.log("x: ", x)
    yield;
    console.log("x: ",x)
}

function bar() {
    x++;
}

var it = foo();

it.next();
bar();
console.log("x: ", x);
it.next();

