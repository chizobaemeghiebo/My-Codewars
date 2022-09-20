// INSTRUCTION
// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
// The returned value must be a string, and have "***" between each of its letters.
// You should not remove or add elements from/to the array.

// SOLUTION

function twoSort(s) {
	let str = s.sort((a, b) => (a > b ? 1 : -1))
	//   get the first element
	let final = str[0]
	// final result
	return final.split('').join('***')
}

// ALTERNATE SOLUTION
function twoSort(s) {
	let str = s.sort()[0]
	return str.split('').join('***')
}
