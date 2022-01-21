class Address{
    constructor(logradouro, num, city, state, country, cep){
        this.checkInput(logradouro)
        this.checkInput(num)
        this.checkInput(city)
        this.checkInput(state)
        this.checkInput(country)
        this.checkInput(cep)
        this.logradouro = logradouro
        this.num = num
        this.city = city
        this.state = state
        this.country = country
        this.cep = cep
    }
    checkInput(value){
        if(typeof value !=='string'){
            throw new Error(`Dados inválidos`)
        }
    }
}

const address = new Address('Servidão canto das pérolas', '344', 'Florianópolis', 'SC', 'Brasil','88063076')

document.querySelector("#result").innerHTML += `O seu endereço é: <br>${address.logradouro}<br> 
Número: ${address.num}<br>
Cidade: ${address.city}<br>
Estado: ${address.state}<br>
País: ${address.country}<br>
CEP: ${address.cep}`


class Cliente extends Address{
    constructor(name, cpf, logradouro, cellPhone, num,city,state,country,cep){
        super(logradouro,num,city,state,country,cep)
        this.checkInput(name)
        this.checkInput(cpf)
        this.checkInput(cellPhone)
        
        this.name = name
        this.cpf = cpf
        this.cellPhone = cellPhone
        
    }
}

const cliente = new Cliente("Gui", "07461190-70", "Servidão canto das pérolas", "48988557102")
console.log(cliente)