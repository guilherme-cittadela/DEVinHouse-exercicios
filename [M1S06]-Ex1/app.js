const btn = document.querySelector('#botao-ola')


btn.onclick = () =>{
    document.querySelector('#result').innerHTML = `
        <p>Olá, mundo!</p>
    `
}