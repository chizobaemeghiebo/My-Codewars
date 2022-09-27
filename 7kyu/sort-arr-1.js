// INSTRUCTION
// Just a simple sorting usage. Create a function that returns the elements of the input-array / list sorted in lexicographical order.

// SOLUTION

const sortme = names =>
	names.sort((a, b) => {
		return a > b ? 1 : -1
	})
