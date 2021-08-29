let btn = document.querySelector('.btn')

let circle = function showCircle(cx, cy, radius){
  let circle = document.createElement('div')
  circle.style.width = 0
  circle.style.height = 0
  circle.style.left = cx + 'px'
  circle.style.top = cy + 'px'
  document.body.append(circle)
  circle.classList.add('circleCSS')
  circle.classList.add('hidden')
  setTimeout(() => {
    circle.textContent = 'Hello'
  }, 3000)
  setTimeout(()=>{
    circle.style.width = radius * 2 + 'px';
    circle.style.height = radius * 2 + 'px';
  }, 2000)

  return circle
}
let myShow = circle(150, 150, 150)

btn.addEventListener('click', () => {
  myShow.classList.toggle('hidden')
  btn.classList.add('hidden')
})


// showCircle(150, 150, 100, div => {
//   div.classList.add('message-ball');
//   div.append("Hello, world!");
// });