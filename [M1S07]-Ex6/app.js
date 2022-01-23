let result = document.querySelector('#result')
const btn = document.querySelector('#busca-btn')

async function buscaCep() {
    try {
        let cep = document.querySelector('#cep')
        const response = await fetch(`https://viacep.com.br/ws/${cep.value}/json`)
        const obj = await response.json()
        console.log(obj)
        result.innerHTML = `
        Endereço: ${obj.logradouro}, ${obj.bairro}, ${obj.localidade} - ${obj.uf}
        `
        cep.value = ''
    } catch (error) {
        console.error('Pegou: ' + error)    }
}
btn.addEventListener('click', buscaCep)