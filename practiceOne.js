let a = '12b4c3';
let arr = [];
arr[arr.length] = '1';
// console.log(arr);
arr[arr.length] = '2';
// console.log(arr);
let obj = {};
let iter = 1;
// obj[iter++] = 'sun';
// console.log(obj);
// obj[iter++] = "mon";
// console.log(obj);
obj['key1'] = '2';
// console.log(obj['key1']);
obj = {key1: 1, key2: 2, key3: 3};
let sum = obj.key1 + obj.key2 + obj.key3;
// console.log(++sum);

let key = 'key1';
console.log(typeof obj);

console.log( Array.isArray({a: 1, b: 2, c: 3}) );
console.log( Array.isArray([1, 2, 3]) );

console.log(120000 / 52 / 40)
