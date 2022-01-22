import Person from "./Person.js"
import Employees  from "./Employees.js"

let total = 0
let count = 0
const person1 = new Person("Gui", "07461190970")
person1.print()
const employees = [
    new Employees(new Person("Gui", "0746119070"), "dev", 1000),
    new Employees(new Person("Guiro", "0746119760"), "boss", 2000),
    new Employees(new Person("Guirolino", "074767819070"), "CEO", 3000)
]


const salaryTotal = (arr) => {
    arr.forEach(i => {
       total=+ i.salary
       document.querySelector('#result2').innerHTML+= 
       `
            Funcionário: ${arr[count].name.name}<br>
            Salário: R$ ${arr[count].salary}<br><br>

            
       `
       count ++
    });
}
window.onload = () =>{
    salaryTotal(employees)
    
}