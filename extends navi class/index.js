// добавим один метод (можно более одного)
class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }
}

let arr = new PowerArray(1, 2, 5, 10, 50);
console.log(arr.isEmpty()); // false

let filteredArr = arr.filter((item) => item >= 10);
console.log(filteredArr); // 10, 50
console.log(filteredArr.isEmpty()); // false

class PowerArray1 extends Array {
  isEmpty() {
    return this.length === 0;
  }

  // встроенные методы массива будут использовать этот метод как конструктор
  static get [Symbol.species]() {
    return Array;
  }
}

let arr2 = new PowerArray1(1, 2, 5, 10, 50);
console.log(arr.isEmpty()); // false

// filter создаст новый массив, используя arr.constructor[Symbol.species] как конструктор
let filteredArr1 = arr2.filter((item) => item >= 10);

// filteredArr не является PowerArray, это Array
console.log(filteredArr1.isEmpty()); // Error: filteredArr.isEmpty is not a function
