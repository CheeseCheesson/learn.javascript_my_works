// let mainHeader = document.getElementById('my_animal')
// let rabbitHeader = document.getElementById('my_rabbit')
// let wolfHeader = document.getElementById('my_wolf')

class Animal {
  constructor(name) {
    this.name = name;
    this.speed = 0;
  }
  run(speed) {
    this.speed = speed;
    console.log(`${this.name} бежит со скоростью ${this.speed}`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} has speed ${this.speed} `);
  }
}

let animal = new Animal("Моё животное");

class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} спрятался`);
  }
  stop() {
    setTimeout(() => super.stop(), 1000);
    setTimeout(() => this.hide(), 2500);
  }
}

let rabbit = new Rabbit("Белый кролик");
rabbit.run(10);
rabbit.stop();

class Wolf extends Animal {
  constructor(name, hairColor, meat) {
    super(name);
    this.hairColor = hairColor;
    this.meat = meat;
  }
  eat() {
    console.log(`${this.name} съел ${this.meat}`);
  }
  stop() {
    super.stop();
    this.eat();
  }
}

let wolfGrey = new Wolf("Гоша", "Серый", "зайца");
wolfGrey.stop();

{
  let animalHome = {
    name: "Животное",
    eat() {
      // animal.eat.[[HomeObject]] == animal
      console.log(`${this.name} ест.`);
    },
  };

  let rabbit = {
    __proto__: animalHome,
    name: "Кролик",
    eat() {
      // rabbit.eat.[[HomeObject]] == rabbit
      super.eat();
    },
  };

  let longEar = {
    __proto__: rabbit,
    name: "Длинноух",
    eat() {
      // longEar.eat.[[HomeObject]] == longEar
      super.eat();
    },
  };

  // работает верно
  longEar.eat(); // Длинноух ест.
}

{
  let animal = {
    sayHi() {
      console.log("Я животное");
    },
  };

  // rabbit наследует от animal
  let rabbit = {
    __proto__: animal,
    sayHi() {
      super.sayHi();
    },
  };

  let plant = {
    sayHi() {
      console.log("Я растение");
    },
  };

  // tree наследует от plant
  let tree = {
    __proto__: plant,
    sayHi: rabbit.sayHi, // (*)
  };

  tree.sayHi(); // Я животное (?!?)
}
// {
//   let animal = {
//     eat: function () {
//       // намеренно пишем так, а не eat() { ...
//       // ...
//     },
//   };

//   let rabbit = {
//     __proto__: animal,
//     eat: function () {
//       super.eat();
//     },
//   };

//   rabbit.eat(); // Ошибка вызова super (потому что нет [[HomeObject]])
// }

