const isPrime = (num) => {
  const boundry = Math.floor(Math.sqrt(num));
  for (i = 2; i <= boundry; i++) {
    if (num % i === 0) {
      return "No a Prime";
    }
  }
  return "is Prime";
};

console.log(isPrime(11));
console.log(isPrime(15));
console.log(isPrime(17));
console.log(isPrime(125));
