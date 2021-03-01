function reverseString(str1) {
    return str1.split('').reverse().join('');
}

// console.log(reverseString('John Johnson Phtenfen Phtefenson'));

function reverseStringThroughCycle(str1) {
    let len1 = str1.length;
    let result = '';
    for (let i = str1.length - 1; i >= 0; i--) {
        result += str1[i];
    }
    return result;
}

// console.log(reverseStringThroughCycle('John Johnson Phtenfen Phtefenson'));

function palindromeCheck(word1) {
    word1 = word1.toLowerCase();
    return (word1 == word1.split('').reverse().join(''));
}
;

function countChar(char, word) {
    let counter = 0;
    for (let letter of word) {
        if (letter === char) {
            counter++;
        }
    }
    return counter;
}


function checkAnagram(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    for (let char of str1) {
        if (countChar(char, str1) != (countChar(char, str2))) {
            return false;
        }
    }
    return true;
}

// console.log(checkAnagram('earth', 'Heart'));

function compressString(str1) {
    let counter = 1;
    let result = str1[0];
    for (let i = 0 ; i < str1.length - 1 ; i++) {
        if (str1[i] == str1[i + 1]) {
            counter++;
        } else {
            if (counter > 1) {
                result += String(counter);
            }
            result += str1[i + 1];
            counter = 1;
        }

    }
      if (counter > 1) {
            result += String(counter);
        }
    return result;
}

// console.log(compressString('aaabbbcccccccccccddddxxxecvghdd'));



function decompressString(str1) {
    let result = '';
    let char = '';
    let count = '';
    let sLen = str1.length;

    for (let i = 0 ; i < sLen ; i++) {
        if (isCharacterALetter(str1[i])) {
            if ( count != '' ) {

                result += multiplyLetters(char, Number(count - 1))
                count = '';
            }
            char = str1[i];
            result += char;

        } else {
            count += str1[i];
            if (i == (sLen - 1)) {
                result += multiplyLetters(char, Number(count - 1));
            }
        }
    }
    return result;

        function isCharacterALetter(char) {
      return (/[a-zA-Z]/).test(char)
    }

    function multiplyLetters(char, times) {
        let result = '';
        for (let i = 0 ; i < times; i++) {
            result += char;
        }
        return result;
    }
}

function formUniqueString(str1) {
    let result = ''
    for (let char of str1) {
        char = char.toLowerCase();
        if (result.indexOf(char) == -1) {
            result += char;

        }
    }
    return result;
}


function zeroesForHeroes(num1) {
    num1 = Number(num1);
    if (!num1) {
        return num1;
    }
    while (!(num1 % 10)) {
        num1 = Math.floor(num1 / 10)
    }
    return num1;
}

function createReccursiveReplication(str1, times = 1) {
    if (times == 1) {
        return str1;
    }
    return str1 + createReccursiveReplication(str1, times - 1);
}



function recursivePower(num1, times) {
    if (!times) {
        return 1;
    }
    if (times == 1) {
        return num1;
    } else if (num1 > 1) {
        return recursivePower(num1, times - 1) * num1;
    }
}

function recursiveFactorial(num1) {
    if (!num1) {
        return 1;
    }
    return recursiveFactorial(num1 - 1) * num1;
}

function countSubString(str1, subStr) {
    if (subStr.length > str1.length) {
        return 0;
    }
    let subLen = subStr.length;
    let counter = 0;
    while (str1.indexOf(subStr) > -1) {
        let index = str1.indexOf(subStr);
        str1 = str1.substring(index + subLen)
        counter++;
    }
    return counter;
}

function replaceSubString(str1, oldSub, newSub) {
    let lenOldSub = oldSub.length;
    let index = str1.indexOf(oldSub);

    while (str1.indexOf(oldSub, index) > -1 ) {
        let firstChunk = str1.substring(0, index);
        let lastChunk = str1.substring(index + lenOldSub);
        str1 = firstChunk + newSub + lastChunk;
        index = str1.indexOf(oldSub, index + 1);

        if (index == -1) {
            break;
        }
    }

    return str1;
}

function splitInHalf(str1) {
    let strLen = str1.length;
    let half = Math.floor(strLen / 2);
    let first = '';
    let second = '';
    if ((strLen % 2)) {
        first = str1.substring(0, half + 1);
        second = str1.substring(half + 1);
    } else {
        first = str1.substring(0, half);
        second = str1.substring(half);
    }
    return second + first;
}

function deleteBetweenHOne(str1) {
    let firstIndex = str1.indexOf('h');
    let lastIndex = str1.lastIndexOf('h')
    return str1.slice(0, firstIndex) + str1.slice(lastIndex + 1)
}


function cleanStringFromDigits(str1) {
    let result = '';
    for (let char of str1) {
        let check = Number(char);
        if (!check) {
            result += char;
        }
    }
    return result;
}

function helpBob(str1) {
     let counter = 0;
     for (let char of str1) {
         if ((char.match(/^[0-9a-z]+$/))) {
             counter++;
         }
     }
     return counter;
}

function removeDuplicateWords(str1) {
    let arr1 = str1.split(' ')
    let result = '';

    for (let i = 0 ; i < arr1.length ; i++) {
        if (result.indexOf(arr1[i]) == -1) {
            result += arr1[i];
            if (i != arr1.length - 1)
            result += ' ';
        }
    }
    return result;
}

function checkIfIsogram(str1) {
    if (!str1.length) {
        return true;
    }
    let uniqueString = '';
    for (let char of str1) {
        if (uniqueString.indexOf(char) != -1) {
            return false;
        }
        uniqueString += char;
    }
    return true;
}

function sumMultiplyArr(arr1) {
    let sum = 0;
    let multResult = 1;
    for (let elem of arr1) {
        sum += elem;
        multResult *= elem;
    }
    return 'Sum is :' + sum + ' Mult is :' + multResult + ' Intitial array' + arr1;
}


function countArrayOccurances(arr1) {
    let positive = 0;
    let negative = 0;
    let zeros = 0;

    for (let elem of arr1) {
        if (!elem) {
            zeros++;
        } else if (elem > 0) {
            positive++;
        } else {
            negative++;
        }

    }
    return {
        'Initial Array': arr1,
        'Positive Numbers': positive,
        'Negative Numbers': negative,
        'Zeroes': zeros
    } ;
}

// console.log(countArrayOccurances([1, 2, 25, 173, 8, -12, 15, 0]));

function findMaxMinArray(arr1) {
    let maxNum = Math.max.apply(null, arr1);

    let minNum = Math.min.apply(null, arr1);
    let maxInd;
    let minInd;
    for (let i = 0 ; i < arr1.length ; i++) {
        if (arr1[i] == maxNum) {
            maxInd = i;
        } else if (arr1[i] == minNum) {
            minInd = i;
        }
    }
    return {
        'Initial Array': arr1,
        'Max Number': maxNum,
        'Index of max': maxInd,
        'Min Number': minNum,
        'Index of min': minInd
    };
}

function createSumPairs(arr1, sumNum) {
    let result = [];
    let indexOne = 0;
    while (indexOne < arr1.length) {
        let indexTwo = 0
        while (indexTwo < arr1.length) {
            if (((arr1[indexOne] + arr1[indexTwo]) == sumNum) && (indexOne != indexTwo)) {
                let found = [arr1[indexOne], arr1[indexTwo]];
                found = found.sort();
                result.push(found);

            }
            indexTwo++;
        }
    indexOne++;
    }
    result = removeDuplicates(result);
    return result;

    function removeDuplicates(arr1) {
    arr1 = arr1.sort();
    for (let i = 0; i < arr1.length; i++) {
        for (let i = 0; i < arr1.length - 1; i++) {
            if (arr1[i][0] == arr1[i + 1][0] && arr1[i][1] == arr1[i + 1][1]) {
                arr1.splice(i, 1);
            }
        }
    }
    return arr1;
}

}


function sumElementsBetwMinMax(arr1) {
    let minim = arr1[0];
    let maxim = arr1[0];

    let maxInd = 0;
    let minInd = 0;

    let result = null;
    let subarray = null;

    for (let i = 0 ; i < arr1.length ; i++) {

        if (arr1[i] < minim) {
            minim = arr1[i];
            minInd = i;
        }

        if (arr1[i] > maxim) {
            maxim = arr1[i];
            maxInd = i;
        }
    }

    if (maxInd < minInd) {
        subarray = arr1.slice(maxInd + 1, minInd);
    } else {
        subarray = arr1.slice(minInd + 1, maxInd);
    }

    for (let elem of subarray) {
        result += elem;
    }
    return {
        'initial array': arr1,
       'maximum': maxim,
        'minimum': minim,
        'subarray': subarray,
        'sum': result
    }
}

function calculateBestContinousSum(arr1) {
    let bestSum = 0;
    let bestSublist = null

    for (let i = 0 ; i < arr1.length; i++) {

        let currentSum = arr1[i];
        let subList = [arr1[i]];

        for (let j = i + 1; j < arr1.length; j++) {

            currentSum += arr1[j];
            subList.push(arr1[j]);

            if (currentSum > bestSum) {

                bestSum = currentSum;
                bestSublist = subList.slice();
            }
        }
    }
    return {
        'Best Sum': bestSum,
        'Best Sublist': bestSublist
    };
}

function removeDuplicates(arr1) {
    let result = [];
    for (let elem of arr1) {
        if (result.indexOf(elem) == -1) {
            result.push(elem);
        }
    }
    return result;
}

function sumUpSquareOfElem(arr1) {
    let result = 0;

    for (let elem of arr1) {
        result += elem ** 2;
    }
    return result;
}

function sales(data) {
    let result = [];

    for (let item of data) {

        let isIncluded = false;
        let buyerIndex = null;

        for (let i = 0 ; i < result.length ; i++) {

            let buyer = result[i];

            if (buyer[item[0]] != undefined) {

                isIncluded = true;
                buyerIndex = i;
            }
        }

        if (!isIncluded) {
            let name = item[0];
            let good = item[1];
            let quant = item[2];
            let itemToPush = {};
            itemToPush[name] = {};
            itemToPush[name][good] = quant;
            result.push(itemToPush);
        } else {
            result[buyerIndex][item[0]][item[1]] = item[2];
        }
    }
    return result;
}


function createDictionary(keys, values) {
    let obj = {};
    for (let i = 0 ; i < keys.length ; i++) {
        if (i < values.length) {
            obj[keys[i]] = values[i];
        } else {
            obj[keys[i]] = undefined;
        }
    }
    return obj;
}


function sumArrayRecursion(arr1) {
    if (!arr1.length) {
        return 0;
    } else {
       let value = arr1[0];
       arr1.splice(0, 1);
        return value + sumArrayRecursion(arr1);
    }
}



function splitFarmArea(height, width) {
    if (height > width) {
        let parts = height % width;
        if (!parts) {
            return [width, width];
        } else {
            height = parts;
            return splitFarmArea(height, width);
        }
    } else {
        let parts = width % height;
        if (!parts) {
            return [height, height];
        } else {
            width = parts;
            return splitFarmArea(height, width);
        }
    }
}


function countArrayElements(arr1) {
    if (!arr1.length) {
        return 0;
    }
    return countArrayElements(arr1.slice(1)) + 1;
}

function findAllElementsLessAverage(arr1) {
    let result = []
    let sum1 = 0
    for (let elem of arr1) {
        sum1 += elem;
    }
    let average = sum1 / arr1.length;
    for (let elem of arr1) {
        if (elem < average) {
            result.push(elem);
        }
    }
    return result;
}

function findTwoMinimals(arr1) {
    return [arr1.sort()[0], arr1.sort()[1]];
}


function findMaxArrRecurs(arr1) {
    if (arr1.length == 1) {
       return  arr1[0];
    }
    let recursiveResult = findMaxArrRecurs(arr1.slice(1));
    if (recursiveResult > arr1[0]) {
        return recursiveResult;
    } else {
       return  arr1[0];
    }
}

function findBiggestMidRecurs(arr1) {
    if (!arr1.length) {
        return 0;
    }
    if (arr1.length == 1) {
        return arr1[0];
    }
    let middle = Math.floor(arr1.length / 2);
    let maxOne = findBiggestMidRecurs(arr1.slice(0, middle));
    let maxTwo = findBiggestMidRecurs(arr1.slice(middle));

    if (maxOne > maxTwo) {
        return maxOne;
    } else {
        return maxTwo;
    }

}

function selectionSort(arr1) {
    for (let i = 0 ; i < arr1.length ; i++) {
        let minInd = i;
        for (let j = i + 1 ; j < arr1.length ; j++) {
            if (arr1[minInd] > arr1[j]) {
                minInd = j;
            }
        }
        let swaper = arr1[minInd];
        arr1[minInd] = arr1[i];
        arr1[i] = swaper;
    }
    return arr1;
}

function bubbleSort(arr1) {
    for (let i = 0 ; i < arr1.length ; i++) {
        for (let j = 0 ; j < arr1.length - 1 ; j++ ) {
            if (arr1[j] > arr1[j + 1]) {
                let swaper = arr1[j];
                arr1[j] = arr1[j + 1];
                arr1[j + 1] = swaper;
            }
        }
    }
    return arr1;
}

function insertionSort(arr1) {
    for (let i = 1 ; i < arr1.length ; i++) {
        let j = i - 1;
        let temp = arr1[i];
        while (arr1[j] > temp && j >= 0) {
            arr1[j + 1] = arr1[j];
            j--;
        }
        arr1[j + 1] = temp;
    }
    return arr1;
}

function mergeSort(arr1) {
    if (arr1.length > 1) {

        let middle = Math.floor(arr1.length / 2);

        let left = arr1.slice(0 , middle);
        let right = arr1.slice(middle);

        let i = 0;
        let j = 0;
        let k = 0;

        while ((i < left.length) && (j < right.length)) {
            if (left[i] <= right[j]) {
                arr1[k] = left[i];
                i++;
            } else {
                arr1[k] = right[j];
                j++;
            }
            k++;
        }

        while (i < left.length) {
            arr1[k] = left[i];
            i++;
            k++;
        }

        while (j < right.length) {
            arr1[k] = right[j];
            j++;
            k++;
        }
    }
    return arr1;
}

function binarySearch(arrSorted, needed) {
    let first = 0;
    let last = arrSorted.length - 1;
    while (first <= last) {
        let mid = Math.floor((first + last) / 2 );
        if (needed == arrSorted[mid]) {
            return true;
        } else if (needed < arrSorted[mid]) {
            last = mid - 1;
        } else {
            first = mid + 1;
        }
    }
    return false;
}

console.log(binarySearch([1, 5, 7, 8, 9, 15, 127, 145], 7));
