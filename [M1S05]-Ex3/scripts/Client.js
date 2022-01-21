import { Address } from "./Address.js"

class Client extends Address{
    constructor(address, name, cpf, phoneNumber){
    
    super(address)
    this.name = name
    this.cpf = cpf
    this.phoneNumber = phoneNumber
    }
}

export { Client }