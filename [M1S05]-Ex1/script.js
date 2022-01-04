class Rectangle{
    constructor(width, height){
        this.width = width
        this.height = height
    }
}

const rectangOne = new Rectangle(8,5)
const rectangTwo = new Rectangle(9,3)
const rectangThree = new Rectangle(1,3)

const array = new Array()
array.push(rectangOne,rectangTwo,rectangThree)
console.log(array)
for(let i = 0; i<= array.length; i++){
    document.querySelector("#result").innerHTML += `
    O retângulo ${i+1} possui altura <b>${array[i].height} cm</b> e largura <b>${array[i].width} cm</b> <br> 
    `
}