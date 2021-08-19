//--------------- Основной синтаксис------------------//
class MyClass {
  constructor(){}
  method1(){}
  method2(){}
  method3(){}
}
let myClassic = new MyClass()
//--------------- Основной синтаксис------------------//

class User {
  constructor (name){
    this.name = name
  }
  sayHi(){
    console.log(this.name);
  }
}
let protertyStr = Object.getOwnPropertyNames(User.prototype).join(', ');

console.log(protertyStr);
console.log(typeof protertyStr);

// Function expression 

let User1 = class {
  sayHi(){
    console.log('Привет');
  }
}

let User2 = class MyClass2{
  sayHi(){
    console.log('Привет2');
  }
}

new User2().sayHi()


// console.log(MyClass2); Будет ошибка, т.к. MyClass2 не видно за пределами User2

class Admin {
  constructor(name){
    this.name = name
  }
  get name(){
    return this._name
  }

  set name(value){
    if (value.length < 4){
      console.log('Коротное имя');
      return
    }
    this._name = value
  }
}


let admin = new Admin("Але")


console.log(admin.name);

Object.defineProperties(Admin.prototype, {
  name: {
    get() {
      return this._name
    },
    set(name) {
      // ...
    }
  }
});


class User5 {


  ['say' + 'Hi'] () {
    console.log("Привет пятый пользователь");
  }

}

new User5().sayHi();

class MyClassBaze {
  prop = value; // свойство
  constructor(){}  // конструктор
    // ...
  method() {} // метод
  get something() {} // геттер
  set something() {} // сеттер
  [Symbol.iterator]() {} // метод с вычисляемым именем (здесь - символом)
  // ...
}