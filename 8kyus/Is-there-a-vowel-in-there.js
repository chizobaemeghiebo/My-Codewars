// INSTRUCTION
// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).
// If they are, change the array value to a string of that vowel.
// Return the resulting array.

// SOLUTION
function isVow(a) {
	let result = []
	for (let i = 0; i < a.length; i++) {
		let str = String.fromCharCode(a[i]).toLowerCase()
		if (str === 'a' || str === 'e' || str === 'i' || str === 'o' || str === 'u') {
			result.push(str)
		} else {
			result.push(a[i])
		}
	}
	return result
}
