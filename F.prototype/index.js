let animal = {
  eats: true,
  color: 'black'
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit("White Rabbit");

function Dog(name){
  this.name = name
 
}

Dog.prototype = animal

let bobik = new Dog('Bobik', 'Blue')

console.log(bobik);

for(let key in bobik){
  console.log(key);
}
let x = Object.keys(bobik)
console.log(x);
console.log(bobik.eats);

function Puppy (name, age, type){
  this.name = name
  this.age = age
  this.type = type
}

Puppy.prototype = animal

let sharik = new Puppy('Sharik', 'one day', 'Bulgod')

console.log(sharik.color);


console.log(Puppy.prototype);