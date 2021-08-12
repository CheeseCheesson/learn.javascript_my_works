let dog = {
  legs: 4,
  color: "чёрный",
  name: "Bob",
  teil: 1,

  get dogProps() {
    return `Это собака по имени ${this.name}. У неё ${this.teil} хвост, цввет: ${this.color}.`;
  },
};
console.log(dog.dogProps);

let cat = {
  legs: 4,
  color: "рыжий",
  name: "Матроскин",
  teil: 1,

  get dogProps() {
    return `Это кот по имени ${this.name}. У него ${this.teil} хвост, цввет: ${this.color}.`;
  },

  //позволим изменить объект
  set catValueChange(value) {
    [this.name, this.color] = value.split(" ");
  },
};

cat.catValueChange = "Марик белый";

console.log(cat.dogProps);

let human = {
  name: "Bob",
  surname: "Adams",
};

Object.defineProperty(human, "fullName", {
  get() {
    return `${this.name} ${this.surname}`;
  },
  set(value) {
    [this.name, this.surname] = value.split(" ")
  },
});

console.log(human.fullName);

for(let k in human){
  console.log(k);
}

let nameObj = {
  get name() {
    return this._name
  },
  set name(value){
    if(value.length < 4){
      console.log(`Имя ${value} меньще 4 символов`);
      return
    }
    this._name = value
  }
}
nameObj.name = 'Кирилл' // устанавливает в set name(value)
console.log(nameObj._name); // получаем из get name()


function User(name, birthday){
  this.name = name;
  this.birthday = birthday;

  Object.defineProperty(this, 'age', {
    get() {
      let todayYear = new Date().getFullYear()
      return todayYear - this.birthday.getFullYear()
    }
  })
}

let george = new User('Georg', new Date(1989, 7, 9))

console.log(george.age);