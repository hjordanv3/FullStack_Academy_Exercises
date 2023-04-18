/* Write your code here! */
function higherOrLower(value1, value2) {
  if (value1 > value2) {
    return "higher";
  } else if (value1 < value2) {
    return "lower";
  } else {
    return "equal";
  }
}

function dvdCollection(...movies) {
  return movies.flat().sort();
}

function studentBody(students) {
  const total = students.length;
  const age = students.reduce((sum, student) => sum + student.age, 0) / total;
  const grade = students.reduce((sum, student) => sum + student.grade, 0) / total;
  return { total, age, grade };
}

function fruitBasket(fruits) {
  return fruits.map((fruit) => ({
    name: fruit,
    weight: Math.floor(Math.random() * 10) + 1,
    eat() {
      return `You ate a ${this.name}!`;
    },
    throwAway() {
      return `You threw away a ${this.name}!`;
    },
  }));
}

function getBooksByLanguage(books) {
  const result = {};
  books.forEach((book) => {
    if (!result[book.language]) {
      result[book.language] = [];
    }
    result[book.language].push(book.title);
  });
  return result;
}

function coinMachine(amount) {
  const quarters = Math.floor(amount / 25);
  amount -= quarters * 25;
  const dimes = Math.floor(amount / 10);
  amount -= dimes * 10;
  const nickels = Math.floor(amount / 5);
  amount -= nickels * 5;
  const pennies = amount;
  return { quarters, dimes, nickels, pennies };
}


// Uncomment the following code if you want to test coinMachine function as well
// code.coinMachine = function (amount) {
//   const quarters = Math.floor(amount / 25);
//   amount %= 25;
//   const dimes = Math.floor(amount / 10);
//   amount %= 10;
//   const nickels = Math.floor(amount / 5);
//   amount %= 5;
//   const pennies = amount;

//   return { quarters, dimes, nickels, pennies };
// };

/**
 * The code below exports your functions so they can be tested.
 * Notice that the names are currently commented out.
 * Uncomment the functions as you write them.
 */
module.exports = {
  higherOrLower,
  dvdCollection,
  studentBody,
  fruitBasket,
  getBooksByLanguage,
  coinMachine,
};
