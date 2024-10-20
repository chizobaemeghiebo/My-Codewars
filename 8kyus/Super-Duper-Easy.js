// INSTRUCTIONS

// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

// SOLUTION

// FULL SOLUTION
function problem(x) {
  //your code here
  if (typeof x === 'number') {
    return x * 50 + 6
  } else {
    return 'Error'
  }
}

// ONE LINER

function problem(x) {
  //your code here
  return typeof x === 'number' ? x * 50 + 6 : 'Error'
}
