export default class Person {
    _cpf

    constructor(name, cpf){
        this.name = name
        this._cpf = cpf
    }

    set cpf(new_cpf){
        this._cpf = new_cpf
    }

    get cpf(){
        return this._cpf
    }
    
    print(){
        document.querySelector('#result').innerHTML = 
        `<p>Nome: ${this.name} <br>CPF:${this.cpf}</p>`
    }

}

