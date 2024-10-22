// INSTRUCTION
// A trick I learned in elementary school to determine whether or not a number was divisible by three is to add all of the integers in the number together and to divide the resulting sum by three. If there is no remainder from dividing the sum by three, then the original number is divisible by three as well.

// Given a series of digits as a string, determine if the number represented by the string is divisible by three.

// Example:

// "123"      -> true
// "8409"     -> true
// "100853"   -> false
// "33333333" -> true
// "7"        -> false
// Try to avoid using the % (modulo) operator.

// SOLUTION
function divisibleByThree(str) {
  let num = str
    .split('')
    .map((letter) => Number(letter))
    .reduce((acc, sum) => acc + sum, 0)
  console.log(num)
  return num % 3 == 0 ? true : false
}

// WITHOUT MODULUS OPERATOR
function divisibleByThree(str) {
  let num = str
    .split('')
    .map((letter) => Number(letter))
    .reduce((acc, sum) => acc + sum, 0)
  console.log(num)
  return Number.isInteger(num / 3) ? true : false
}
