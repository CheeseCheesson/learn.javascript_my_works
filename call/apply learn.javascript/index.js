let worker = {
    slow(min, max){
        return min + max
    }
}

function cachingDecorator(func, hash){
    let cache = new Map()

    return function(){
        let key = hash(arguments)
        if(cache.has(key)){
            return cache.get(key)
        }

        let result = func.call(this, ...arguments)

        cache.set(key, result)
        console.log(result);
        return result
    }
}

function hash(args){
    return [].join.call(args)
}


worker.slow = cachingDecorator(worker.slow, hash)

worker.slow(5, 5)



//----------------------------------


function work(a, b) {
    console.log( a + b ); // произвольная функция или метод
  }
  
function spy(func){

   function wrapper(...args){
       wrapper.calls.push(args)
       return func.apply(this, arguments)
   }

   wrapper.calls = []

   return wrapper
}

  work = spy(work);
  
  work(1, 2); // 3
  work(4, 5); // 9
  
  for (let args of work.calls) {
    console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
  }

  //--------------------------------------------------


  function f(x) {
    console.log(x);
  }

  function delay(f, ms){
    return function() {
        setTimeout(() => f.apply(this, arguments), ms);
      };
      
  }
  
  // создаём обёртки
  let f1000 = delay(f, 1000);
  let f1500 = delay(f, 1500);
  
  f1000("test"); // показывает "test" после 1000 мс
  f1500("test");

  //---------------------------------------------------- второй вариант
  function delay2(f, ms) {
    return function(...args) {
      let savedThis = this; // сохраняем this в промежуточную переменную
      setTimeout(function() {
        f.apply(savedThis, args); // используем её
      }, ms);
    };
  }

//----------------------------------------------------

function debounce(f, ms) {

    let isCooldown = false;
  
    return function() {
      if (isCooldown) return;
  
      f.apply(this, arguments);
  
      isCooldown = true;
  
      setTimeout(() => isCooldown = false, ms);
    };
  
  }

  //-----------------------------------------------

  function f(a) {
    console.log(a)
  }

  function throttle(func, ms) {

    let isThrottled = false,
      savedArgs,
      savedThis;
  
    function wrapper() {
  
      if (isThrottled) { // (2)
        savedArgs = arguments;
        savedThis = this;
        return;
      }
  
      func.apply(this, arguments); // (1)
  
      isThrottled = true;
  
      setTimeout(function() {
        isThrottled = false; // (3)
        if (savedArgs) {
          wrapper.apply(savedThis, savedArgs);
          savedArgs = savedThis = null;
        }
      }, ms);
    }
  
    return wrapper;
  }
  // f1000 передаёт вызовы f максимум раз в 1000 мс
  let f1001 = throttle(f, 1000);
  
  f1001(1); // показывает 1
  f1001(2); // (ограничение, 1000 мс ещё нет)
  f1001(3); // (ограничение, 1000 мс ещё нет)