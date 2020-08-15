// Receive amount of values to evaluate
// function shows if each value is even or odd

showType(14);

function showType(limit) {
  for (let i = 0; i <= limit; i++) {
    if (i % 2 === 0) {
      console.log(i, 'even');
    } else {
      console.log(i, 'odd')
    }

  }
}