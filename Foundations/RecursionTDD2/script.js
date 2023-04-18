/* Write your code here! */
const sumNums=(n)=>{
if (n <= 1) {
  return 1
}
let sum =0;
for (let i =1; i <= n; i++) {
  sum += i;
}
return sum
}


const cannonball=(h)=>{
  if (h <= 0) {
    return 0
  }
let getCannonball=(h)=>{
  return (h * (h + 1) * (2 * h + 1)) / 6;
}
const cannonballCount = getCannonball(h);
return cannonballCount
}

const reverseString=(n)=>{
  if (n === "") {
    return ""
  }
  else if (n.length ===1) {
    return n
  } else {
    return reverseString(n.substring(1)) + n.charAt(0);
  }
}

const getStringLength = (str) => {
  let count = 0;
  for (let char of str) {
    count++;
  }
  return count;
}

const sumArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

const fibonacci = (n) => {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

const isPalindrome = (str) => {
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
};
/**
 * The code below exports your functions so they can be tested.
 * Notice that the names are currently commented out.
 * Uncomment the functions as you write them.
 */
module.exports = {
  sumNums,
  cannonball,
  reverseString,
  getStringLength,
  sumArray,
  fibonacci,
  isPalindrome,
};
