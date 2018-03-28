for (var i = 0; i < 100000; i++) {
    setTimeout(function() {
      console.log(i);
    });
    setTimeout(function a(){
        console.log("2.", i)
    })

    console.log("3232");
  }
  

  {     
      console.log("double brackets Started");
      setTimeout(function(){
          console.log("mustafa");
      })
      console.log("double brackets finished");
  }

  setTimeout(() => {
    console.log(28);
  });



  doA(function(){
      console.log("A");
      doB();
      doC(function(){
          doD();
      });
      doE();
  })

  doF();
  function doA(func){
    func();
    console.log("A");
}
  function doB(){
      console.log("B");
  }
  function doC(doD){
      console.log("C")
    doD();
}
function doD(){
    console.log("D");
}

function doE(){
    console.log("E");
}

function doF(){
    console.log("F");
}

var friends = ["Mike", "Stacy", "Andy", "Rick"];
friends.forEach(function (eachName, index){
    console.log(index + 1 + ". " + eachName); // 1. Mike, 2. Stacy, 3. Andy, 4. Rick​
});



