function httpGet(theUrl){
    return new Promise(function(resolve, reject) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", theUrl);
        xmlHttp.send();
        xmlHttp.onload = function(){
            console.log(xmlHttp.link)
            resolve({
                status: xmlHttp.status,
                link: xmlHttp.link,
                result: JSON.parse(xmlHttp.response)
            })
        }
        xmlHttp.onerror = function(e){
            reject(new Error(e))
        }
    })

}

let result1, result2, result3 ;

result1 = httpGet("https://api.github.com/users/tolabey")

result2 = httpGet("https://api.github.com/users/jprobinson/repos?per_page=100")

result3 = httpGet("https://api.github.com/search/users?q=tolabey")

Promise.all([result1, result2, result3]).then(function(a){
    console.log(a[0].result)
})

var today = new Date();
console.log(today.getDate())
today.setDate(today.getDate() - 7)
console.log(today)