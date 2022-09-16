// INSTRUCTION

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F

// SOLUTION
function abbrevName(name) {
	let abb1 = name[0].toUpperCase()
	let abb2 = name[name.indexOf(' ') + 1].toUpperCase()
	return `${abb1}.${abb2}`
}
