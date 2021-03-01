//Factorial
function calculateFactorial(num1) {
    let result = 1;
    if (num1 < 0) {
        return 'gamma functions';
    }
    for (let i = 1; i <= num1; i++) {
        result *= i;
    }
    return result;
}
//Factorial with recursion
function calculateRecursiveFactorial(num1) {
    if (num1 === 1 || num1 === 0) {
        return 1;
    }
    return num1 * calculateRecursiveFactorial(num1 - 1);
}
//random number 
function makeRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//sum of a three digit number
function sumUpThreeDigits(num1) {
    let ones = num1 % 10;
    let tens = (Math.floor(num1 / 10)) % 10;
    let hundreds = Math.floor(num1 / 100);
    return ones + tens + hundreds;
}

function sumUpDigits(num1) {
    let sum1 = 0;
    let str1 = String(num1);
   for (let i = 0; i < str1.length; i++) {
   sum1 += Number(str1[i]);
   }
    return sum1;
}



function checkLeapYear(year) {
    if ((year % 4) != 0) {
    return 'Not a leap year'
    } else {
        if ((year % 100) != 0) {
            return 'Leap Year'
        } else {
            if ((year % 400) == 0) {
                return 'Leap Year'
            } else {
                return 'Not a leap year'
            }
        }
    }
}


function convertToBinary(num1) {
    let binString = '';
    while (num1 > 0) {
        binString += String(num1 % 2);
        num1 = Math.floor(num1 / 2);
    }
    return binString.split('').reverse().join('');
}

function findBinaryGap(num1) {
    let binaryNumber = convertToBinary(num1);
    let maxGap = 0;
    let counter = 0;

    for (let digit of binaryNumber) {
        if (digit == '1') {
            if (maxGap < counter) {
                maxGap = counter;
            }
            counter = 0;
        } else {
            counter++;
        }
    }
    return maxGap;
}



function findMaxOfThreeNumbs(num1, num2, num3) {
    if (num1 > num2) {
        if (num1 > num3) {
            return num1;
        } else {
            return num3;
        }
    } else {
        if (num2 > num3) {
            return num2;
        } else {
           return num3;
        }
    }
}

console.log(findMaxOfThreeNumbs(1 , 2, 4));