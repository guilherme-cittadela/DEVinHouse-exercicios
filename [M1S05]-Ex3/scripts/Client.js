import { Address } from "./Address.js"

class Client extends Address{
    constructor(logradouro,num,city,state,country,cep, name, cpf, phoneNumber){
    
    super(logradouro,num,city,state,country,cep)
    this.name = name
    this.cpf = cpf
    this.phoneNumber = phoneNumber
    }
}

export { Client }