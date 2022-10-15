// INSTRUCTION
// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

// SOLUTION
function past(h, m, s) {
	//#Happy Coding! ^_^
	s = s * 1000 //conversts seconds to ms
	m = m * 60000 //conversts minutes to ms
	h = h * 3600000 //conversts hours to ms
	return Number(s + m + h)
}
