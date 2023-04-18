# Foundations.TDD.Recursion

TDD is back! This time you'll be writing recursive functions.

## Getting Started

1. Clone this repo.
2. In your terminal, run `npm install`.
3. In your terminal, run `npm test`.
4. Edit `script.js` until you are passing all test cases!
5. _(Optional)_ You can change `describe(...)` to `describe.only(...)` in `script_test.js` if you'd like to run only the tests for the problem you're working on.
6. Type `Control+C` in your terminal to close the Mocha process once you are done testing.

## Restrictions

- Use _arrow function syntax_ to write your functions.
- **Do not** use any loops in your solutions. Use recursion!

## Exercises

### sumNums

`sumNums(n)` takes a number `n` and returns the sum of all numbers from 1 to `n`. If the given number is less than or equal to 1, then `sumNums` will return 1.

`sumNums(4); // 4 + 3 + 2 + 1 = 10`

### cannonball

Cannonballs are stacked in a square pyramidal formation. If a cannonball stack has a height of 3, then there are 9 cannonballs on the bottom, 4 cannonballs in the middle, and 1 cannonball on top, which means that a total of 14 cannonballs are required.

`cannonball(h)` returns the number of cannonballs required to make a stack of height `h`.

`cannonball(3); // 9 + 4 + 1 = 14`

### reverseString

`reverseString(s)` returns the given string with its characters reversed.

```
reverseString(''); // ''
reverseString('abcde'); // 'edcba'
```

### getStringLength

`getStringLength(s)` returns the length of the given string.

**Do not use `.length`!**

### sumArray

`sumArray(arr)` returns the sum of all numbers in the given array.

`sumArray([10,5,5,15]); // 35`

### fibonacci

The Fibonacci sequence is one in which each number is the sum of the two preceding ones. The sequence commonly starts from 0 and 1, where the 0th Fibonacci number is 0, and the 1st Fibonacci number is 1.

`fibonacci(n)` returns the `nth` Fibonacci number.

```
fibonacci(0); // 0
fibonacci(2); // 1
fibonacci(8); // 21
```

### isPalindrome

A palindrome is a string that can be read the same forward or backward.

`isPalindrome(s)` returns whether the given string is a palindrome.

```
isPalindrome('TacoCat'); // true
isPalindrome('NeverOddOrEven'); // true
isPalindrome(''); // true
isPalindrome('palindrome'); // false
```
