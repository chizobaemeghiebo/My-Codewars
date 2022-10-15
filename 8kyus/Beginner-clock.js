// INSTRUCTION
// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

// SOLUTION
function past(h, m, s) {
	//#Happy Coding! ^_^
	s = s * 1000 //conversts seconds to ms
	m = m * 60000 //conversts minutes to ms
	h = h * 3600000 //conversts hours to ms
	return Number(s + m + h)
}
