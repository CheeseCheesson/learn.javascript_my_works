let group = {
    title: 'Our groups',
    students: ['John', 'Pete', 'George', 'Kristina'],
    showStudet(){
        this.students.forEach(
            student => console.log(`${this.title} name ${student}`)
        )
    }
}

group.showStudet()

function defer(f, ms) {
    return function() {
      setTimeout(() => console.log(f(this, arguments), ms))
    };
  }
  
  function sayHi(who) {
    console.log('Hello, ' + who);
  }
  
  let sayHiDeferred = defer(sayHi, 2000);
  sayHiDeferred("John")


