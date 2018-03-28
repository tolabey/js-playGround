
var promise1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 500, 'one');
});

var promise2 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, 'two');
});



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



var myPromiseHandlers = {
    raceValue: [],
    allValue: [],
    arguments: [],
    raceBool: false,
    allBool: false,
    flag: true,
    func: Function(),
    race: function(){
        this.raceBool = true;
        this.allBool = false;
        this.arguments = arguments;
        return this;

    },
    all: function(){
        this.raceBool = false;
        this.allBool = true;
        this.arguments = arguments;
        

        return this;
    }
}


console.log(myPromiseHandlers.all(promise1, promise2, willIGetNewPc, willIGetNewPhone))
