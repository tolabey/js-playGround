
var promise1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 500, 'one');
});

var promise2 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100);
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
    allValue: [],
    flag: true,
    
    race: function(promiseArr){
        try{
            var control = typeof promiseArr[Symbol.iterator]
            if(control === 'function') {
                var flag;
                return new Promise(function(resolve, reject) {
                    for(let i = 0; i < promiseArr.length; i++){
                        if(promiseArr[i].constructor.name === "Promise") {
                            promiseArr[i]
                            .then(function(fData){
                                if(!flag){
                                    flag = fData;
                                    resolve(fData)
                                }
                            })
                            .catch(function(err){
                                reject(err)
                            });
                        }
                        else {
                            if(!flag){
                                flag = promiseArr[i];
                                resolve(promiseArr[i])
                            }
                        }
    
                    }
                })
            }
    
        }
        catch(err){
            return new Promise(function(resolve, reject){
                reject(err)
            })
            throw err
        }
    },
    all: function(promiseArr) {
        try{
            var control = typeof promiseArr[Symbol.iterator]
            return new Promise(function(resolve, reject){
                if(control === 'function') {
                    if(promiseArr.length > 0){
                        for(let i = 0; i < promiseArr.length; i++){
                            var dataArr = [];
                            var errC = 0, promiseCount = 0;
                            //console.log( promiseArr[i].constructor.name)
                            if(promiseArr[i].constructor.name === "Promise"){
                                promiseArr[i]
                                .then(function(fData){
                                    dataArr[i]= fData;
                                    promiseCount++;
                                    if(promiseArr.length === promiseCount && errC === 0){
                                        console.log(232)
                                        resolve(dataArr)
                                    }
                                })
                                .catch(function(err){
                                    console.log(3);
                                    errC++;
                                    reject(err);
                                })
                            }    
                            else{
                                setTimeout(() => {
                                    dataArr[i] = promiseArr[i];
                                    promiseCount++;
                                    if(promiseArr.length === promiseCount && errC === 0){
                                        console.log(232)
                                        resolve(dataArr)
                                    }
                                }, 0);
                                
                            }
                        }
                    }
                    else{
                        resolve([])
                    }
    
                }
            })            
        }
        catch(err){
            return new Promise(function(resolve, reject){
                reject(err)
            })
            throw err
        }


    }
}

Promise.race({"a": 2, "b": 3})
.then(function(value){
    console.log(value);
}) 



