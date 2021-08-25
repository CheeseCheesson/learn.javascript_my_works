let d = {
    name: 'John',
    age:30
}
let clone = {}

for (let key in d){
    clone[key] = d[key]

}

console.log(d);

function GetName(){
    this.name1 = 'Вася'

    return {name2 : 'Godzilla'}
}
new GetName().name1;
new GetName().name2;

function GetName2(){
    this.name1 = 'Вася'
    return
}

console.log(new GetName2().name1);

