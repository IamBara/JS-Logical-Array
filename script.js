// Nomor 1
// function sumArray (input){
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
    resultReverseValue.push(kontenReverse);
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

// console.log(reverseArray([123, 456]));
// console.log(reverseArray([332, 432, 661]));
// console.log(reverseArray([456789, 332]));
// console.log(reverseArray([]));

// 3. Unique Array

console.log(uniqueArray([1, 1, 1, 1, 1, 1]));
console.log(uniqueArray([1, 1, 2, 2, 3, 3, 4, 4]));
console.log(uniqueArray([1, 4, 5, 6, 1, 1, 2, 2, 3, 4, 5, 6, 7]));
console.log(uniqueArray([]));

// 4. Shopping bubble tea

const listBoba = [
  ["Xing Fu Tang", 38000],
  ["OneZo", 53500],
  ["KOI The", 36000],
  ["Chatime", 25000],
  ["Kokumi", 42000],
  ["Bubble Station Milk", 13000],
];

function jajanBoba(uangJajan) {
  console.log(`David memulai jajan dengan uang ${uangJajan} rupiah`);
  for (let i = 0; i < listBoba.length; i++) {
    if (uangJajan - listBoba[i][1] >= 0) {
      console.log(
        `Dengan uang jajan ${uangJajan}, cukup beli ${listBoba[i][0]},setelah membeli ${listBoba[i][0]} uangnya berkurang ${listBoba[i][1]}`
      );
      uangJajan -= listBoba[i][1];
      console.log(`Jadi uangnya sisa ${uangJajan} `);
    } else {
      console.log(
        `Dengan uang sisa ${uangJajan}, tidak cukup beli ${listBoba[i][0]}`
      );
    }
  }
  console.log(`David pulang dengan sisa uang ${uangJajan}`);
}

// jajanBoba(100000);
