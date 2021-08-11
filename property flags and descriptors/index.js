let goose = {
  color: "white",
};

let descriptor = Object.getOwnPropertyDescriptor(goose, "color");

console.log(JSON.stringify(descriptor, null, 1));

let user = {
  name: "John",
};

let descriptor2 = Object.getOwnPropertyDescriptor(user, "name");

console.log(JSON.stringify(descriptor2, null, 2));


let admin1 = {
  name: 'Conny',
  toString() {
    return this.name
  }
}

let descriptor3 = Object.defineProperty(admin1, 'name', {
  writable: false
})

admin1.name = 'Jo' // не изменил

console.log(admin1);


let descriptor4 = Object.defineProperty(admin1, 'toString', {
  enumerable: false
})

for(let key in admin1){
  console.log(key);// нет toString
}

let objNatural = {
  shape: 'rect',
  color: 'blue',
  letter: true,
  music: 'tralyalya',
  toSong() {
    return this.music
  }
}

let objClone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(objNatural))

console.log(objClone.toSong());

let objConfigurable = {
  userName: 'Hodor'
}

Object.defineProperty(objConfigurable, 'userName', {
  writable: false,
  configurable: false
})

console.log(objConfigurable);

let descriptor5 = Object.isExtensible(objConfigurable)
console.log(descriptor5);
