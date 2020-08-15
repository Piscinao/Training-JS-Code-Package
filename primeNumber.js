// Show a list of prime numbers

showPrimeNumbers(15);

function showPrimeNumbers(limit) {
  for (let number = 2; number <= limit; number++) {
    if (PrimeNumber(number)) console.log(number);
  }
}

function PrimeNumber(number) {
  for (let divisor = 2; divisor < number; divisor++) {
    if (number % divisor === 0) {
      return false;
    }
  }

  return true;
}