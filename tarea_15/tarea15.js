const  fibonacci = (num) => {
    let array = [0,1]  
    for(i = 2; i <= num; i++) {
        array[i] = array[i - 1] + array[i - 2]
    }
    return array;
    }
const serie = fibonacci(10)
console.log(serie)
