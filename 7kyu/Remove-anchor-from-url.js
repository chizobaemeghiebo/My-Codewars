// INSTRUCTION

// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

// SOLUTION

// FULL SOLUTION
function removeUrlAnchor(url) {
  // TODO: complete
  const anchorLocation = url.indexOf('#')
  if (url.includes('#')) {
    const newUrl = url.substring(0, `${anchorLocation}`)
    return newUrl
  } else {
    return url
  }
}

// ONE LINER-ISH
function removeUrlAnchor(url) {
  // TODO: complete
  const anchorLocation = url.indexOf('#')
  return url.includes('#') ? url.substring(0, `${anchorLocation}`) : url
}
