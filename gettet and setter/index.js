let dog = {
  legs: 4,
  color: 'чёрный',
  name: 'Bob',
  teil: 1,

  get dogProps(){
    return `Это собака по имени ${this.name}. У неё ${this.teil} хвост, цввет: ${this.color}.`
  }
}
console.log(
  dog.dogProps
);

let cat = {
  legs: 4,
  color: 'рыжий',
  name: 'Матроскин',
  teil: 1,

  get dogProps(){
    return `Это кот по имени ${this.name}. У него ${this.teil} хвост, цввет: ${this.color}.`
  },

  //позволим изменить объект
  set catValueChange(value){
    [this.name, this.color] = value.split(' ') 
  }
}

cat.catValueChange = 'Марик белый'

console.log(cat.dogProps);