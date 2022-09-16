// INSTRUCTION

// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

// SOLUTION
function divisibleBy(numbers, divisor) {
	let res = []
	numbers.forEach((i) => {
		if (i % divisor == 0) {
			res.push(i)
		}
	})
	return res
}
