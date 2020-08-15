//Divisible 3 => Fizz
//Divisible 5 => Buzz
//Divisible 3 and 5 => FizzBuzz
//Do not divisible 3 and 5 => input
//Not a number => 'Not a number'

const result = fizzBuzz(11);
console.log(result);

function fizzBuzz(input) {

  if (typeof input !== 'number') {
    return 'Not a number';
  }

  if ((input % 3 === 0) && (input % 5 === 0)) {
    return 'FizzBuzz';
  }

  if (input % 3 === 0) {
    return 'Fizz';
  }

  if (input % 5 === 0) {
    return 'Buzz';
  }

  return input;


}