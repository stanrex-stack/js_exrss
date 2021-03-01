//Factorial
function calculateFactorialThroughCycle(num1) {
    if (num1 < 0) {
        return 'Gamma functions';
    }
    let result = 1;
    for (let i = 2 ; i <= num1 ; i++ ) {
        result *= i;
    }
    return result;
}

function calculateRecursiveFactorialMyself(num1) {
    if (num1 <= 0) {
        return undefined;
    } else if (num1 == 1) {
        return 1;
    } else {
        return num1 * calculateRecursiveFactorialMyself(num1 - 1);
    }
}

function calculateLeapYear(year) {
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

function createRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sumThreeDigitNum(num1) {
    let ones = num1 % 10;
    let tens = Math.floor(num1 / 10) % 10;
    let hundreds = Math.floor(num1 / 100);
    return ones + tens + hundreds;
}

function sumDigits(num1) {
    num1 = Math.abs(num1);
    let result = 0;
    let str1 = String(num1);
    for (let i = 0; i < str1.length; i++) {
        result += Number(str1[i]);
    }
    return result;
}

function controledAmountDigits(digits) {

    if (digits < 1) {
        return 'wrong value';
    }

    function createRandValue(digits) {
        let down = 1 * 10 ** (digits - 1);
        let up = (1 * 10 ** digits) - 1;
        let num1 = createRandDigit(down, up);
        console.log("We created " + num1);
        return num1;
    }

    function createRandDigit(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let num2 = createRandValue(digits);
    let result = 0;
    let iterator = 0;
    while (iterator < digits) {
        result += num2 % 10;
        num2 = Math.floor(num2 / 10);
        iterator++;
    }
    return result;
}


function convertToBinaryString(num1) {
    let binResult = '';
    while (num1 > 0) {
        binResult += String(num1 % 2);
        num1 = Math.floor(num1 / 2);
    }
    return binResult.split('').reverse().join('');
}


function findBinaryGap(num1) {
    let binaryStr = convertToBinaryString(num1);
    console.log('We got binary number ' + binaryStr);
    let maxGap = 0;
    let counter = 0;
    for (let digit of binaryStr) {
        if (digit === '1') {
            if (counter > maxGap) {
                maxGap = counter;
            }
            counter = 0;
        } else {
            counter++;
        }
    }
    return maxGap;
}

function calculateLeapYear(year) {
    return (year % 100 != 0) ? (year % 4 == 0) : (year % 400 == 0);
}


function showFibOfDegree(num1) {
    if (num1 < 1) {
        return undefined;
    }
    if (num1 == 1 || num1 == 2) {
        return 1;
    }
    let firstNum = 1;
    let seconNum = 1;
    for (let i = 2; i < num1; i++) {
        let sum1 = firstNum + seconNum;
        firstNum = seconNum;
        seconNum = sum1;
    }
    return seconNum;
}


function countOddsEvens(num1) {
    let oddCount = 0;
    let evenCount = 0;
    while (num1 > 0) {
        if (num1 % 2 == 0) {
            evenCount++;
            num1 = Math.floor(num1 / 10);
        } else {
            oddCount++;
            num1 = Math.floor(num1 / 10);
        }
    }
    return 'Odds: ' + oddCount + ' Evens: ' + evenCount;
}

function findMaxOf3(num1, num2, num3) {
    return Math.max.apply(null, [num1, num2, num3]);
}

// console.log(findMaxOf3(25, 77, 1));

function calcutateFibonacci(grade) {
    if (grade <= 0) {
        return undefined;
    }
    if (grade == 1 || grade == 2) {
        return 1;
    }
    let result = 0;
    let num1 = 1;
    let num2 = 1;
    for (let i = 2; i < grade; i++) {

        result = num1 + num2;
        num1 = num2;
        num2 = result;
        console.log(result);
    }
}

function printFibonacciElements(grade) {
    let array1 = [];
    if (grade == 0) {
        return array1;
    }
    if (grade > 0) {
        array1[0] = 1;
    }
    if (grade > 1) {
        array1[1] = 1;
    }
    for (let i = 2; i < grade; i++) {
        array1[i] = array1[i - 2] + array1[i - 1];
    }
    return array1;
}

// console.log(printFibonacciElements(56));


function createRecurssiveFibonacci(grade) {
    if (grade <= 0) {
        return undefined;
    } else if (grade == 1) {
        return 1;
    } else if (grade == 2) {
        return 1;
    } else {
        return createRecurssiveFibonacci(grade - 1) + createRecurssiveFibonacci(grade - 2);
    }
}

// console.log(createRecurssiveFibonacci(45));


function countriesAndCities(data, neededCities) {
    let obj = {};

    for (let elem of data) {

        for (let i = 1 ; i < elem.length ; i++) {
            obj[elem[i]] = elem[i];
        }

    }
    let result = [];

    for (let neededCity of neededCities) {

        if (obj[neededCity] != undefined) {
            result.push(obj[neededCity]);
        } else {
            result.push(neededCity + ' is not in our list');
        }
    }
    return result;
}
