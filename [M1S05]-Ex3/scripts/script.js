import { Address } from "./Address.js"
import { Client } from "./Client.js"
import { Conta } from "./Conta.js"
 

const address = new Address('Servidão canto das pérolas', 
                            '342', 
                            'Florianópolis', 
                            'SC', 'Brasil',
                            '88063076')


const client = new Client(address,
                            "Gui",
                            "07461190970",
                            "489888557102")

const count = new Conta(client, 
                        "4858-98", 
                        853.58)

document.querySelector("#result").innerHTML += `Olá ${client.name}! <br>
Informações do cliente:<br><br>

Endereço: ${address.logradouro}, ${address.num} - ${address.city} ${address.state} ${address.country}<br>
CEP: ${address.cep}<br>
CPF: ${client.cpf}<br>
Celular: ${client.phoneNumber}<br>
Conta: ${count.accNumber}<br>
Saldo: R$ ${count.balance}`




