let mainHeader = document.getElementById('my_animal')
let rabbitHeader = document.getElementById('my_rabbit')
let wolfHeader = document.getElementById('my_wolf')

class Animal {
  constructor(name){
    this.name = name
    this.speed = 0
  }
  run(speed){
    this.speed = speed
    mainHeader.textContent =`${this.name} бежит со скоростью ${this.speed}`
  }
  stop(){
    this.speed = 0
  }
}

let animal = new Animal('Моё животное')

class Rabbit {
  constructor(name) {
    this.name = name
  }
  hide(){
    rabbitHeader.textContent = `${this.name} спрятался`;
  }
}

let rabbit = new Rabbit('Белый кролик')

class Wolf {
  constructor(name, color){
    this.name = name
    this.color = color
  }

  eat(animal){
    this.animal = animal
    wolfHeader.textContent = `${this.name} сьел ${this.animal}`;
  }
}

let wolf = new Wolf('Волк', 'Серый')


rabbit.hide()
animal.run(5)
wolf.eat('белого кролика')