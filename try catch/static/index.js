let json = "{ некорректный JSON }";

try {

  let user = JSON.parse(json); // <-- тут возникает ошибка...
  console.log( user.name ); // не сработает

} catch (e) {
  // ...выполнение прыгает сюда
  console.log( "Извините, в данных ошибка, мы попробуем получить их ещё раз." );
  console.log( e.name );
  console.log( e.message );
}


// let error = new Error(message);

// let error2 = new SyntaxError(message);
// let error3 = new ReferenceError(message);


let json2 = '{ "age": 30 }'; // данные неполны

try {

  let user = JSON.parse(json); // <-- выполнится без ошибок

  if (!user.name) {
    throw new SyntaxError("Данные неполны: нет имени"); // (*)
  }

  console.log( user.name );

} catch(e) {
  console.log( "JSON Error: " + e.message ); // JSON Error: Данные неполны: нет имени
}


function readData() {
  let json3 = '{ "age": 30 }';

  try {
    // ...
    blabla(); // ошибка!
  } catch (e) {
    // ...
    if (e.name != 'SyntaxError') {
      throw e; // проброс исключения (не знаю как это обработать)
    }
  }
}

try {
  readData();
} catch (e) {
  console.log( "Внешний catch поймал: " + e ); // поймал!
}



class ReadError extends Error {
  constructor(message, cause) {
    super(message);
    this.cause = cause;
    this.name = 'ReadError';
  }
}

class ValidationError extends Error { /*...*/ }
class PropertyRequiredError extends ValidationError { /* ... */ }

function validateUser(user) {
  if (!user.age) {
    throw new PropertyRequiredError("age");
  }

  if (!user.name) {
    throw new PropertyRequiredError("name");
  }
}

function readUser(json) {
  let user;

  try {
    user = JSON.parse(json);
  } catch (err) {
    if (err instanceof SyntaxError) {
      throw new ReadError("Синтаксическая ошибка", err);
    } else {
      throw err;
    }
  }

  try {
    validateUser(user);
  } catch (err) {
    if (err instanceof ValidationError) {
      throw new ReadError("Ошибка валидации", err);
    } else {
      throw err;
    }
  }

}

try {
  readUser('{bad json}');
} catch (e) {
  if (e instanceof ReadError) {
    console.log(e);
    // Исходная ошибка: SyntaxError:Unexpected token b in JSON at position 1
    console.log("Исходная ошибка: " + e.cause);
  } else {
    throw e;
  }
}