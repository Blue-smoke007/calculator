const getValues = () => [
    parseFloat(document.getElementById('num1').value),
    parseFloat(document.getElementById('num2').value)
  ];
  
  const updateResult = (result) => {
    document.getElementById('result').innerText = result;
  };
  
  const operations = [
    () => {
      const [num1, num2] = getValues();
      updateResult(num1 + num2);
    },
    () => {
      const [num1, num2] = getValues();
      updateResult(num1 - num2);
    },
    () => {
      const [num1, num2] = getValues();
      updateResult(num1 * num2);
    },
    () => {
      const [num1, num2] = getValues();
      if (num2 === 0) return alert("Cannot divide by zero!");
      updateResult(num1 / num2);
    }
  ];

  //methods used in array//

  let arr1 = [1, 2, 3];
arr1.push(4);  // Adds 4 to the end of the array
console.log(arr1);  // Output: [1, 2, 3, 4]

let arr2 = [1, 2, 3];
let lastElement = arr2.pop();  // Removes 3
console.log(arr2);  // Output: [1, 2]

let arr3 = [1, 2, 3];
let firstElement = arr3.shift();  // Removes 1
console.log(arr3);  // Output: [2, 3]

let arr4 = [2, 3];
arr4.unshift(1);  // Adds 1 at the beginning
console.log(arr4);  // Output: [1, 2, 3]

let arr5 = [1, 2, 3];
let newArr = arr5.map(x => x * 2);  // Doubles each element
console.log(newArr5);  // Output: [2, 4, 6]

let arr6 = [1, 2, 3, 4, 5];
let evenNumbers = arr6.filter(x => x % 2 === 0);  // Filters out odd numbers
console.log(evenNumbers);  // Output: [2, 4]

let arr7 = [1, 2, 3, 4];
let sum = arr7.reduce((accumulator, currentValue) => accumulator + currentValue, 0);  // Sums all elements
console.log(sum);  // Output: 10

let arr8 = [1, 2, 3];
arr8.forEach(x => console.log(x * 2));  // Logs doubled values
// Output: 2, 4, 6