// INSTRUCTION

// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

// SOLUTION

var number = function (array) {
	//   an empty array to hold values
	let arranged = []
	//   looping through to get numbers
	for (let i = 1; i <= array.length; i++) {
		//     returned value
		let solved = i + ': ' + array[i - 1]
		arranged.push(solved)
	}
	//   conditions
	if (array === []) {
		return []
	} else {
		return arranged
	}
}
