// Nomor 1
// function sumArray (input){
//     // if (input === []) return 0
//     if (typeof input === ["string"]) return Number([])
//     let sum = 0
//     for (i = 0; i<input.length; i++){
//         sum += input[i]
//     }
// return sum
// }

// console.log(sumArray([1,2,3,4,5,6]));
// console.log(sumArray([1,2,3]));
// console.log(sumArray([10,10,10,10,10]));
// console.log(sumArray([]));

//Nomor 2
// 2. Reverse All Array

// membuat value reverse menjadi string
function reverseValue(inputArray) {
  var resultReverseValue = [];
  for (let i = 0; i < inputArray.length; i++) {
    let stringArray = inputArray[i].toString();
    let kontenReverse = "";
    for (let j = stringArray.length - 1; j >= 0; j--) {
      kontenReverse += stringArray[j];
    }
    resultReverseValue.push(stringArray);
  }
  return resultReverseValue;
}
// console.log(reverseValue([123, 456]));

//eksekusi reverse array!
function reverseArray(inputArray) {
  const newArray = reverseValue(inputArray);
  var resultArray = [];
  for (var i = newArray.length - 1; i >= 0; i--) {
    let kontenArray = Number(newArray[i]);
    resultArray.push(kontenArray);
  }
  return resultArray;
}

console.log(reverseArray([123, 456]));
console.log(reverseArray([332, 432, 661]));
console.log(reverseArray([456789, 332]));
console.log(reverseArray([]));
