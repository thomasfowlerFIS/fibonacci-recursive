const fibonacci = (n, seed = []) => {
  const tempSeed = seed.length === 0 ? [0, 1] : seed.slice()

  if (n === 0) return tempSeed[0]
  else if (n === 1) return tempSeed[1]

  if (tempSeed.length <= n) { // n >= 3
    tempSeed.push(tempSeed[tempSeed.length - 1] + tempSeed[tempSeed.length - 2])
    return fibonacci(n, tempSeed) 
  }

  return tempSeed[n]
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