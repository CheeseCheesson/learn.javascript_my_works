// современные методы работы с прототипами

Object.create(proto, [description])
Object.getPrototypeOf(obj)
Object.setPrototypeOf(obj, proto)

let animal = {
    east:true
}

let rabbit = Object.create(animal)

console.log(rabbit.east);

Object.getPrototypeOf(rabbit) === animal

Object.setPrototypeOf(rabbit, {}); // заменяем прототип объекта rabbit на {}


let animal2 = {
    eats: true
  };
  // с дескриптором
  let rabbit2 = Object.create(animal2, {
    jumps: {
      value: true
    }
  });

  rabbit.jumps

  // клон obj c тем же прототипом (с поверхностным копированием свойств)
let clone = Object.create(Object.getPrototypeOf(animal2), Object.getOwnPropertyDescriptors(animal2));

console.log(clone);



let dictionary = Object.create(null, {
    toString: { // определяем свойство toString
      value() { // значение -- это функция
        return Object.keys(this).join();
      }
    }
  });

dictionary.apple = "Apple";
dictionary.__proto__ = "test";

console.log(dictionary.apple.toString());
for(let key in dictionary) {
    console.log(key); 
  }