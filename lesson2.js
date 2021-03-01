function calculateCircleArea(radius) {
    return Math.round((radius ** 2) * Math.PI);
}

function calculateRectangleArea(height, width) {
    return Math.round(height * width);
}



function calculateSquareAre(side) {
    return Math.round(side ** 2);
}

function multiplicateTwoNumbers(num1, num2) {
    let result = 0;
    for (let i = 1 ; i <= num2 ; i++) {
        result += num1;
    }
    return result;
}

let cities = {
    'Los Angeles': [550, 370],
    'Chicago': [510, 510],
    'Dallas': [480, 480]
}
let resultObj = {};

function calculateCityDistance(cityOne, cityTwo, initialObject, resultObject) {
    if (resultObject[cityOne] == undefined) {
        resultObject[cityOne] = {};
    }
    resultObject[cityOne][cityTwo] = (((initialObject[cityOne][0] - initialObject[cityTwo][0]) ** 2) + ((initialObject[cityOne][1] - initialObject[cityTwo][1]) ** 2) ** 0.5);
}


function convertSecondsToHours(seconds) {
    let hours = Math.floor(seconds / 3600);
    seconds = seconds - hours * 3600;
    let minutes = Math.floor(seconds / 60);
    seconds = seconds - minutes * 60;
    return hours + ':' + minutes + ':' + seconds;
}

console.log(convertSecondsToHours(10121));