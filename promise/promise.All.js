let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig'
  ];
  
  // Преобразуем каждый URL в промис, возвращённый fetch
  let requests = urls.map(url => fetch(url));
  
  // Promise.all будет ожидать выполнения всех промисов
  Promise.all(requests)
    .then(responses => responses.forEach(
      response => console.log(`${response.url}: ${response.status}`)
    ));

//--------------

let names = ['iliakan', 'remy', 'jeresig'];

let requests1 = names.map(name => fetch(`https://api.github.com/users/${name}`));

Promise.all(requests1)
  .then(responses => {
    // все промисы успешно завершены
    for(let response of responses) {
      console.log(`${response.url}: ${response.status}`); // покажет 200 для каждой ссылки
    }

    return responses;
  })
  // преобразовать массив ответов response в response.json(),
  // чтобы прочитать содержимое каждого
  .then(responses => Promise.all(responses.map(r => r.json())))
  // все JSON-ответы обработаны, users - массив с результатами
  .then(users => users.forEach(user => console.log(user.name)));