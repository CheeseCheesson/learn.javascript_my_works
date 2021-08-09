let user = {
  userName: "John",
  sayHi() {
    console.log(`Hi, ${this.userName}`);
  },
};

setTimeout(user.sayHi, 1000);


let userCar = {
  carName: 'Honda',
  saySignal() {
    console.log(`${this.carName} say bip-bip`);
  }
}

let myCarSignal = userCar.saySignal.bind(userCar)

myCarSignal()


let secondUser = {
  firstName: 'Vasia'
}

function func() {
  console.log(this.firstName);
}

let myFunc = func.bind(secondUser)

myFunc()

