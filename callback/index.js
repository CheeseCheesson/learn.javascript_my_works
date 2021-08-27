function loadScript(src) {
  let script = document.createElement('script')
  script.src = src
  document.head.append(script)
}

let falag = true
loadScript('./test.js')