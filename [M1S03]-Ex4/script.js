var data = new Date()
let hour = data.getHours()
let minutes = data.getMinutes()
let seconds = data.getSeconds()

let time = document.getElementById("acess-time")
window.onload = function(){
    time.innerText=`Acesso realizado as ${hour}:${minutes}`
}