import { Address } from "./Address.js"
import { Client } from "./Client.js"
 

const address = new Address('Servidão canto das pérolas', '344', 'Florianópolis', 'SC', 'Brasil','88063076')
const client = new Client(address.logradouro, address.num, address.city,address.state,address.country,address.cep,"Gui","07461190970","489888557102")

document.querySelector("#result").innerHTML += `Olá ${client.name}! <br>
O seu endereço é: <br>${address.logradouro}<br> 
Número: ${address.num}<br>
Cidade: ${address.city}<br>
Estado: ${address.state}<br>
País: ${address.country}<br>
CEP: ${address.cep}<br><br>
Informações do cliente:<br>
CPF: ${client.cpf}<br>
Celular: ${client.phoneNumber}`




