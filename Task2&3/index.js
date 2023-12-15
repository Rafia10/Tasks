/*Task:Write a program to calculate sum of Even and Product of Odd
values in given array*/

function transformArray(numbers) {
    //sum of even numbers
    const filterEvenVal = numbers.filter((num) => num % 2 === 0)
    const sum = filterEvenVal.reduce((acc, curr) => {
        return acc + curr
    }, 0)

    //product of odd numbers
    const filterOddVal = numbers.filter((num) => num % 2 !== 0)
    const product = filterOddVal.reduce((acc, num) => {
        return acc * num
    })
    return {
        sum, product
    }
}

console.log(transformArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

//Task 3: Calculate the sum of two big integers

function sumBigInt(num1,num2){
   return num1+num2
   
}
console.log(sumBigInt(BigInt(123000000000000),BigInt(1240000000000)))