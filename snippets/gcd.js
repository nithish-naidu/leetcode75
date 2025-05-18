function gcd(a, b) {
  return b === 0 ? a : gcd(b, a%b)
}

// console.log(gcd(4,6))
// console.log(gcd(7, 3))
// console.log(gcd(15, 0))

// console.log("ABCABC - ABC", gcd("ABCABC".length, "ABC".length))
// console.log("LEET - CODE", gcd("LEET".length, "CODE".length))
