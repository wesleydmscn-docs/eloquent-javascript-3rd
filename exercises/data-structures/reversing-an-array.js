/*
- Write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, 
takes an array as argument and produces a new array that has the same elements
in the inverse order. The second, reverseArrayInPlace, does what the reverse method does:
it modifies the array given as argument by reversing its elements. 
Neither may use the standard reverse method.
*/
let arrayValue = [1, 2, 3, 4, 5];

function reverseArray(arr) {
  const newArray = [];

  for (let i = arr.length; i > 0; i--) {
    newArray.push(arr[i - 1]);
  }

  return newArray;
}

function reverseArrayInPlace(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    const temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
}

reverseArrayInPlace(arrayValue);

console.log(reverseArray(["A", "B", "C"]));
console.log(arrayValue);