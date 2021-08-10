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

//---------------------------------------

function askPassword(ok, fail) {
  let password = 'rockstar';
  if (password == "rockstar") ok();
  else fail();
}

let userVas = {
  name: 'Вася',

  loginOk() {
    console.log(`${this.name} logged in`);
  },

  loginFail() {
    console.log(`${this.name} failed to log in`);
  },

};
console.log(askPassword(userVas.loginOk.bind(userVas), userVas.loginFail.bind(userVas)));


//------------------------------

function askPassword2(ok, fail) {
  let password2 = 'rockstar2'
  if (password2 == "rockstar2") ok()
  else fail();
}

let userJ = {
  name: 'John',

  login(result) {
    console.log( this.name + (result ? ' logged in' : ' failed to log in') )
  }
};

askPassword2(()=> userJ.login(true), userJ.login.bind(userJ, false)); 