//-----------------------------
//#region Setup
//-----------------------------
const { expect } = require("chai");
const code = require("./script.js");

const generateRandomNumber = (n) => 1 + Math.floor(Math.random() * n);
//#endregion Setup

describe("sumNums", () => {
  it("returns a number", () => {
    const result = code.sumNums(3);
    expect(result).to.be.a("number");
  });

  it("returns 1 for any numbers <= 1", () => {
    expect(code.sumNums(1)).to.equal(1);
    expect(code.sumNums(0)).to.equal(1);
    expect(code.sumNums(-1)).to.equal(1);
  });

  describe("correctly returns the sum of all numbers between 1 and a random integer", () => {
    for (let i = 0; i < 3; i++) {
      const test = generateRandomNumber(100);
      const expected = (test * (test + 1)) / 2;
      it(`returns ${expected} as the sum of all numbers between 1 and ${test}`, () => {
        const result = code.sumNums(test);
        expect(result).to.equal(expected);
      });
    }
  });
});

describe("cannonball", () => {
  it("returns a number", () => {
    const result = code.cannonball(5);
    expect(result).to.be.a("number");
  });

  it("returns 0 for a cannonball stack of height 0", () => {
    const result = code.cannonball(0);
    expect(result).to.equal(0);
  });

  describe("returns the correct number of cannonballs", () => {
    for (let i = 0; i < 3; i++) {
      const test = generateRandomNumber(10);
      const expected = [...Array(test)].reduce(
        (total, _, i) => total + (i + 1) ** 2,
        0
      );

      it(`returns ${expected} for a cannonball stack of height ${test}`, () => {
        const result = code.cannonball(test);
        expect(result).to.equal(expected);
      });
    }
  });
});

describe("reverseString", () => {
  it("returns a string", () => {
    const result = code.reverseString("abcde");
    expect(result).to.be.a("string");
  });

  it("works for empty strings", () => {
    const result = code.reverseString("");
    expect(result).to.equal("");
  });

  it("does nothing to a string with length 1", () => {
    const result = code.reverseString("a");
    expect(result).to.equal("a");
  });

  describe("reverses a string with length > 2", () => {
    for (let i = 0; i < 3; i++) {
      const test = String(100 + generateRandomNumber(999999));
      const expected = Array.from(test).reverse().join("");
      it(`returns ${expected} for ${test}`, () => {
        const result = code.reverseString(test);
        expect(result).to.equal(expected);
      });
    }
  });
});

describe("getStringLength", () => {
  it("returns a number", () => {
    const result = code.getStringLength("tacocat");
    expect(result).to.be.a("number");
  });

  it("returns 0 for an empty string", () => {
    const s = "";
    const result = code.getStringLength(s);
    expect(result).to.equal(s.length);
  });

  describe("returns the length of a string", () => {
    for (let i = 0; i < 3; i++) {
      const s = Array(generateRandomNumber(10)).join("-");
      const expected = s.length;
      it(`returns ${expected} for ${s}`, () => {
        const result = code.getStringLength(s);
        expect(result).to.equal(s.length);
      });
    }
  });
});

describe("sumArray", () => {
  it("returns a number", () => {
    const result = code.sumArray([10, 10, 20, -5, 0, 30]);
    expect(result).to.be.a("number");
  });

  it("returns 0 for an empty array", () => {
    const result = code.sumArray([]);
    expect(result).to.equal(0);
  });

  describe("returns the sum of an array", () => {
    for (let i = 0; i < 3; i++) {
      const test = [...Array(5 + generateRandomNumber(10))].map(() =>
        generateRandomNumber(100)
      );
      const expected = test.reduce((a, v) => a + v);
      it(`returns ${expected} for ${test}`, () => {
        const result = code.sumArray(test);
        expect(result).to.equal(expected);
      });
    }
  });
});

describe("fibonacci", () => {
  it("returns a number", () => {
    const result = code.fibonacci(6);
    expect(result).to.be.a("number");
  });

  it("returns the correct Fibonacci number", () => {
    const fib = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
    for (let i = 0; i < fib.length; i++) {
      const result = code.fibonacci(i);
      expect(result).to.equal(fib[i]);
    }
  });
});

describe.only("isPalindrome", () => {
  it("returns a boolean", () => {
    const result = code.isPalindrome("Kayak");
    expect(result).to.be.a("boolean");
  });

  it("returns true for palindromes", () => {
    const result = code.isPalindrome("kayak");
    expect(result).to.equal(true);
  });

  it("returns true for palindromes regardless of letter case", () => {
    const result = code.isPalindrome("Kayak");
    expect(result).to.equal(true);
  });

  it("returns false for non-palindromes", () => {
    const result = code.isPalindrome("catcat");
    expect(result).to.equal(false);
  });

  it("returns true for empty strings", () => {
    const result = code.isPalindrome("");
    expect(result).to.equal(true);
  });
});
