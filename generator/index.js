function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

// "функция-генератор" создаёт объект "генератор"
let generator = generateSequence();
console.log(generator); // [object Generator]
let one = generator.next();

console.log(JSON.stringify(one)); // {value: 1, done: false}

let two = generator.next();

console.log(JSON.stringify(two)); // {value: 2, done: false}

let three = generator.next()

console.log(JSON.stringify(three)); // {value: 2, done: false}
//---------------+++++++++++++++++

function* generateSequenceTwo() {
  yield 1;
  yield 2;
  yield 3;
  //если будет   return 3, то for...of не увидет 3
}

let generator1 = generateSequenceTwo();

for(let value of generator1) {
  console.log(value); // 1, затем 2
}
let sequence = [0, ...generateSequenceTwo()]
console.log(sequence);

//////// итерируемый объект обычный
let range = {
  from: 1,
  to: 5,

  // for..of range вызывает этот метод один раз в самом начале
  [Symbol.iterator]() {
    // ...он возвращает перебираемый объект:
    // далее for..of работает только с этим объектом, запрашивая следующие значения
    return {
      current: this.from,
      last: this.to,

      // next() вызывается при каждой итерации цикла for..of
      next() {
        // нужно вернуть значение как объект {done:.., value :...}
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  }
};

// при переборе объекта range будут выведены числа от range.from до range.to
console.log([...range]); // 1,2,3,4,5


// Итерируемы объект с генератором 
let range1 = {
  from: 1,
  to: 5,

  *[Symbol.iterator]() { // краткая запись для [Symbol.iterator]: function*()
    for(let value = this.from; value <= this.to; value++) {
      yield value;
    }
  }
};

console.log( [...range1] ); // 1,2,3,4,5


function* generateSequence2(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

/*Мы хотели бы использовать её при генерации более сложной последовательности:

сначала цифры 0..9 (с кодами символов 48…57)
за которыми следуют буквы в верхнем регистре A..Z (коды символов 65…90)
за которыми следуют буквы алфавита a..z (коды символов 97…122) */

function* generatePasswordCodes() {

  // 0..9
  yield* generateSequence2(48, 57);

  // A..Z
  yield* generateSequence2(65, 90);

  // a..z
  yield* generateSequence2(97, 122);

}

let str = '';

for(let code of generatePasswordCodes()) {
  str += String.fromCharCode(code);
}

console.log(str); // 0..9A..Za..z


function* gen() {
  // Передаём вопрос во внешний код и ожидаем ответа
  let result = yield "2 + 2 = ?"; // (*)

  console.log(result);
}

let generatorGen = gen();

let question = generatorGen.next().value; // <-- yield возвращает значение

generatorGen.next(4); // --> передаём результат в генератор


////////// асинхронные генераторы

let rangeAsync = {
  from: 1,
  to: 5,

  // for await..of вызывает этот метод один раз в самом начале
  [Symbol.asyncIterator]() { // (1)
    // ...возвращает объект-итератор:
    // далее for await..of работает только с этим объектом,
    // запрашивая у него следующие значения вызовом next()
    return {
      current: this.from,
      last: this.to,

      // next() вызывается на каждой итерации цикла for await..of
      async next() { // (2)
        // должен возвращать значение как объект {done:.., value :...}
        // (автоматически оборачивается в промис с помощью async)

        // можно использовать await внутри для асинхронности:
        await new Promise(resolve => setTimeout(resolve, 1000)); // (3)

        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  }
};

(async () => {

  for await (let value of rangeAsync) { // (4)
    console.log(value); // 1,2,3,4,5
  }

})()



async function* generateSequenceAsync(start, end) {

  for (let i = start; i <= end; i++) {

    // ура, можно использовать await!
    await new Promise(resolve => setTimeout(resolve, 1000));

    yield i;
  }

}

(async () => {

  let generatorA = generateSequenceAsync(1, 5);
  for await (let value of generatorA) {
    console.log(value); // 1, потом 2, потом 3, потом 4, потом 5
  }

})();