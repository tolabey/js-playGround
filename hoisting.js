console.log("1");

setTimeout(() => {
  console.log(2);
}, 0);

(function(){
  console.log(3);
})();

var a = function(){
  console.log(4);
}
a();

setTimeout(() => {
  console.log(5)
}, 0);

console.log("6");

setTimeout(() => {
  console.log(7);
}, 0);
console.log(b)