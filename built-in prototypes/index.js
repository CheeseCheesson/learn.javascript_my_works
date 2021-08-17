let obj = {
  0: 'Hello',
  1: 'world!',
  length: 2
}

obj.join = Array.prototype.join
console.log(obj.join(', '));


console.log(obj.length);

if(!String.prototype.repeat){
  String.prototype.repeat = function(n){
    return new Array(n + 1).join(this)
  }
}
console.log('La'.repeat(4));

Function.prototype.defer = function(ms){
  setTimeout(this, ms);
}

function f() {
  console.log('Привет');
}

f.defer(5000)


Function.prototype.defer2 = function(ms){
  let d = this
  return function(...args) {
    setTimeout(() => {
      d.apply(this, args)     
    }, ms);
  }
}

function d(a, b){
  console.log(a + b);
}

d.defer2(1000)(1, 2)