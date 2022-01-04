class Rectangle{
    constructor(width, height){
        this.width = width
        this.height = height
    }
    calculateArea(){
        return this.width * this.height
    }

}

const rectangOne = new Rectangle(8,5)
const rectangTwo = new Rectangle(9,3)
const rectangThree = new Rectangle(1,3)

const array = new Array()
array.push(rectangOne,rectangTwo,rectangThree)
for(let i = 0; i<= array.length; i++){
    document.querySelector("#result").innerHTML += `
    O retângulo ${i+1} possui altura <b>${array[i].height} cm</b>, largura <b>${array[i].width} cm</b> e área <b>${array[i].calculateArea()} cm²</b> <br> 
    `
}