"use strict"

const isMomHappy = true;

//promise
const willIGetNewPhone = new Promise(
    function(resolve, reject){
        if(isMomHappy){
            const phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone); //fullfilled
        }
        else{
            const reason = new Error('mom is not happy');
            reject(reason);//reject
        }
    }
)

const willIGetNewPc = new Promise(
    function(resolve, reject){
        if(!isMomHappy){
            const reason = new Error('you have phone');
            reject(reason); //reject
        }
        else{
            const pc = {
                brand: 'imac',
                color: 'white'
            };
            resolve(pc); //fullfilled
        }
    }
)

const showOff = function(phone) {
    console.log(phone);
    const message = 'Hey friend, I have a new'
    + phone.color
    + " " 
    + phone.brand
    + 'phone';

    return Promise.resolve(message);
}


const askMom = function(){

    willIGetNewPhone
    .then(showOff)
    .then(function(fullfilled){
        showOff(fullfilled);
        console.log(fullfilled,);
        //output: {brand: Samsung, color: black}
    })
    .catch(function(error){
        console.log(error.message);
        //output: 'mom is not happy'
    });

    willIGetNewPc
    .then(function(fullfilled){
        console.log(fullfilled);
    })
    .catch(function(error){
        console.log(error.message);
    })

    console.log('after asking mom');
}

var str = "hello word!";

var it2 = 3[Symbol.iterator]();
var arr2 = []
console.log(typeof arr2[Symbol.iterator]  === 'function');

console.log(Promise.all(it2))