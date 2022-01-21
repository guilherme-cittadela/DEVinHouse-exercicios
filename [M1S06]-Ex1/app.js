const btn = document.querySelector('#botao-ola')
const btn2 = document.querySelector('#botao-ola2')
let nome = document.querySelector('#nome')

btn.onclick = () =>{
    helloMessage()
}

btn2.onclick = () =>{
    helloMessage2(nome.value)
    nome.value = ""
}

const helloMessage = () =>{
    document.querySelector('#result').innerHTML = 
             `<p>Olá, mundo!</p>`
}

const helloMessage2 = value => {
    if(value != ""){
        document.querySelector('#result2').innerHTML = 
             `<p>Olá, ${value}!</p>`
    }
    else{
        alert("Digite seu nome!")
    }
    
}


