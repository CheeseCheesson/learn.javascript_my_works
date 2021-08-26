// проверка instanceof будет полагать,
// что всё со свойством canEat - животное Animal
class Animal {
  static [Symbol.hasInstance](obj) {
    if (obj.canEat) return true;
  }
}

let obj = { canEat: true };
console.log(obj instanceof Animal); // true: вызван Animal[Symbol.hasInstance](obj)

// скопируем метод toString в переменную для удобства
let objectToString = Object.prototype.toString;

// какой это тип?
let arr = [];

alert( objectToString.call(arr) ); // [object Array]