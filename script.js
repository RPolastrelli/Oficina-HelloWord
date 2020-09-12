var titulo = document.querySelector("h2")
var input = document.querySelector("input")
var btn = document.querySelector("button")
console.log(titulo,input,btn)
function cliquei() {
   event.preventDefault()
   titulo.innerHTML=input.value 
}