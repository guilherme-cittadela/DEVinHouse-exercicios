let total = 0
const sum = (num, ...num2) =>{
    total = num
    return num2.map((arr) => {
        total += arr
        return document.querySelector('#result').innerHTML = `
            A soma total é <b>${total}</b>.`
    })
}

sum(1, 2, 3, 4, 5, 6, 7, 8, 9)