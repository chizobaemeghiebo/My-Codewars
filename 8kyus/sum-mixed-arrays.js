// Instructions

// Given an array of integers as strings and numbers, return the sum of the
// array values as if all were numbers. Return your answer as a number.

// solution
function sumMix(x) {
	let sum = 0
	x.forEach((e) => {
		e = Number(e)
		sum += e
	})
	return sum
}
