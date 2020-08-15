// Create a sum function returns a sum of ever multiples 3 and 5

// Multiples 3, 6, 9




add(10);

function add(limity) {
  let multiple3 = 0;
  let multiple5 = 0;
  for (i = 0; i <= limity; i++) {
    if (i % 3 === 0) {
      multiple3 += i;
    }
    if (i % 5 === 0) {
      multiple5 += i;
    }
  }

  console.log(multiple3 + multiple5);

}