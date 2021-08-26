class Article {
  constructor(title, date) {
    this.title = title
    this.date = date
  }
  //второй способ создания this = Article

  static createTodays(){
    return new this('News today', new Date())
  }
 // метод Article для сравнения всех статей
  static compare(articleA, articleB){
    return articleB.date - articleA.date
  }
}

let articles = [
  new Article('HTML', new Date(2020, 2, 3)),
  new Article('CSS', new Date(2020, 5, 16)),
  new Article('JavaScript', new Date(2021, 8, 1))
]

articles.sort(Article.compare)
console.log(articles[0].title);

let lastArticle = Article.createTodays()

console.log(lastArticle.title);


//Наследование статических свойств и методов
class Animal {

  constructor(name, speed) {
    this.speed = speed;
    this.name = name;
  }

  run(speed = 0) {
    this.speed += speed;
    console.log(`${this.name} бежит со скоростью ${this.speed}.`);
  }

  static compare(animalA, animalB) {
    return animalA.speed - animalB.speed;
  }

}

// Наследует от Animal
class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} прячется!`);
  }
}

let rabbits = [
  new Rabbit("Белый кролик", 10),
  new Rabbit("Чёрный кролик", 5)
];

rabbits.sort(Rabbit.compare);

rabbits[0].run(); // Чёрный кролик бежит со скоростью 5.