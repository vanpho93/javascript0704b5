const arr = [1, 4, 2, 6, 8];

const dou = arr.map(e => e * e);
console.log(dou);

arr.forEach(e => console.log(e));
// function doubleArray(numArray) {
//     let arrResult = [];
//     for (let i = 0; i < arr.length; i++) {
//         arrResult.push(numArray[i] * 2);
//     }
//     return arrResult;
// }

// console.log(doubleArray(arr));
