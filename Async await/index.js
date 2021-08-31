async function f() {
  return 1
}

console.log(f());

async function showAvatar(){
  // запрашиваем JSON с данными пользователя
  let response = await fetch('https://learn.javascript.ru/article/promise-chaining/user.json')
  let user = await response.json()

  // запрашиваем информацию об этом пользователе из github

  let gitHubResponse = await fetch(`https://api.github.com/users/${user.name}`)
  let gitHubUser = await gitHubResponse.json()

   // отображаем аватар пользователя

   let image = document.createElement('img')

   image.src = gitHubUser.avatar_url

   image.className = 'promise-avatar-example'
   document.body.append(image)

   // ждём 3 секунды и затем скрываем аватар


   await new Promise((resolve, reject) => {
     setTimeout(resolve, 3000);
   })

   image.remove()

   return gitHubUser
}

showAvatar()



// await будет ждать массив с результатами выполнения всех промисов
let results = await Promise.all([
  fetch(url1),
  fetch(url2),
  // ...
]);