const fibonacci = (n, arr = []) => {
  if (n === 0) return 0
  else if (n === 1) return 1 

  const result = arr.length === 0 ? [0, 1] : Array.from(arr)
  if (result.length <= n) { // n >= 3
    let nextFib = [result[result.length - 1] + result[result.length - 2]]
    return fibonacci(n, result.concat(nextFib))
  }

  return result[n]
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution

// if returned array's length is
// less than `n`, recurse. Otherwise,
// return arr[n-1]