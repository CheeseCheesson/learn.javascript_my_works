let animal = {
  eats: true,
  walk() {
    console.log('The animal is walking');
  }
}

let rabbit = {
  jumps: true
}

rabbit.__proto__ = animal


let longEar = {
  longEar: 10,
  __proto__: animal
}

console.log(longEar.eats);

//--------------------------
let user = {
  name: 'John',
  surname: 'Smith',

  set fullName(value) {
    [this.name, this.surname] = value.split(' ')
  },

  get fullName() {
    return `${this.name} ${this.surname}`
  }
}  

let admin = {
  __proto__: user,
  isAdmin: true
}

admin.fullName = 'Sara Conor'

console.log(admin);


let allAnimal = {
  eats: true
}

let cenguru = {
  jumps: true,
  __proto__: allAnimal
}

for(let key in cenguru){
  let isOwn = cenguru.hasOwnProperty(key)
  if(isOwn){
    console.log(`Кенгуру имеет ключ ${key}`);
  }else{
    console.log(`Такого ключа, как ${key} нет`);
  }

}


let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: head
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__:table
};

let pockets = {
  money: 2000,
  __proto__: bed,
};

console.log(pockets.pen);
console.log( bed.glasses);
console.log( table.money);


let hamster = {
  stomach: [],

  eat(food) {
    this.stomach = [food];
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

speedy.eat('Apple')
console.log(lazy.stomach);
