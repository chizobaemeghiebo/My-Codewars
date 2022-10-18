// INSTRUCTIONS

// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// remove("Hi!") == "Hi"
// remove("Hi!!!") == "Hi!!"
// remove("!Hi") == "!Hi"
// remove("!Hi!") == "!Hi"
// remove("Hi! Hi!") == "Hi! Hi"
// remove("Hi") == "Hi"

// SOLUTIONS
function remove(string) {
  //coding and coding....

  if (string.endsWith('!')) {
    string = string.split('')
    string.pop()
    return string.join('')
  }
  return string
}
